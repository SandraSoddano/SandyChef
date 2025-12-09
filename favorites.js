console.log("🔍 Favorites.js carregou!");

class FavoritesManager {
    constructor() {
        console.log("✅ FavoritesManager criado!");
        this.favorites = this.loadFavorites();
        this.updateAllStats();
    }

    loadFavorites() {
        try {
            const stored = localStorage.getItem('sandychef_favorites_v2');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Erro ao carregar favoritos:', error);
            return [];
        }
    }

    saveFavorites() {
        try {
            localStorage.setItem('sandychef_favorites_v2', JSON.stringify(this.favorites));
            this.updateAllStats();
        } catch (error) {
            console.error('Erro ao salvar favoritos:', error);
        }
    }

    generateRecipeId(recipeTitle) {
        return 'recipe_' + recipeTitle.toLowerCase()
            .replace(/[^a-z0-9]/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '');
    }

    isFavorite(recipeTitle) {
        const recipeId = this.generateRecipeId(recipeTitle);
        return this.favorites.includes(recipeId);
    }

    toggleFavorite(recipeTitle) {
        const recipeId = this.generateRecipeId(recipeTitle);
        const index = this.favorites.indexOf(recipeId);
        
        if (index === -1) {
            this.favorites.push(recipeId);
            this.showNotification(`❤️ ${recipeTitle} adicionado aos favoritos!`);
        } else {
            this.favorites.splice(index, 1);
            this.showNotification(`💔 ${recipeTitle} removido dos favoritos!`);
        }
        
        this.saveFavorites();
        this.updateFavoriteButtons();
        return this.isFavorite(recipeTitle);
    }

//    updateFavoriteCount() {
//        const count = this.favorites.length;
//        const favoritesCountElement = document.getElementById('favoritesCount');
//        if (favoritesCountElement) {
//            favoritesCountElement.textContent = count;
//        }
//    }


    updateFavoriteButtons() {
        console.log("🔄 Atualizando botões de favorito...");
        const recipeCards = document.querySelectorAll('.recipe-card');
        
        recipeCards.forEach(card => {
            const titleElement = card.querySelector('.recipe-title');
            if (!titleElement) return;
            
            const title = titleElement.textContent.trim();
            let favoriteBtn = card.querySelector('.favorite-btn');
            
            if (!favoriteBtn) {
                favoriteBtn = document.createElement('button');
                favoriteBtn.className = 'favorite-btn';
                favoriteBtn.onclick = (e) => {
                    e.stopPropagation();
                    this.toggleFavorite(title);
                };
                card.appendChild(favoriteBtn);
            }

            const isFav = this.isFavorite(title);
            favoriteBtn.innerHTML = isFav ? '❤️' : '🤍';
            favoriteBtn.title = isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
        });
    }

//START GETFAVORITERECIPES

getFavoriteRecipes() {
    console.log('🔍 DEBUG: getFavoriteRecipes chamada');
    console.log('🔍 DEBUG: this.favorites:', this.favorites);
    
    // Tentar diferentes fontes de receitas
    let recipes = null;
    
    if (typeof window.allRecipes !== 'undefined' && window.allRecipes && window.allRecipes.length > 0) {
        recipes = window.allRecipes;
        console.log('📋 DEBUG: Usando window.allRecipes');
    } else if (typeof allRecipes !== 'undefined' && allRecipes && allRecipes.length > 0) {
        recipes = allRecipes;
        console.log('📋 DEBUG: Usando allRecipes global');
    } else {
        console.log('❌ DEBUG: Nenhuma fonte de receitas encontrada');
        console.log('🔍 DEBUG: window.allRecipes:', typeof window.allRecipes);
        console.log('🔍 DEBUG: allRecipes:', typeof allRecipes);
        return [];
    }
    
    console.log('📊 DEBUG: Total de receitas disponíveis:', recipes.length);
    
    const favoriteRecipes = recipes.filter(recipe => {
        const isFav = this.isFavorite(recipe.title);
        if (isFav) console.log('✅ Receita favorita:', recipe.title);
        return isFav;
    });
    
    console.log('🎯 DEBUG: Total favoritas encontradas:', favoriteRecipes.length);
    return favoriteRecipes;
}

// END GETFAVORITERECIPES

    showFavoritesOnly() {
        console.log('🔍 DEBUG: showFavoritesOnly chamada');

        const favoriteRecipes = this.getFavoriteRecipes();
        
        if (favoriteRecipes.length === 0) {
            console.log('🔍 DEBUG: Nenhuma receita favorita');
            document.getElementById('recipesGrid').innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #e8e8e8;">
                    <h3>❤️ Nenhuma receita favorita ainda!</h3>
                </div>`;
            return;
        }

        console.log('🔍 DEBUG: Renderizando favoritas');

        const t = (window.translations && window.translations[window.currentLanguage]) ?
            window.translations[window.currentLanguage] :
            { btnView: 'Ver', btnEdit: 'Editar', btnDelete: 'Excluir', navFavorites: 'Favoritos' };

        const grid = document.getElementById('recipesGrid');
        
        grid.innerHTML = favoriteRecipes.map(recipe => `
            <div class="recipe-card">
                <div class="category-badge">${recipe.category}</div>
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
                <div class="recipe-title">${recipe.title}</div>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>📊 ${recipe.difficulty}</span>
                    <span>👥 ${recipe.servings}</span>
                </div>
                <div class="recipe-description">${recipe.description}</div>
                <div class="recipe-actions">
                    <button class="recipe-btn view-btn">${t.btnView || 'Ver'}</button>
                    <button class="recipe-btn edit-btn">${t.btnEdit || 'Editar'}</button>
                    <button class="recipe-btn delete-btn">${t.btnDelete || 'Excluir'}</button>
                </div>
            </div>
        `).join('');

        setTimeout(() => this.updateFavoriteButtons(), 100);

        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) {
            const favoritesLabel = t.navFavorites || 'Favoritos';
            pageTitle.textContent = `❤️ ${favoritesLabel} (${favoriteRecipes.length})`;
        }

        if (typeof updateStatsForCurrentView === 'function') {
            updateStatsForCurrentView('favorites');
        } else if (typeof updateStats === 'function') {
            updateStats(favoriteRecipes.length, favoriteRecipes.length);
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #d4af37, #ffd700);
            color: #1a1a2e;
            padding: 15px 25px;
            border-radius: 25px;
            font-weight: bold;
            box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
            z-index: 10000;
        `;

        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }

// adicionar nova funcao updateallstats
updateAllStats() {
    const totalRecipes = (typeof allRecipes !== 'undefined' && Array.isArray(allRecipes)) ? allRecipes.length : this.favorites.length;
    const favoritesCount = this.favorites.length;

    if (typeof updateStats === 'function') {
        updateStats(totalRecipes, favoritesCount);
        return;
    }

    this.updateElementById(['totalRecipes'], totalRecipes);
    this.updateElementById(['favoritesCount', 'favoriteRecipes'], favoritesCount);
    this.updateElementById(['completedRecipes'], 0);
    this.updateElementById(['sealsEarned'], 0);
}

// end adicionar nova funcao updateallstats


updateElementById(possibleIds, value) {
    possibleIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
}



}

window.FavoritesManager = FavoritesManager;
console.log("✅ FavoritesManager disponível!");