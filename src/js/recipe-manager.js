// 🍷✨ SandyChef™ - Gerenciador de Receitas
class RecipeManager {
    constructor() {
        this.recipes = this.loadRecipes();
        this.nextId = this.getNextId();
    }

    loadRecipes() {
        const saved = localStorage.getItem('sandychef_custom_recipes');
        const customRecipes = saved ? JSON.parse(saved) : [];
        return [...SANDYCHEF_RECIPES, ...customRecipes];
    }

    saveCustomRecipes() {
        const customRecipes = this.recipes.filter(recipe => recipe.id > 1000);
        localStorage.setItem('sandychef_custom_recipes', JSON.stringify(customRecipes));
    }

    getNextId() {
        const maxId = Math.max(...this.recipes.map(r => r.id), 1000);
        return maxId + 1;
    }

    addRecipe(recipeData) {
        const newRecipe = {
            id: this.nextId++,
            ...recipeData,
            dateAdded: new Date().toISOString(),
            isCustom: true
        };
        
        this.recipes.push(newRecipe);
        this.saveCustomRecipes();
        return newRecipe;
    }

    updateRecipe(id, recipeData) {
        const index = this.recipes.findIndex(r => r.id === id);
        if (index > -1) {
            this.recipes[index] = { ...this.recipes[index], ...recipeData };
            this.saveCustomRecipes();
            return this.recipes[index];
        }
        return null;
    }

    deleteRecipe(id) {
        const index = this.recipes.findIndex(r => r.id === id);
        if (index > -1 && this.recipes[index].isCustom) {
            this.recipes.splice(index, 1);
            this.saveCustomRecipes();
            return true;
        }
        return false;
    }

    getRecipe(id) {
        return this.recipes.find(r => r.id === id);
    }

    getAllRecipes() {
        return this.recipes;
    }

    searchRecipes(query) {
        const searchTerm = query.toLowerCase();
        return this.recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.subtitle?.toLowerCase().includes(searchTerm) ||
            recipe.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            recipe.ingredients?.some(ing => ing.toLowerCase().includes(searchTerm))
        );
    }
}

// Instanciar o gerenciador de receitas
const recipeManager = new RecipeManager();
