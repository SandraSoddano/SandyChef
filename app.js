//    <script>

        // COMPREHENSIVE INGREDIENT DATABASE - Maps recipes to their key ingredients
        const recipeIngredients = {
            // TUTTE (Mixed Complexity)
            "Classic Margherita Pizza": ["tomato", "mozzarella", "basil", "flour", "olive oil", "garlic"],
            "Homestyle Chicken Parmesan": ["chicken", "parmesan", "breadcrumbs", "marinara", "mozzarella", "herbs"],
            "Traditional Caesar Salad": ["romaine lettuce", "parmesan", "croutons", "anchovies", "lemon", "garlic"],
            "Classic Chocolate Cake": ["chocolate", "flour", "sugar", "eggs", "butter", "vanilla"],
            "Perfect Grilled Steak": ["beef", "steak", "herbs", "butter", "garlic", "vegetables"],
            "Mediterranean Salmon": ["salmon", "lemon", "herbs", "olive oil", "vegetables", "garlic"],
            "Authentic Carbonara": ["pasta", "eggs", "pecorino", "guanciale", "black pepper", "garlic"],
            "Spaghetti Aglio e Olio": ["spaghetti", "garlic", "olive oil", "red pepper", "parsley", "pasta"],
            "Classic Tiramisu": ["mascarpone", "coffee", "cocoa", "ladyfingers", "eggs", "sugar"],

            // FACILE (Easy)
            "Simple Caprese Salad": ["mozzarella", "tomato", "basil", "olive oil", "balsamic", "salt"],
            "Quick Pasta Aglio e Olio": ["spaghetti", "garlic", "olive oil", "red pepper", "parsley", "pasta"],
            "Spaghetti Cacio e Pepe": ["spaghetti", "pecorino", "black pepper", "pasta", "cheese", "water"],
            "Penne all'Arrabbiata": ["penne", "tomato", "garlic", "red chili", "olive oil", "pasta"],
            "Fettuccine Alfredo": ["fettuccine", "butter", "parmesan", "cream", "pasta", "cheese"],
            "Spaghetti Puttanesca": ["spaghetti", "olives", "capers", "anchovies", "tomato", "garlic"],
            "Grilled Chicken Breast": ["chicken", "herbs", "olive oil", "lemon", "garlic", "seasoning"],
            "Pan-Seared Salmon": ["salmon", "lemon", "dill", "olive oil", "butter", "fish"],
            "Basic Beef Stir-Fry": ["beef", "vegetables", "soy sauce", "garlic", "ginger", "rice"],
            "Chocolate Mousse": ["chocolate", "eggs", "cream", "sugar", "butter", "vanilla"],
            "Stuffed Bell Peppers": ["bell peppers", "rice", "vegetables", "herbs", "onion", "garlic"],
            "Herb-Crusted Pork Tenderloin": ["pork", "herbs", "garlic", "olive oil", "breadcrumbs", "seasoning"],
            "Lemon Garlic Shrimp": ["shrimp", "lemon", "garlic", "butter", "parsley", "olive oil"],
            "Vanilla Panna Cotta": ["cream", "vanilla", "sugar", "gelatin", "milk", "berries"],

            // INTERMEDIO (Intermediate)
            "Chicken Marsala": ["chicken", "marsala wine", "mushrooms", "herbs", "butter", "flour"],
            "Homemade Lasagna": ["pasta", "meat sauce", "cheese", "bechamel", "tomato", "herbs"],
            "Spaghetti Bolognese": ["spaghetti", "ground beef", "tomato", "wine", "herbs", "onion"],
            "Gnocchi Sorrentina": ["gnocchi", "tomato sauce", "mozzarella", "basil", "garlic", "olive oil"],
            "Penne alla Vodka": ["penne", "vodka", "cream", "tomato", "pancetta", "herbs"],
            "Linguine alle Vongole": ["linguine", "clams", "white wine", "garlic", "parsley", "olive oil"],
            "Ravioli di Ricotta": ["pasta", "ricotta", "spinach", "sage", "butter", "parmesan"],
            "Braised Lamb Chops": ["lamb", "red wine", "rosemary", "garlic", "vegetables", "herbs"],
            "Seafood Paella": ["rice", "shrimp", "mussels", "saffron", "vegetables", "seafood"],
            "Eggplant Parmigiana": ["eggplant", "tomato sauce", "mozzarella", "parmesan", "basil", "breadcrumbs"],
            "New York Cheesecake": ["cream cheese", "eggs", "sugar", "graham crackers", "butter", "vanilla"],
            "Chicken Piccata": ["chicken", "lemon", "capers", "butter", "flour", "white wine"],
            "Mushroom Risotto": ["arborio rice", "mushrooms", "parmesan", "white wine", "onion", "butter"],
            "Pan-Seared Sea Bass": ["sea bass", "lemon", "butter", "herbs", "olive oil", "fish"],
            "Beef Short Ribs": ["beef ribs", "red wine", "vegetables", "herbs", "onion", "garlic"],

            // AVANZATO (Advanced)
            "Beef Wellington": ["beef tenderloin", "puff pastry", "mushrooms", "herbs", "pate", "eggs"],
            "Duck Confit": ["duck", "duck fat", "herbs", "garlic", "salt", "thyme"],
            "Lobster Thermidor": ["lobster", "cream", "cheese", "brandy", "herbs", "butter"],
            "Osso Buco Milanese": ["veal shanks", "white wine", "vegetables", "saffron", "rice", "herbs"],
            "Coq au Vin": ["chicken", "red wine", "pearl onions", "mushrooms", "bacon", "herbs"],
            "Crème Brûlée": ["cream", "vanilla", "eggs", "sugar", "milk", "torch"],
            "Vegetable Ratatouille": ["eggplant", "zucchini", "tomato", "bell peppers", "herbs", "olive oil"],
            "Beef Bourguignon": ["beef", "red wine", "pearl onions", "mushrooms", "bacon", "herbs"],
            "Chocolate Lava Cake": ["chocolate", "butter", "eggs", "sugar", "flour", "vanilla"],
            "Apple Tart Tatin": ["apples", "puff pastry", "butter", "sugar", "cinnamon", "caramel"],
            "Bouillabaisse": ["fish", "saffron", "tomato", "fennel", "garlic", "olive oil"],
            "French Cassoulet": ["white beans", "duck confit", "sausage", "herbs", "tomato", "garlic"],
            "Agnolotti del Plin": ["pasta", "meat filling", "sage", "butter", "parmesan", "herbs"]
        };

        // COMPREHENSIVE UNIQUE RECIPE IMAGE DATABASE - Every recipe gets its own distinct image!
        const uniqueRecipeImages = {
            // TUTTE (Mixed Complexity) - 9 unique images
            "Classic Margherita Pizza": "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080",
            "Homestyle Chicken Parmesan": "https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-1.jpg",
            "Traditional Caesar Salad": "https://drivemehungry.com/wp-content/uploads/2022/05/caesar-salad-f.jpg",
            "Classic Chocolate Cake": "https://www.bunsenburnerbakery.com/wp-content/uploads/2019/10/best-chocolate-layer-cake-square-35.jpg",
            "Perfect Grilled Steak": "https://realhousemoms.com/wp-content/uploads/Grilled-Ribeye-Steaks-RECIPE-CARD.jpg",
            "Mediterranean Salmon": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&crop=center",
            "Authentic Carbonara": "https://bellyfull.net/wp-content/uploads/2023/02/Spaghetti-Carbonara-blog-1.jpg",
            "Spaghetti Aglio e Olio": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop&crop=center",
            "Classic Tiramisu": "https://www.nonnabox.com/wp-content/uploads/2016/01/classic_tiramisu_recipe.jpg",

            // FACILE (Easy) - 14 unique images
            "Simple Caprese Salad": "https://www.tasteoftravel.at/wp-content/uploads/Rezept-Caprese-Salat.jpg",
            "Quick Pasta Aglio e Olio": "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop&crop=center",
            "Spaghetti Cacio e Pepe": "https://cdn.loveandlemons.com/wp-content/uploads/2025/01/cacio-e-pepe.jpg",
            "Penne all'Arrabbiata": "https://www.insidetherustickitchen.com/wp-content/uploads/2020/05/Penne-arrabbiata-square-Inside-the-rustic-kitchen-1080x1080.jpg",
            "Fettuccine Alfredo": "https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg",
            "Spaghetti Puttanesca": "https://blog.giallozafferano.com/stellaskitchen/wp-content/uploads/2022/01/Spaghetti-alla-Puttanesca-scaled.jpg",
            "Grilled Chicken Breast": "https://i1.wp.com/www.joeshealthymeals.com/wp-content/uploads/2016/03/grilled-herb-crusted-chicken-feature.jpg?fit=1200,1200&ssl=1",
            "Pan-Seared Salmon": "https://healthyfitnessmeals.com/wp-content/uploads/2021/07/Salmon-in-creamy-lemon-sauce-6-819x1024.jpg",
            "Basic Beef Stir-Fry": "https://www.rachelcooks.com/wp-content/uploads/2022/09/Beef-Stir-Fry-with-Vegetables016-web-square.jpg",
            "Chocolate Mousse": "https://bakingamoment.com/wp-content/uploads/2020/02/IMG_7599-chocolate-mousse.jpg",
            "Stuffed Bell Peppers": "https://bellyfull.net/wp-content/uploads/2021/01/Stuffed-Peppers-blog.jpg",
            "Herb-Crusted Pork Tenderloin": "https://www.rockrecipes.com/wp-content/uploads/2007/11/Herb-Crusted-Pork-Loin-sliced.jpg",
            "Lemon Garlic Shrimp": "https://www.soulfullymade.com/wp-content/uploads/2020/03/Garlic-Butter-Shrimp-Scampi-735x967.jpg",
            "Vanilla Panna Cotta": "https://recipeelite.com/wp-content/uploads/2025/05/Vanilla_Panna_Cotta_1.png",

            // INTERMEDIO (Intermediate) - 15 unique images
            "Chicken Marsala": "https://realhousemoms.com/wp-content/uploads/Chicken-Marsala-IG.jpg",
            "Homemade Lasagna": "https://comfortfoodathome.com/wp-content/uploads/2020/08/classic-lasagna-layers.jpg",
            "Spaghetti Bolognese": "https://media1.agfg.com.au/images/recipes/2987/hero-400.jpg",
            "Gnocchi Sorrentina": "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/tomato_mozzarella_99983_16x9.jpg",
            "Penne alla Vodka": "https://recipebinge.com/wp-content/uploads/2021/07/Super-Creamy-Penne-Alla-Vodka-7-1536x2048.jpg",
            "Linguine alle Vongole": "https://i1.wp.com/www.besosalina.com/wp-content/uploads/2015/06/clams-and-luingine-in-white-wine-sauce.jpg?resize=650%2C867&ssl=1",
            "Ravioli di Ricotta": "https://www.marcellinaincucina.com/wp-content/uploads/2023/04/spinach-ricotta-ravioli-hero-768x1024.jpg",
            "Braised Lamb Chops": "https://img.taste.com.au/BWTUsMQH/taste/2016/11/rosemary-lamb-shanks-braised-in-red-wine-79480-1.jpeg",
            "Seafood Paella": "https://themediterraneanchick.com/wp-content/uploads/2020/09/IMG_0825-1-scaled.jpg",
            "Eggplant Parmigiana": "https://www.recipejoyful.com/wp-content/uploads/2025/07/Eggplant-Parmesan.webp",
            "New York Cheesecake": "https://www.mashed.com/img/gallery/classic-new-york-cheesecake-recipe/intro-1631063570.jpg",
            "Chicken Piccata": "https://northeastnosh.com/wp-content/uploads/2025/06/Chicken-Piccata-with-Lemon-Capers.jpg",
            "Mushroom Risotto": "https://evergreenkitchen.ca/wp-content/uploads/2021/10/Creamy-Mushroom-Risotto-0-4X5.jpg",
            "Pan-Seared Sea Bass": "https://images.ctfassets.net/uw7yiu2kuigc/5cff660a8a4e041877b863a83bd20e5ed2386de660fbf027005304fe2508d78d/a71545c4f5a3bc99c8751569d7665db7/Crispy-Sea-Bass-Lead.jpg",
            "Beef Short Ribs": "https://dailydishdiscoveries.com/wp-content/uploads/2024/06/Red-Wine-Braised-Beef-Short-Ribs-Recipe.png",

            // AVANZATO (Advanced) - 13 unique images
            "Beef Wellington": "https://mealmia.com/wp-content/uploads/2025/04/itachi2001aka_P_dced36b1fa0049a98df2_Simple_photo_of_Classic_Be_88141252-d545-4739-be3d-af282cc17d69.webp",
            "Duck Confit": "https://images.squarespace-cdn.com/content/v1/6109e64cfe878a0cad199515/b69350ae-2d9b-4fc8-a0bc-4be40e8828f4/1.png?format=1000w",
            "Lobster Thermidor": "https://www.motorspower.net/wp-content/uploads/2025/07/classic-lobster-thermidor-with-cream-sauce-rich-a-1024x683.webp",
            "Osso Buco Milanese": "https://www.insidetherustickitchen.com/wp-content/uploads/2021/05/Ossobuco-1200px-inside-the-rustic-kitchen.jpg",
            "Coq au Vin": "https://poshjournal.com/wp-content/uploads/2020/10/coq-au-vin-recipe-24.jpg",
            "Crème Brûlée": "https://www.recipetineats.com/wp-content/uploads/2016/09/Creme-Brulee_8-SQ.jpg",
            "Vegetable Ratatouille": "https://www.sprinklesandsprouts.com/wp-content/uploads/2022/04/RatatouilleSQ.jpg",
            "Beef Bourguignon": "https://keviniscooking.com/wp-content/uploads/2014/04/How-to-Make-Beef-Bourguignon-square-750x750.jpg",
            "Chocolate Lava Cake": "https://gimmedelicious.com/wp-content/uploads/2020/01/Chocolate-Molten-Lava-Cakes-10.jpg",
            "Apple Tart Tatin": "https://img.buzzfeed.com/video-api-prod/assets/c64fccabbed543e4a394716f9dde6979/BFV17982_FrenchStyleAppleTart-ThumbB1080.jpg",
            "Bouillabaisse": "https://www.simplyrecipes.com/thmb/maXpahogp_OSo9KMiLhkI6aS74g=/4264x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Bouillabaisse-LEAD-4-c74e05e003a049c88004c94876ff140e.jpg",
            "French Cassoulet": "https://www.seriouseats.com/thmb/HI2k2KPejBzDz3RCSgVWcEs65g0=/1500x1125/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__10__20140930-cassoulet-recipe-food-lab-04-38e2013adda2412e958cc2a662eb01c3.jpg",
            "Agnolotti del Plin": "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=400&h=300&fit=crop&crop=center"
        };

        // Complete translation data
        const translations = {
            en: {
                tagline: "Transform Cooking into Art",
                navLibraryTitle: "📚 Recipe Library",
                navAllRecipes: "All Recipes",
                navFavorites: "Favorites",
                navMyCreations: "My Creations",
                navRecent: "Recent",
                navCategoriesTitle: "🏷️ Categories",
                navMeat: "Meat",
                navPoultry: "Poultry",
                navPasta: "Pasta",
                navDesserts: "Desserts",
                navVegetarian: "Vegetarian",
                navQuickActionsTitle: "⚡ Quick Actions",
                btnNewRecipe: "New Recipe",
                btnImport: "Import",
                btnSurprise: "Surprise Me!",
                pageTitle: "All Recipes",
                btnGrid: "Grid",
                btnList: "List",
                searchPlaceholder: "🔍 Search recipes...",
                filterTutte: "All",
                filterFacile: "Easy", 
                filterIntermedio: "Intermediate",
                filterAvanzato: "Advanced",
                statTotalRecipes: "Total Recipes",
                statCompleted: "Completed",
                statFavorites: "Favorites",
                statSeals: "Seals Earned",
                btnView: "👁️ View",
                btnEdit: "✏️ Edit",
                btnDelete: "🗑️ Delete"
            },
            es: {
                tagline: "Transforma la Cocina en Arte",
                navLibraryTitle: "📚 Biblioteca de Recetas",
                navAllRecipes: "Todas las Recetas",
                navFavorites: "Favoritas",
                navMyCreations: "Mis Creaciones",
                navRecent: "Recientes",
                navCategoriesTitle: "🏷️ Categorías",
                navMeat: "Carnes",
                navPoultry: "Aves",
                navPasta: "Pastas",
                navDesserts: "Postres",
                navVegetarian: "Vegetariano",
                navQuickActionsTitle: "⚡ Acciones Rápidas",
                btnNewRecipe: "Nueva Receta",
                btnImport: "Importar",
                btnSurprise: "¡Sorpréndeme!",
                pageTitle: "Todas las Recetas",
                btnGrid: "Cuadrícula",
                btnList: "Lista",
                searchPlaceholder: "🔍 Buscar recetas...",
                filterTutte: "Todas",
                filterFacile: "Fácil",
                filterIntermedio: "Intermedio",
                filterAvanzato: "Avanzado",
                statTotalRecipes: "Total de Recetas",
                statCompleted: "Completadas",
                statFavorites: "Favoritas",
                statSeals: "Sellos Ganados",
                btnView: "👁️ Ver",
                btnEdit: "✏️ Editar",
                btnDelete: "🗑️ Eliminar"
            },
            fr: {
                tagline: "Transformez la Cuisine en Art",
                navLibraryTitle: "📚 Bibliothèque de Recettes",
                navAllRecipes: "Toutes les Recettes",
                navFavorites: "Favoris",
                navMyCreations: "Mes Créations",
                navRecent: "Récentes",
                navCategoriesTitle: "🏷️ Catégories",
                navMeat: "Viandes",
                navPoultry: "Volailles",
                navPasta: "Pâtes",
                navDesserts: "Desserts",
                navVegetarian: "Végétarien",
                navQuickActionsTitle: "⚡ Actions Rapides",
                btnNewRecipe: "Nouvelle Recette",
                btnImport: "Importer",
                btnSurprise: "Surprenez-moi!",
                pageTitle: "Toutes les Recettes",
                btnGrid: "Grille",
                btnList: "Liste",
                searchPlaceholder: "🔍 Rechercher des recettes...",
                filterTutte: "Toutes",
                filterFacile: "Facile",
                filterIntermedio: "Intermédiaire",
                filterAvanzato: "Avancé",
                statTotalRecipes: "Total des Recettes",
                statCompleted: "Terminées",
                statFavorites: "Favoris",
                statSeals: "Sceaux Gagnés",
                btnView: "👁️ Voir",
                btnEdit: "✏️ Modifier",
                btnDelete: "🗑️ Supprimer"
            },
            pt: {
                tagline: "Transforme o Cozinhar em Arte",
                navLibraryTitle: "📚 Biblioteca de Receitas",
                navAllRecipes: "Todas as Receitas",
                navFavorites: "Favoritas",
                navMyCreations: "Minhas Criações",
                navRecent: "Recentes",
                navCategoriesTitle: "🏷️ Categorias",
                navMeat: "Carnes",
                navPoultry: "Aves",
                navPasta: "Massas",
                navDesserts: "Doces",
                navVegetarian: "Vegetariano",
                navQuickActionsTitle: "⚡ Ações Rápidas",
                btnNewRecipe: "Nova Receita",
                btnImport: "Importar",
                btnSurprise: "Surpresa!",
                pageTitle: "Todas as Receitas",
                btnGrid: "Grade",
                btnList: "Lista",
                searchPlaceholder: "🔍 Buscar receitas...",
                filterTutte: "Todas",
                filterFacile: "Fácil",
                filterIntermedio: "Intermediário",
                filterAvanzato: "Avançado",
                statTotalRecipes: "Total de Receitas",
                statCompleted: "Completadas",
                statFavorites: "Favoritas",
                statSeals: "Selos Conquistados",
                btnView: "👁️ Ver",
                btnEdit: "✏️ Editar",
                btnDelete: "🗑️ Excluir"
            },
            it: {
                tagline: "Trasforma la Cucina in Arte",
                navLibraryTitle: "📚 Biblioteca di Ricette",
                navAllRecipes: "Tutte le Ricette",
                navFavorites: "Preferiti",
                navMyCreations: "Le Mie Creazioni",
                navRecent: "Recenti",
                navCategoriesTitle: "🏷️ Categorie",
                navMeat: "Carni",
                navPoultry: "Pollame",
                navPasta: "Pasta",
                navDesserts: "Dolci",
                navVegetarian: "Vegetariano",
                navQuickActionsTitle: "⚡ Azioni Rapide",
                btnNewRecipe: "Nuova Ricetta",
                btnImport: "Importa",
                btnSurprise: "Sorprendimi!",
                pageTitle: "Tutte le Ricette",
                btnGrid: "Griglia",
                btnList: "Lista",
                searchPlaceholder: "🔍 Cerca ricette...",
                filterTutte: "Tutte",
                filterFacile: "Facile",
                filterIntermedio: "Intermedio",
                filterAvanzato: "Avanzato",
                statTotalRecipes: "Totale Ricette",
                statCompleted: "Completate",
                statFavorites: "Preferiti",
                statSeals: "Sigilli Guadagnati",
                btnView: "👁️ Vedi",
                btnEdit: "✏️ Modifica",
                btnDelete: "🗑️ Elimina"
            }
        };

        // MASSIVE MULTILINGUAL RECIPE DATABASE - Complete translations for all languages
        const recipesByLanguage = {
            en: [
                // TUTTE (Mixed Complexity) - 9 recipes
                {
                    title: "Classic Margherita Pizza",
                    description: "Traditional Neapolitan pizza with fresh tomatoes, mozzarella, and basil. A timeless favorite that combines simple ingredients.",
                    time: "45 min",
                    difficulty: "Tutte",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Classic Margherita Pizza"]
                },
                {
                    title: "Homestyle Chicken Parmesan",
                    description: "Crispy breaded chicken with melted cheese and marinara sauce, an elegant twist on the classic comfort food.",
                    time: "50 min",
                    difficulty: "Tutte",
                    servings: "4",
                    category: "Poultry",
                    image: uniqueRecipeImages["Homestyle Chicken Parmesan"]
                },
                {
                    title: "Traditional Caesar Salad",
                    description: "Fresh romaine lettuce with homemade Caesar dressing, parmesan cheese, and crispy croutons.",
                    time: "20 min",
                    difficulty: "Tutte",
                    servings: "4",
                    category: "Vegetarian",
                    image: uniqueRecipeImages["Traditional Caesar Salad"]
                },
                {
                    title: "Classic Chocolate Cake",
                    description: "Rich, moist chocolate cake with creamy frosting and elegant decoration. Perfect for special occasions.",
                    time: "75 min",
                    difficulty: "Tutte",
                    servings: "12",
                    category: "Desserts",
                    image: uniqueRecipeImages["Classic Chocolate Cake"]
                },
                {
                    title: "Perfect Grilled Steak",
                    description: "Juicy ribeye steak grilled to perfection with herb butter and roasted seasonal vegetables.",
                    time: "35 min",
                    difficulty: "Tutte",
                    servings: "2",
                    category: "Meat",
                    image: uniqueRecipeImages["Perfect Grilled Steak"]
                },
                {
                    title: "Mediterranean Salmon",
                    description: "Fresh salmon fillet with lemon herbs, olive oil, and Mediterranean vegetables. Light and flavorful.",
                    time: "30 min",
                    difficulty: "Tutte",
                    servings: "4",
                    category: "Fish",
                    image: uniqueRecipeImages["Mediterranean Salmon"]
                },
                {
                    title: "Authentic Carbonara",
                    description: "Traditional Roman pasta with eggs, pecorino cheese, guanciale, and black pepper. Simple yet sophisticated.",
                    time: "25 min",
                    difficulty: "Tutte",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Authentic Carbonara"]
                },
                {
                    title: "Spaghetti Aglio e Olio",
                    description: "Simple yet elegant pasta with garlic, olive oil, and red pepper flakes. A Roman midnight classic.",
                    time: "20 min",
                    difficulty: "Tutte",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Spaghetti Aglio e Olio"]
                },
                {
                    title: "Classic Tiramisu",
                    description: "Traditional Italian dessert with mascarpone, coffee, and cocoa. A perfect ending to any meal.",
                    time: "40 min",
                    difficulty: "Tutte",
                    servings: "8",
                    category: "Desserts",
                    image: uniqueRecipeImages["Classic Tiramisu"]
                },

                // FACILE (Easy) - 14 recipes
                {
                    title: "Simple Caprese Salad",
                    description: "Fresh mozzarella, tomatoes, and basil drizzled with olive oil and balsamic vinegar.",
                    time: "15 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Vegetarian",
                    image: uniqueRecipeImages["Simple Caprese Salad"]
                },
                {
                    title: "Quick Pasta Aglio e Olio",
                    description: "Simple spaghetti with garlic, olive oil, and red pepper flakes. A midnight pasta classic.",
                    time: "20 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Quick Pasta Aglio e Olio"]
                },
                {
                    title: "Spaghetti Cacio e Pepe",
                    description: "Roman pasta with pecorino cheese and black pepper. Only 3 ingredients, maximum flavor.",
                    time: "15 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Spaghetti Cacio e Pepe"]
                },
                {
                    title: "Penne all'Arrabbiata",
                    description: "Spicy tomato sauce with garlic and red chilies. Quick and fiery pasta dish.",
                    time: "25 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Penne all'Arrabbiata"]
                },
                {
                    title: "Fettuccine Alfredo",
                    description: "Creamy butter and parmesan sauce coating silky fettuccine pasta.",
                    time: "20 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Fettuccine Alfredo"]
                },
                {
                    title: "Spaghetti Puttanesca",
                    description: "Bold pasta with olives, capers, anchovies, and tomatoes. Full of Mediterranean flavors.",
                    time: "30 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Spaghetti Puttanesca"]
                },
                {
                    title: "Grilled Chicken Breast",
                    description: "Tender chicken breast marinated in herbs and grilled to perfection.",
                    time: "25 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Poultry",
                    image: uniqueRecipeImages["Grilled Chicken Breast"]
                },
                {
                    title: "Pan-Seared Salmon",
                    description: "Simple salmon fillet with lemon and dill, cooked in a hot pan until crispy.",
                    time: "20 min",
                    difficulty: "Facile",
                    servings: "2",
                    category: "Fish",
                    image: uniqueRecipeImages["Pan-Seared Salmon"]
                },
                {
                    title: "Basic Beef Stir-Fry",
                    description: "Quick beef strips with vegetables in a savory sauce, served over rice.",
                    time: "25 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Meat",
                    image: uniqueRecipeImages["Basic Beef Stir-Fry"]
                },
                {
                    title: "Chocolate Mousse",
                    description: "Light and airy chocolate dessert that melts in your mouth.",
                    time: "30 min",
                    difficulty: "Facile",
                    servings: "6",
                    category: "Desserts",
                    image: uniqueRecipeImages["Chocolate Mousse"]
                },
                {
                    title: "Stuffed Bell Peppers",
                    description: "Colorful peppers filled with rice, vegetables, and herbs.",
                    time: "45 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Vegetarian",
                    image: uniqueRecipeImages["Stuffed Bell Peppers"]
                },
                {
                    title: "Herb-Crusted Pork Tenderloin",
                    description: "Tender pork with a flavorful herb crust, roasted to perfection.",
                    time: "40 min",
                    difficulty: "Facile",
                    servings: "6",
                    category: "Meat",
                    image: uniqueRecipeImages["Herb-Crusted Pork Tenderloin"]
                },
                {
                    title: "Lemon Garlic Shrimp",
                    description: "Quick and flavorful shrimp sautéed with garlic and fresh lemon.",
                    time: "15 min",
                    difficulty: "Facile",
                    servings: "4",
                    category: "Fish",
                    image: uniqueRecipeImages["Lemon Garlic Shrimp"]
                },
                {
                    title: "Vanilla Panna Cotta",
                    description: "Silky smooth Italian dessert with a delicate vanilla flavor.",
                    time: "25 min",
                    difficulty: "Facile",
                    servings: "6",
                    category: "Desserts",
                    image: uniqueRecipeImages["Vanilla Panna Cotta"]
                },

                // INTERMEDIO (Intermediate) - 15 recipes
                {
                    title: "Chicken Marsala",
                    description: "Tender chicken in a rich Marsala wine sauce with mushrooms and herbs.",
                    time: "45 min",
                    difficulty: "Intermedio",
                    servings: "4",
          
          category: "Poultry",
                    image: uniqueRecipeImages["Chicken Marsala"]
                },
                {
                    title: "Homemade Lasagna",
                    description: "Layers of pasta, meat sauce, and cheese baked to golden perfection.",
                    time: "90 min",
                    difficulty: "Intermedio",
                    servings: "8",
                    category: "Pasta",
                    image: uniqueRecipeImages["Homemade Lasagna"]
                },
                {
                    title: "Spaghetti Bolognese",
                    description: "Rich meat sauce simmered slowly with tomatoes, wine, and herbs over al dente spaghetti.",
                    time: "2 hours",
                    difficulty: "Intermedio",
                    servings: "6",
                    category: "Pasta",
                    image: uniqueRecipeImages["Spaghetti Bolognese"]
                },
                {
                    title: "Gnocchi Sorrentina",
                    description: "Potato gnocchi with tomato sauce, mozzarella, and fresh basil, baked until bubbly.",
                    time: "45 min",
                    difficulty: "Intermedio",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Gnocchi Sorrentina"]
                },
                {
                    title: "Penne alla Vodka",
                    description: "Creamy tomato sauce with vodka, pancetta, and fresh herbs coating penne pasta.",
                    time: "35 min",
                    difficulty: "Intermedio",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Penne alla Vodka"]
                },
                {
                    title: "Linguine alle Vongole",
                    description: "Fresh clams with white wine, garlic, and parsley over delicate linguine pasta.",
                    time: "40 min",
                    difficulty: "Intermedio",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Linguine alle Vongole"]
                },
                {
                    title: "Ravioli di Ricotta",
                    description: "Handmade pasta parcels filled with ricotta and spinach in sage butter sauce.",
                    time: "75 min",
                    difficulty: "Intermedio",
                    servings: "4",
                    category: "Pasta",
                    image: uniqueRecipeImages["Ravioli di Ricotta"]
                },
                {
                    title: "Braised Lamb Chops",
                    description: "Succulent lamb chops braised in red wine with rosemary and garlic.",
                    time: "75 min",
                    difficulty: "Intermedio",
                    servings: "4",
                    category: "Meat",
                    image: uniqueRecipeImages["Braised Lamb Chops"]
                },
                {
                    title: "Seafood Paella",
                    description: "Traditional Spanish rice dish with shrimp, mussels, and saffron.",
                    time: "60 min",
                    difficulty: "Intermedio",
                    servings: "6",
                    category: "Fish",
                    image: uniqueRecipeImages["Seafood Paella"]
                },
                {
                    title: "Eggplant Parmigiana",
                    description: "Layers of breaded eggplant with tomato sauce and melted cheese.",
                    time: "70 min",
                    difficulty: "Intermedio",
                    servings: "6",
                    category: "Vegetarian",
                    image: uniqueRecipeImages["Eggplant Parmigiana"]
                },
                {
                    title: "New York Cheesecake",
                    description: "Rich and creamy cheesecake with a graham cracker crust.",
                    time: "85 min",
                    difficulty: "Intermedio",
                    servings: "12",
                    category: "Desserts",
                    image: uniqueRecipeImages["New York Cheesecake"]
                },
                {
                    title: "Chicken Piccata",
                    description: "Pan-seared chicken in a tangy lemon and caper sauce.",
                    time: "35 min",
                    difficulty: "Intermedio",
                    servings: "4",
                    category: "Poultry",
                    image: uniqueRecipeImages["Chicken Piccata"]
                },
                {
                    title: "Mushroom Risotto",
                    description: "Creamy Arborio rice with wild mushrooms and Parmesan cheese.",
                    time: "45 min",
                    difficulty: "Intermedio",
                    servings: "4",
                    category: "Vegetarian",
                    image: uniqueRecipeImages["Mushroom Risotto"]
                },
                {
                    title: "Pan-Seared Sea Bass",
                    description: "Delicate fish with crispy skin served with lemon butter sauce.",
                    time: "30 min",
                    difficulty: "Intermedio",
                    servings: "4",
                    category: "Fish",
                    image: uniqueRecipeImages["Pan-Seared Sea Bass"]
                },
                {
                    title: "Beef Short Ribs",
                    description: "Slow-braised short ribs in red wine until fork-tender.",
                    time: "3 hours",
                    difficulty: "Intermedio",
                    servings: "6",
                    category: "Meat",
                    image: uniqueRecipeImages["Beef Short Ribs"]
                },

                // AVANZATO (Advanced) - 13 recipes
                {
                    title: "Beef Wellington",
                    description: "Tender beef tenderloin wrapped in puff pastry with mushroom duxelles.",
                    time: "2.5 hours",
                    difficulty: "Avanzato",
                    servings: "8",
                    category: "Meat",
                    image: uniqueRecipeImages["Beef Wellington"]
                },
                {
                    title: "Duck Confit",
                    description: "Traditional French duck leg slowly cooked in its own fat until tender.",
                    time: "4 hours",
                    difficulty: "Avanzato",
                    servings: "4",
                    category: "Poultry",
                    image: uniqueRecipeImages["Duck Confit"]
                },
                {
                    title: "Lobster Thermidor",
                    description: "Luxurious lobster in a rich cream sauce, gratinéed to perfection.",
                    time: "90 min",
                    difficulty: "Avanzato",
                    servings: "4",
                    category: "Fish",
                    image: uniqueRecipeImages["Lobster Thermidor"]
                },
                {
                    title: "Osso Buco Milanese",
                    description: "Braised veal shanks in white wine with gremolata and saffron risotto.",
                    time: "3 hours",
                    difficulty: "Avanzato",
                    servings: "6",
                    category: "Meat",
                    image: uniqueRecipeImages["Osso Buco Milanese"]
                },
                {
                    title: "Coq au Vin",
                    description: "Classic French chicken braised in red wine with pearl onions and mushrooms.",
                    time: "2 hours",
                    difficulty: "Avanzato",
                    servings: "6",
                    category: "Poultry",
                    image: uniqueRecipeImages["Coq au Vin"]
                },
                {
                    title: "Crème Brûlée",
                    description: "Silky vanilla custard topped with caramelized sugar crust.",
                    time: "2 hours",
                    difficulty: "Avanzato",
                    servings: "6",
                    category: "Desserts",
                    image: uniqueRecipeImages["Crème Brûlée"]
                },
                {
                    title: "Vegetable Ratatouille",
                    description: "Traditional Provençal stewed vegetables arranged in beautiful layers.",
                    time: "90 min",
                    difficulty: "Avanzato",
                    servings: "6",
                    category: "Vegetarian",
                    image: uniqueRecipeImages["Vegetable Ratatouille"]
                },
                {
                    title: "Beef Bourguignon",
                    description: "Classic French beef stew with red wine, pearl onions, and mushrooms.",
                    time: "3.5 hours",
                    difficulty: "Avanzato",
                    servings: "8",
                    category: "Meat",
                    image: uniqueRecipeImages["Beef Bourguignon"]
                },
                {
                    title: "Chocolate Lava Cake",
                    description: "Decadent chocolate cake with a molten center that flows like lava.",
                    time: "45 min",
                    difficulty: "Avanzato",
                    servings: "4",
                    category: "Desserts",
                    image: uniqueRecipeImages["Chocolate Lava Cake"]
                },
                {
                    title: "Apple Tart Tatin",
                    description: "Classic French upside-down apple tart with caramelized apples.",
                    time: "90 min",
                    difficulty: "Avanzato",
                    servings: "8",
                    category: "Desserts",
                    image: uniqueRecipeImages["Apple Tart Tatin"]
                },
                {
                    title: "Bouillabaisse",
                    description: "Traditional Provençal fish stew with saffron and rouille sauce.",
                    time: "2 hours",
                    difficulty: "Avanzato",
                    servings: "6",
                    category: "Fish",
                    image: uniqueRecipeImages["Bouillabaisse"]
                },
                {
                    title: "French Cassoulet",
                    description: "Slow-cooked white bean stew with duck confit and Toulouse sausage.",
                    time: "4 hours",
                    difficulty: "Avanzato",
                    servings: "8",
                    category: "Meat",
                    image: uniqueRecipeImages["French Cassoulet"]
                },
                {
                    title: "Agnolotti del Plin",
                    description: "Tiny Piemontese pasta parcels with roasted meat filling in butter and sage sauce.",
                    time: "4 hours",
                    difficulty: "Avanzato",
                    servings: "6",
                    category: "Pasta",
                    image: uniqueRecipeImages["Agnolotti del Plin"]
                }
            ],
            
            // DYNAMIC TRANSLATION SYSTEM - All languages show the same 51 recipes
            es: [], // Will be populated dynamically
            fr: [], // Will be populated dynamically  
            pt: [], // Will be populated dynamically
            it: []  // Will be populated dynamically
        };

        let currentLanguage = 'pt';
        let currentDifficultyFilter = 'tutte';
        let currentCategoryFilter = 'all';
        let allRecipes = [];

        // COMPREHENSIVE TRANSLATION DICTIONARIES - ALL 51 RECIPES
        const recipeTranslations = {
            // Complete recipe titles translations - ALL 51 RECIPES
            titles: {
                // TUTTE (Mixed Complexity) - 9 recipes
                "Classic Margherita Pizza": {
                    es: "Pizza Margherita Clásica",
                    fr: "Pizza Margherita Classique", 
                    pt: "Pizza Margherita Clássica",
                    it: "Pizza Margherita Classica"
                },
                "Homestyle Chicken Parmesan": {
                    es: "Pollo Parmesano Casero",
                    fr: "Poulet Parmigiana Maison",
                    pt: "Frango Parmegiana Caseiro", 
                    it: "Pollo Parmigiana della Casa"
                },
                "Traditional Caesar Salad": {
                    es: "Ensalada César Tradicional",
                    fr: "Salade César Traditionnelle",
                    pt: "Salada Caesar Tradicional",
                    it: "Insalata Caesar Tradizionale"
                },
                "Classic Chocolate Cake": {
                    es: "Torta de Chocolate Clásica",
                    fr: "Gâteau au Chocolat Classique",
                    pt: "Bolo de Chocolate Clássico",
                    it: "Torta al Cioccolato Classica"
                },
                "Perfect Grilled Steak": {
                    es: "Bistec a la Parrilla Perfecto",
                    fr: "Steak Grillé Parfait",
                    pt: "Bife Grelhado Perfeito",
                    it: "Bistecca Grigliata Perfetta"
                },
                "Mediterranean Salmon": {
                    es: "Salmón Mediterráneo",
                    fr: "Saumon Méditerranéen",
                    pt: "Salmão Mediterrâneo",
                    it: "Salmone Mediterraneo"
                },
                "Authentic Carbonara": {
                    es: "Carbonara Auténtica",
                    fr: "Carbonara Authentique",
                    pt: "Carbonara Autêntica",
                    it: "Carbonara Autentica"
                },
                "Spaghetti Aglio e Olio": {
                    es: "Espaguetis Aglio e Olio",
                    fr: "Spaghetti Aglio e Olio",
                    pt: "Espaguete Aglio e Olio",
                    it: "Spaghetti Aglio e Olio"
                },
                "Classic Tiramisu": {
                    es: "Tiramisú Clásico",
                    fr: "Tiramisu Classique",
                    pt: "Tiramisu Clássico",
                    it: "Tiramisu Classico"
                },

                // FACILE (Easy) - 14 recipes
                "Simple Caprese Salad": {
                    es: "Ensalada Caprese Simple",
                    fr: "Salade Caprese Simple",
                    pt: "Salada Caprese Simples",
                    it: "Insalata Caprese Semplice"
                },
                "Quick Pasta Aglio e Olio": {
                    es: "Pasta Aglio e Olio Rápida",
                    fr: "Pâtes Aglio e Olio Rapides",
                    pt: "Massa Aglio e Olio Rápida",
                    it: "Pasta Aglio e Olio Veloce"
                },
                "Spaghetti Cacio e Pepe": {
                    es: "Espaguetis Cacio e Pepe",
                    fr: "Spaghetti Cacio e Pepe",
                    pt: "Espaguete Cacio e Pepe",
                    it: "Spaghetti Cacio e Pepe"
                },
                "Penne all'Arrabbiata": {
                    es: "Penne all'Arrabbiata",
                    fr: "Penne all'Arrabbiata",
                    pt: "Penne all'Arrabbiata",
                    it: "Penne all'Arrabbiata"
                },
                "Fettuccine Alfredo": {
                    es: "Fettuccine Alfredo",
                    fr: "Fettuccine Alfredo",
                    pt: "Fettuccine Alfredo",
                    it: "Fettuccine Alfredo"
                },
                "Spaghetti Puttanesca": {
                    es: "Espaguetis Puttanesca",
                    fr: "Spaghetti Puttanesca",
                    pt: "Espaguete Puttanesca",
                    it: "Spaghetti Puttanesca"
                },
                "Grilled Chicken Breast": {
                    es: "Pechuga de Pollo a la Parrilla",
                    fr: "Blanc de Poulet Grillé",
                    pt: "Peito de Frango Grelhado",
                    it: "Petto di Pollo Grigliato"
                },
                "Pan-Seared Salmon": {
                    es: "Salmón Sellado en Sartén",
                    fr: "Saumon Poêlé",
                    pt: "Salmão Selado na Panela",
                    it: "Salmone in Padella"
                },
                "Basic Beef Stir-Fry": {
                    es: "Salteado de Carne Básico",
                    fr: "Sauté de Bœuf de Base",
                    pt: "Refogado de Carne Básico",
                    it: "Manzo Saltato di Base"
                },
                "Chocolate Mousse": {
                    es: "Mousse de Chocolate",
                    fr: "Mousse au Chocolat",
                    pt: "Mousse de Chocolate",
                    it: "Mousse al Cioccolato"
                },
                "Stuffed Bell Peppers": {
                    es: "Pimientos Rellenos",
                    fr: "Poivrons Farcis",
                    pt: "Pimentões Recheados",
                    it: "Peperoni Ripieni"
                },
                "Herb-Crusted Pork Tenderloin": {
                    es: "Lomo de Cerdo con Costra de Hierbas",
                    fr: "Filet de Porc aux Herbes",
                    pt: "Lombo de Porco com Crosta de Ervas",
                    it: "Filetto di Maiale alle Erbe"
                },
                "Lemon Garlic Shrimp": {
                    es: "Camarones al Limón y Ajo",
                    fr: "Crevettes à l'Ail et Citron",
                    pt: "Camarão com Limão e Alho",
                    it: "Gamberi all'Aglio e Limone"
                },
                "Vanilla Panna Cotta": {
                    es: "Panna Cotta de Vainilla",
                    fr: "Panna Cotta à la Vanille",
                    pt: "Panna Cotta de Baunilha",
                    it: "Panna Cotta alla Vaniglia"
                },

                // INTERMEDIO (Intermediate) - 15 recipes
                "Chicken Marsala": {
                    es: "Pollo Marsala",
                    fr: "Poulet Marsala",
                    pt: "Frango Marsala",
                    it: "Pollo Marsala"
                },
                "Homemade Lasagna": {
                    es: "Lasaña Casera",
                    fr: "Lasagne Maison",
                    pt: "Lasanha Caseira",
                    it: "Lasagna della Casa"
                },
                "Spaghetti Bolognese": {
                    es: "Espaguetis Boloñesa",
                    fr: "Spaghetti Bolognaise",
                    pt: "Espaguete à Bolonhesa",
                    it: "Spaghetti alla Bolognese"
                },
                "Gnocchi Sorrentina": {
                    es: "Gnocchi Sorrentina",
                    fr: "Gnocchi Sorrentina",
                    pt: "Gnocchi Sorrentina",
                    it: "Gnocchi alla Sorrentina"
                },
                "Penne alla Vodka": {
                    es: "Penne alla Vodka",
                    fr: "Penne alla Vodka",
                    pt: "Penne alla Vodka",
                    it: "Penne alla Vodka"
                },
                "Linguine alle Vongole": {
                    es: "Linguine alle Vongole",
                    fr: "Linguine alle Vongole",
                    pt: "Linguine alle Vongole",
                    it: "Linguine alle Vongole"
                },
                "Ravioli di Ricotta": {
                    es: "Ravioli de Ricotta",
                    fr: "Ravioli à la Ricotta",
                    pt: "Ravioli de Ricota",
                    it: "Ravioli di Ricotta"
                },
                "Braised Lamb Chops": {
                    es: "Chuletas de Cordero Estofadas",
                    fr: "Côtelettes d'Agneau Braisées",
                    pt: "Costeletas de Cordeiro Refogadas",
                    it: "Costolette di Agnello Brasate"
                },
                "Seafood Paella": {
                    es: "Paella de Mariscos",
                    fr: "Paella aux Fruits de Mer",
                    pt: "Paella de Frutos do Mar",
                    it: "Paella ai Frutti di Mare"
                },
                "Eggplant Parmigiana": {
                    es: "Berenjena Parmesana",
                    fr: "Aubergine Parmigiana",
                    pt: "Berinjela à Parmegiana",
                    it: "Melanzane alla Parmigiana"
                },
                "New York Cheesecake": {
                    es: "Cheesecake de Nueva York",
                    fr: "Cheesecake New-Yorkais",
                    pt: "Cheesecake de Nova York",
                    it: "Cheesecake di New York"
                },
                "Chicken Piccata": {
                    es: "Pollo Piccata",
                    fr: "Poulet Piccata",
                    pt: "Frango Piccata",
                    it: "Pollo alla Piccata"
                },
                "Mushroom Risotto": {
                    es: "Risotto de Hongos",
                    fr: "Risotto aux Champignons",
                    pt: "Risotto de Cogumelos",
                    it: "Risotto ai Funghi"
                },
                "Pan-Seared Sea Bass": {
                    es: "Lubina Sellada en Sartén",
                    fr: "Bar Poêlé",
                    pt: "Robalo Selado na Panela",
                    it: "Branzino in Padella"
                },
                "Beef Short Ribs": {
                    es: "Costillas de Res Estofadas",
                    fr: "Côtes de Bœuf Braisées",
                    pt: "Costela de Boi Refogada",
                    it: "Costine di Manzo Brasate"
                },

                // AVANZATO (Advanced) - 13 recipes
                "Beef Wellington": {
                    es: "Beef Wellington",
                    fr: "Bœuf Wellington",
                    pt: "Beef Wellington",
                    it: "Manzo Wellington"
                },
                "Duck Confit": {
                    es: "Pato Confitado",
                    fr: "Confit de Canard",
                    pt: "Pato Confitado",
                    it: "Anatra Confit"
                },
                "Lobster Thermidor": {
                    es: "Langosta Thermidor",
                    fr: "Homard Thermidor",
                    pt: "Lagosta Thermidor",
                    it: "Aragosta Thermidor"
                },
                "Osso Buco Milanese": {
                    es: "Osso Buco Milanés",
                    fr: "Osso Buco Milanaise",
                    pt: "Osso Buco Milanês",
                    it: "Osso Buco alla Milanese"
                },
                "Coq au Vin": {
                    es: "Coq au Vin",
                    fr: "Coq au Vin",
                    pt: "Coq au Vin",
                    it: "Coq au Vin"
                },
                "Crème Brûlée": {
                    es: "Crème Brûlée",
                    fr: "Crème Brûlée",
                    pt: "Crème Brûlée",
                    it: "Crème Brûlée"
                },
                "Vegetable Ratatouille": {
                    es: "Ratatouille de Verduras",
                    fr: "Ratatouille de Légumes",
                    pt: "Ratatouille de Vegetais",
                    it: "Ratatouille di Verdure"
                },
                "Beef Bourguignon": {
                    es: "Beef Bourguignon",
                    fr: "Bœuf Bourguignon",
                    pt: "Beef Bourguignon",
                    it: "Manzo Bourguignon"
                },
                "Chocolate Lava Cake": {
                    es: "Torta de Lava de Chocolate",
                    fr: "Gâteau Coulant au Chocolat",
                    pt: "Bolo de Lava de Chocolate",
                    it: "Torta Lava al Cioccolato"
                },
                "Apple Tart Tatin": {
                    es: "Tarta Tatin de Manzana",
                    fr: "Tarte Tatin aux Pommes",
                    pt: "Torta Tatin de Maçã",
                    it: "Crostata Tatin alle Mele"
                },
                "Bouillabaisse": {
                    es: "Bouillabaisse",
                    fr: "Bouillabaisse",
                    pt: "Bouillabaisse",
                    it: "Bouillabaisse"
                },
                "French Cassoulet": {
                    es: "Cassoulet Francés",
                    fr: "Cassoulet Français",
                    pt: "Cassoulet Francês",
                    it: "Cassoulet Francese"
                },
                "Agnolotti del Plin": {
                    es: "Agnolotti del Plin",
                    fr: "Agnolotti del Plin",
                    pt: "Agnolotti del Plin",
                    it: "Agnolotti del Plin"
                }
            },
            
            // Complete descriptions translations - ALL 51 RECIPES IN SPANISH
            descriptions: {
                // TUTTE (Mixed Complexity) - 9 recipes
                "Traditional Neapolitan pizza with fresh tomatoes, mozzarella, and basil. A timeless favorite that combines simple ingredients.": {
                    es: "Pizza napolitana tradicional con tomates frescos, mozzarella y albahaca. Un favorito atemporal que combina ingredientes simples.",
                    fr: "Pizza napolitaine traditionnelle avec tomates fraîches, mozzarella et basilic. Un favori intemporel qui combine des ingrédients simples.",
                    pt: "Pizza napolitana tradicional com tomates frescos, mozzarella e manjericão. Um favorito atemporal que combina ingredientes simples.",
                    it: "Pizza napoletana tradizionale con pomodori freschi, mozzarella e basilico. Un favorito senza tempo che combina ingredienti semplici."
                },
                "Crispy breaded chicken with melted cheese and marinara sauce, an elegant twist on the classic comfort food.": {
                    es: "Pollo empanizado crujiente con queso derretido y salsa marinara, un toque elegante al clásico comfort food.",
                    fr: "Poulet pané croustillant avec fromage fondu et sauce marinara, une touche élégante au comfort food classique.",
                    pt: "Frango empanado crocante com queijo derretido e molho marinara, um toque elegante no comfort food clássico.",
                    it: "Pollo impanato croccante con formaggio fuso e salsa marinara, un tocco elegante al comfort food classico."
                },
                "Fresh romaine lettuce with homemade Caesar dressing, parmesan cheese, and crispy croutons.": {
                    es: "Lechuga romana fresca con aderezo César casero, queso parmesano y crutones crujientes.",
                    fr: "Laitue romaine fraîche avec vinaigrette César maison, fromage parmesan et croûtons croustillants.",
                    pt: "Alface romana fresca com molho Caesar caseiro, queijo parmesão e croutons crocantes.",
                    it: "Lattuga romana fresca con condimento Caesar fatto in casa, formaggio parmigiano e crostini croccanti."
                },
                "Rich, moist chocolate cake with creamy frosting and elegant decoration. Perfect for special occasions.": {
                    es: "Rica torta de chocolate húmeda con glaseado cremoso y decoración elegante. Perfecta para ocasiones especiales.",
                    fr: "Gâteau au chocolat riche et moelleux avec glaçage crémeux et décoration élégante. Parfait pour les occasions spéciales.",
                    pt: "Bolo de chocolate rico e úmido com cobertura cremosa e decoração elegante. Perfeito para ocasiões especiais.",
                    it: "Torta al cioccolato ricca e umida con glassa cremosa e decorazione elegante. Perfetta per occasioni speciali."
                },
                "Juicy ribeye steak grilled to perfection with herb butter and roasted seasonal vegetables.": {
                    es: "Jugoso bistec ribeye a la parrilla a la perfección con mantequilla de hierbas y vegetales asados de temporada.",
                    fr: "Steak de côte juteux grillé à la perfection avec beurre aux herbes et légumes de saison rôtis.",
                    pt: "Bife ribeye suculento grelhado à perfeição com manteiga de ervas e vegetais sazonais assados.",
                    it: "Succosa bistecca di ribeye grigliata alla perfezione con burro alle erbe e verdure di stagione arrostite."
                },
                "Fresh salmon fillet with lemon herbs, olive oil, and Mediterranean vegetables. Light and flavorful.": {
                    es: "Filete de salmón fresco con hierbas de limón, aceite de oliva y vegetales mediterráneos. Ligero y sabroso.",
                    fr: "Filet de saumon frais aux herbes citronnées, huile d'olive et légumes méditerranéens. Léger et savoureux.",
                    pt: "Filé de salmão fresco com ervas de limão, azeite e vegetais mediterrâneos. Leve e saboroso.",
                    it: "Filetto di salmone fresco con erbe al limone, olio d'oliva e verdure mediterranee. Leggero e saporito."
                },
                "Traditional Roman pasta with eggs, pecorino cheese, guanciale, and black pepper. Simple yet sophisticated.": {
                    es: "Pasta romana tradicional con huevos, queso pecorino, guanciale y pimienta negra. Simple pero sofisticada.",
                    fr: "Pâtes romaines traditionnelles aux œufs, fromage pecorino, guanciale et poivre noir. Simple mais sophistiqué.",
                    pt: "Massa romana tradicional com ovos, queijo pecorino, guanciale e pimenta preta. Simples mas sofisticada.",
                    it: "Pasta romana tradizionale con uova, formaggio pecorino, guanciale e pepe nero. Semplice ma sofisticata."
                },
                "Simple yet elegant pasta with garlic, olive oil, and red pepper flakes. A Roman midnight classic.": {
                    es: "Pasta simple pero elegante con ajo, aceite de oliva y hojuelas de pimiento rojo. Un clásico romano de medianoche.",
                    fr: "Pâtes simples mais élégantes à l'ail, huile d'olive et flocons de piment rouge. Un classique romain de minuit.",
                    pt: "Massa simples mas elegante com alho, azeite e flocos de pimenta vermelha. Um clássico romano da meia-noite.",
                    it: "Pasta semplice ma elegante con aglio, olio d'oliva e peperoncino. Un classico romano di mezzanotte."
                },
                "Traditional Italian dessert with mascarpone, coffee, and cocoa. A perfect ending to any meal.": {
                    es: "Postre italiano tradicional con mascarpone, café y cacao. Un final perfecto para cualquier comida.",
                    fr: "Dessert italien traditionnel au mascarpone, café et cacao. Une fin parfaite pour tout repas.",
                    pt: "Sobremesa italiana tradicional com mascarpone, café e cacau. Um final perfeito para qualquer refeição.",
                    it: "Dolce italiano tradizionale con mascarpone, caffè e cacao. Un finale perfetto per ogni pasto."
                },

                // FACILE (Easy) - 14 recipes
                "Fresh mozzarella, tomatoes, and basil drizzled with olive oil and balsamic vinegar.": {
                    es: "Mozzarella fresca, tomates y albahaca rociados con aceite de oliva y vinagre balsámico.",
                    fr: "Mozzarella fraîche, tomates et basilic arrosés d'huile d'olive et de vinaigre balsamique.",
                    pt: "Mozzarella fresca, tomates e manjericão regados com azeite e vinagre balsâmico.",
                    it: "Mozzarella fresca, pomodori e basilico conditi con olio d'oliva e aceto balsamico."
                },
                "Simple spaghetti with garlic, olive oil, and red pepper flakes. A midnight pasta classic.": {
                    es: "Espaguetis simples con ajo, aceite de oliva y hojuelas de pimiento rojo. Un clásico de pasta de medianoche.",
                    fr: "Spaghetti simples à l'ail, huile d'olive et flocons de piment rouge. Un classique de pâtes de minuit.",
                    pt: "Espaguete simples com alho, azeite e flocos de pimenta vermelha. Um clássico de massa da meia-noite.",
                    it: "Spaghetti semplici con aglio, olio d'oliva e peperoncino. Un classico di pasta di mezzanotte."
                },
                "Roman pasta with pecorino cheese and black pepper. Only 3 ingredients, maximum flavor.": {
                    es: "Pasta romana con queso pecorino y pimienta negra. Solo 3 ingredientes, máximo sabor.",
                    fr: "Pâtes romaines au fromage pecorino et poivre noir. Seulement 3 ingrédients, saveur maximale.",
                    pt: "Massa romana com queijo pecorino e pimenta preta. Apenas 3 ingredientes, sabor máximo.",
                    it: "Pasta romana con formaggio pecorino e pepe nero. Solo 3 ingredienti, massimo sapore."
                },
                "Spicy tomato sauce with garlic and red chilies. Quick and fiery pasta dish.": {
                    es: "Salsa de tomate picante con ajo y chiles rojos. Plato de pasta rápido y ardiente.",
                    fr: "Sauce tomate épicée à l'ail et aux piments rouges. Plat de pâtes rapide et ardent.",
                    pt: "Molho de tomate picante com alho e pimentas vermelhas. Prato de massa rápido e ardente.",
                    it: "Salsa di pomodoro piccante con aglio e peperoncini rossi. Piatto di pasta veloce e piccante."
                },
                "Creamy butter and parmesan sauce coating silky fettuccine pasta.": {
                    es: "Salsa cremosa de mantequilla y parmesano cubriendo pasta fettuccine sedosa.",
                    fr: "Sauce crémeuse au beurre et parmesan enrobant des fettuccine soyeuses.",
                    pt: "Molho cremoso de manteiga e parmesão cobrindo massa fettuccine sedosa.",
                    it: "Salsa cremosa di burro e parmigiano che avvolge fettuccine setose."
                },
                "Bold pasta with olives, capers, anchovies, and tomatoes. Full of Mediterranean flavors.": {
                    es: "Pasta audaz con aceitunas, alcaparras, anchoas y tomates. Llena de sabores mediterráneos.",
                    fr: "Pâtes audacieuses aux olives, câpres, anchois et tomates. Pleines de saveurs méditerranéennes.",
                    pt: "Massa ousada com azeitonas, alcaparras, anchovas e tomates. Cheia de sabores mediterrâneos.",
                    it: "Pasta audace con olive, capperi, acciughe e pomodori. Piena di sapori mediterranei."
                },
                "Tender chicken breast marinated in herbs and grilled to perfection.": {
                    es: "Pechuga de pollo tierna marinada en hierbas y asada a la perfección.",
                    fr: "Blanc de poulet tendre mariné aux herbes et grillé à la perfection.",
                    pt: "Peito de frango macio marinado em ervas e grelhado à perfeição.",
                    it: "Petto di pollo tenero marinato alle erbe e grigliato alla perfezione."
                },
                "Simple salmon fillet with lemon and dill, cooked in a hot pan until crispy.": {
                    es: "Filete de salmón simple con limón y eneldo, cocinado en sartén caliente hasta quedar crujiente.",
                    fr: "Filet de saumon simple au citron et à l'aneth, cuit dans une poêle chaude jusqu'à ce qu'il soit croustillant.",
                    pt: "Filé de salmão simples com limão e endro, cozido em panela quente até ficar crocante.",
                    it: "Filetto di salmone semplice con limone e aneto, cotto in padella calda fino a diventare croccante."
                },
                "Quick beef strips with vegetables in a savory sauce, served over rice.": {
                    es: "Tiras de carne rápidas con vegetales en salsa sabrosa, servidas sobre arroz.",
                    fr: "Lamelles de bœuf rapides aux légumes dans une sauce savoureuse, servies sur du riz.",
                    pt: "Tiras de carne rápidas com vegetais em molho saboroso, servidas sobre arroz.",
                    it: "Strisce di manzo veloci con verdure in salsa saporita, servite su riso."
                },
                "Light and airy chocolate dessert that melts in your mouth.": {
                    es: "Postre de chocolate ligero y aireado que se derrite en tu boca.",
                    fr: "Dessert au chocolat léger et aéré qui fond dans la bouche.",
                    pt: "Sobremesa de chocolate leve e aerada que derrete na boca.",
                    it: "Dolce al cioccolato leggero e arioso che si scioglie in bocca."
                },
                "Colorful peppers filled with rice, vegetables, and herbs.": {
                    es: "Pimientos coloridos rellenos de arroz, vegetales y hierbas.",
                    fr: "Poivrons colorés farcis de riz, légumes et herbes.",
                    pt: "Pimentões coloridos recheados com arroz, vegetais e ervas.",
                    it: "Peperoni colorati ripieni di riso, verdure ed erbe."
                },
                "Tender pork with a flavorful herb crust, roasted to perfection.": {
                    es: "Cerdo tierno con costra de hierbas sabrosa, asado a la perfección.",
                    fr: "Porc tendre avec une croûte d'herbes savoureuse, rôti à la perfection.",
                    pt: "Porco macio com crosta de ervas saborosa, assado à perfeição.",
                    it: "Maiale tenero con crosta di erbe saporita, arrostito alla perfezione."
                },
                "Quick and flavorful shrimp sautéed with garlic and fresh lemon.": {
                    es: "Camarones rápidos y sabrosos salteados con ajo y limón fresco.",
                    fr: "Crevettes rapides et savoureuses sautées à l'ail et au citron frais.",
                    pt: "Camarões rápidos e saborosos refogados com alho e limão fresco.",
                    it: "Gamberi veloci e saporiti saltati con aglio e limone fresco."
                },
                "Silky smooth Italian dessert with a delicate vanilla flavor.": {
                    es: "Postre italiano sedoso y suave con delicado sabor a vainilla.",
                    fr: "Dessert italien soyeux et lisse avec une délicate saveur de vanille.",
                    pt: "Sobremesa italiana sedosa e suave com delicado sabor de baunilha.",
                    it: "Dolce italiano setoso e liscio con delicato sapore di vaniglia."
                },

                // INTERMEDIO (Intermediate) - 15 recipes
                "Tender chicken in a rich Marsala wine sauce with mushrooms and herbs.": {
                    es: "Pollo tierno en rica salsa de vino Marsala con hongos y hierbas.",
                    fr: "Poulet tendre dans une riche sauce au vin de Marsala avec champignons et herbes.",
                    pt: "Frango macio em molho rico de vinho Marsala com cogumelos e ervas.",
                    it: "Pollo tenero in ricca salsa di vino Marsala con funghi ed erbe."
                },
                "Layers of pasta, meat sauce, and cheese baked to golden perfection.": {
                    es: "Capas de pasta, salsa de carne y queso horneadas a la perfección dorada.",
                    fr: "Couches de pâtes, sauce à la viande et fromage cuites à la perfection dorée.",
                    pt: "Camadas de massa, molho de carne e queijo assadas à perfeição dourada.",
                    it: "Strati di pasta, sugo di carne e formaggio cotti alla perfezione dorata."
                },
                "Rich meat sauce simmered slowly with tomatoes, wine, and herbs over al dente spaghetti.": {
                    es: "Rica salsa de carne cocida lentamente con tomates, vino y hierbas sobre espaguetis al dente.",
                    fr: "Riche sauce à la viande mijotée lentement avec tomates, vin et herbes sur spaghetti al dente.",
                    pt: "Molho rico de carne cozido lentamente com tomates, vinho e ervas sobre espaguete al dente.",
                    it: "Ricco sugo di carne cotto lentamente con pomodori, vino ed erbe su spaghetti al dente."
                },
                "Potato gnocchi with tomato sauce, mozzarella, and fresh basil, baked until bubbly.": {
                    es: "Gnocchi de papa con salsa de tomate, mozzarella y albahaca fresca, horneados hasta burbujear.",
                    fr: "Gnocchi de pomme de terre avec sauce tomate, mozzarella et basilic frais, cuits jusqu'à ce qu'ils bouillonnent.",
                    pt: "Gnocchi de batata com molho de tomate, mozzarella e manjericão fresco, assados até borbulhar.",
                    it: "Gnocchi di patate con salsa di pomodoro, mozzarella e basilico fresco, cotti fino a bollire."
                },
                "Creamy tomato sauce with vodka, pancetta, and fresh herbs coating penne pasta.": {
                    es: "Salsa cremosa de tomate con vodka, pancetta y hierbas frescas cubriendo pasta penne.",
                    fr: "Sauce tomate crémeuse au vodka, pancetta et herbes fraîches enrobant des penne.",
                    pt: "Molho cremoso de tomate com vodka, pancetta e ervas frescas cobrindo massa penne.",
                    it: "Salsa cremosa di pomodoro con vodka, pancetta ed erbe fresche che avvolge penne."
                },
                "Fresh clams with white wine, garlic, and parsley over delicate linguine pasta.": {
                    es: "Almejas frescas con vino blanco, ajo y perejil sobre delicada pasta linguine.",
                    fr: "Palourdes fraîches au vin blanc, ail et persil sur délicates linguine.",
                    pt: "Amêijoas frescas com vinho branco, alho e salsa sobre delicada massa linguine.",
                    it: "Vongole fresche con vino bianco, aglio e prezzemolo su delicate linguine."
                },
                "Handmade pasta parcels filled with ricotta and spinach in sage butter sauce.": {
                    es: "Paquetes de pasta hechos a mano rellenos de ricotta y espinacas en salsa de mantequilla y salvia.",
                    fr: "Paquets de pâtes faits à la main farcis de ricotta et d'épinards dans une sauce au beurre de sauge.",
                    pt: "Pacotes de massa feitos à mão recheados com ricota e espinafre em molho de manteiga e sálvia.",
                    it: "Pacchetti di pasta fatti a mano ripieni di ricotta e spinaci in salsa di burro e salvia."
                },
                "Succulent lamb chops braised in red wine with rosemary and garlic.": {
                    es: "Chuletas de cordero suculentas estofadas en vino tinto con romero y ajo.",
                    fr: "Côtelettes d'agneau succulentes braisées au vin rouge avec romarin et ail.",
                    pt: "Costeletas de cordeiro suculentas refogadas em vinho tinto com alecrim e alho.",
                    it: "Costolette di agnello succulente brasate nel vino rosso con rosmarino e aglio."
                },
                "Traditional Spanish rice dish with shrimp, mussels, and saffron.": {
                    es: "Plato tradicional español de arroz con camarones, mejillones y azafrán.",
                    fr: "Plat de riz espagnol traditionnel aux crevettes, moules et safran.",
                    pt: "Prato tradicional espanhol de arroz com camarões, mexilhões e açafrão.",
                    it: "Piatto tradizionale spagnolo di riso con gamberi, cozze e zafferano."
                },
                "Layers of breaded eggplant with tomato sauce and melted cheese.": {
                    es: "Capas de berenjena empanizada con salsa de tomate y queso derretido.",
                    fr: "Couches d'aubergine panée avec sauce tomate et fromage fondu.",
                    pt: "Camadas de berinjela empanada com molho de tomate e queijo derretido.",
                    it: "Strati di melanzane impanate con salsa di pomodoro e formaggio fuso."
                },
                "Rich and creamy cheesecake with a graham cracker crust.": {
                    es: "Cheesecake rico y cremoso con base de galletas graham.",
                    fr: "Cheesecake riche et crémeux avec une croûte de biscuits graham.",
                    pt: "Cheesecake rico e cremoso com base de biscoitos graham.",
                    it: "Cheesecake ricco e cremoso con base di biscotti graham."
                },
                "Pan-seared chicken in a tangy lemon and caper sauce.": {
                    es: "Pollo sellado en sartén en salsa ácida de limón y alcaparras.",
                    fr: "Poulet poêlé dans une sauce acidulée au citron et aux câpres.",
                    pt: "Frango selado na panela em molho ácido de limão e alcaparras.",
                    it: "Pollo scottato in padella in salsa piccante di limone e capperi."
                },
                "Creamy Arborio rice with wild mushrooms and Parmesan cheese.": {
                    es: "Arroz Arborio cremoso con hongos silvestres y queso parmesano.",
                    fr: "Riz Arborio crémeux aux champignons sauvages et fromage parmesan.",
                    pt: "Arroz Arborio cremoso com cogumelos selvagens e queijo parmesão.",
                    it: "Riso Arborio cremoso con funghi selvatici e formaggio parmigiano."
                },
                "Delicate fish with crispy skin served with lemon butter sauce.": {
                    es: "Pescado delicado con piel crujiente servido con salsa de mantequilla y limón.",
                    fr: "Poisson délicat à la peau croustillante servi avec sauce au beurre citronné.",
                    pt: "Peixe delicado com pele crocante servido com molho de manteiga e limão.",
                    it: "Pesce delicato con pelle croccante servito con salsa di burro e limone."
                },
                "Slow-braised short ribs in red wine until fork-tender.": {
                    es: "Costillas cortas estofadas lentamente en vino tinto hasta quedar tiernas al tenedor.",
                    fr: "Côtes courtes braisées lentement au vin rouge jusqu'à tendreté à la fourchette.",
                    pt: "Costelas curtas refogadas lentamente em vinho tinto até ficarem macias ao garfo.",
                    it: "Costine corte brasate lentamente nel vino rosso fino a diventare tenere alla forchetta."
                },

                // AVANZATO (Advanced) - 13 recipes
                "Tender beef tenderloin wrapped in puff pastry with mushroom duxelles.": {
                    es: "Tierno lomo de res envuelto en hojaldre con duxelles de hongos.",
                    fr: "Filet de bœuf tendre enveloppé dans une pâte feuilletée avec duxelles de champignons.",
                    pt: "Lombo de boi macio envolvido em massa folhada com duxelles de cogumelos.",
                    it: "Tenero filetto di manzo avvolto in pasta sfoglia con duxelles di funghi."
                },
                "Traditional French duck leg slowly cooked in its own fat until tender.": {
                    es: "Pierna de pato francesa tradicional cocida lentamente en su propia grasa hasta quedar tierna.",
                    fr: "Cuisse de canard française traditionnelle cuite lentement dans sa propre graisse jusqu'à tendreté.",
                    pt: "Perna de pato francesa tradicional cozida lentamente em sua própria gordura até ficar macia.",
                    it: "Coscia di anatra francese tradizionale cotta lentamente nel proprio grasso fino a diventare tenera."
                },
                "Luxurious lobster in a rich cream sauce, gratinéed to perfection.": {
                    es: "Langosta lujosa en rica salsa de crema, gratinada a la perfección.",
                    fr: "Homard luxueux dans une riche sauce à la crème, gratiné à la perfection.",
                    pt: "Lagosta luxuosa em molho rico de creme, gratinada à perfeição.",
                    it: "Aragosta lussuosa in ricca salsa di panna, gratinata alla perfezione."
                },
                "Braised veal shanks in white wine with gremolata and saffron risotto.": {
                    es: "Jarrete de ternera estofado en vino blanco con gremolata y risotto de azafrán.",
                    fr: "Jarrets de veau braisés au vin blanc avec gremolata et risotto au safran.",
                    pt: "Pernil de vitela refogado em vinho branco com gremolata e risotto de açafrão.",
                    it: "Stinchi di vitello brasati nel vino bianco con gremolata e risotto allo zafferano."
                },
                "Classic French chicken braised in red wine with pearl onions and mushrooms.": {
                    es: "Pollo francés clásico estofado en vino tinto con cebollitas perla y hongos.",
                    fr: "Poulet français classique braisé au vin rouge avec oignons perlés et champignons.",
                    pt: "Frango francês clássico refogado em vinho tinto com cebolinhas pérola e cogumelos.",
                    it: "Pollo francese classico brasato nel vino rosso con cipolline e funghi."
                },
                "Silky vanilla custard topped with caramelized sugar crust.": {
                    es: "Natilla sedosa de vainilla cubierta con costra de azúcar caramelizada.",
                    fr: "Crème à la vanille soyeuse surmontée d'une croûte de sucre caramélisé.",
                    pt: "Creme sedoso de baunilha coberto com crosta de açúcar caramelizado.",
                    it: "Crema setosa alla vaniglia sormontata da crosta di zucchero caramellato."
                },
                "Traditional Provençal stewed vegetables arranged in beautiful layers.": {
                    es: "Vegetales estofados provenzales tradicionales dispuestos en hermosas capas.",
                    fr: "Légumes mijotés provençaux traditionnels disposés en belles couches.",
                    pt: "Vegetais cozidos provençais tradicionais dispostos em belas camadas.",
                    it: "Verdure stufate provenzali tradizionali disposte in bellissimi strati."
                },
                "Classic French beef stew with red wine, pearl onions, and mushrooms.": {
                    es: "Estofado de res francés clásico con vino tinto, cebollitas perla y hongos.",
                    fr: "Ragoût de bœuf français classique au vin rouge, oignons perlés et champignons.",
                    pt: "Ensopado de boi francês clássico com vinho tinto, cebolinhas pérola e cogumelos.",
                    it: "Stufato di manzo francese classico con vino rosso, cipolline e funghi."
                },
                "Decadent chocolate cake with a molten center that flows like lava.": {
                    es: "Torta de chocolate decadente con centro fundido que fluye como lava.",
                    fr: "Gâteau au chocolat décadent avec un centre fondu qui coule comme de la lave.",
                    pt: "Bolo de chocolate decadente com centro derretido que flui como lava.",
                    it: "Torta al cioccolato decadente con centro fuso che scorre come lava."
                },
                "Classic French upside-down apple tart with caramelized apples.": {
                    es: "Tarta de manzana francesa clásica al revés con manzanas caramelizadas.",
                    fr: "Tarte aux pommes française classique à l'envers avec pommes caramélisées.",
                    pt: "Torta de maçã francesa clássica de cabeça para baixo com maçãs caramelizadas.",
                    it: "Crostata di mele francese classica capovolta con mele caramellate."
                },
                "Traditional Provençal fish stew with saffron and rouille sauce.": {
                    es: "Estofado de pescado provenzal tradicional con azafrán y salsa rouille.",
                    fr: "Ragoût de poisson provençal traditionnel au safran et sauce rouille.",
                    pt: "Ensopado de peixe provençal tradicional com açafrão e molho rouille.",
                    it: "Stufato di pesce provenzale tradizionale con zafferano e salsa rouille."
                },
                "Slow-cooked white bean stew with duck confit and Toulouse sausage.": {
                    es: "Estofado de frijoles blancos cocido lentamente con pato confitado y salchicha de Toulouse.",
                    fr: "Ragoût de haricots blancs cuit lentement avec confit de canard et saucisse de Toulouse.",
                    pt: "Ensopado de feijão branco cozido lentamente com pato confitado e linguiça de Toulouse.",
                    it: "Stufato di fagioli bianchi cotto lentamente con anatra confit e salsiccia di Toulouse."
                },
                "Tiny Piemontese pasta parcels with roasted meat filling in butter and sage sauce.": {
                    es: "Pequeños paquetes de pasta piamontesa con relleno de carne asada en salsa de mantequilla y salvia.",
                    fr: "Petits paquets de pâtes piémontaises avec farce de viande rôtie dans une sauce au beurre et à la sauge.",
                    pt: "Pequenos pacotes de massa piemontesa com recheio de carne assada em molho de manteiga e sálvia.",
                    it: "Piccoli pacchetti di pasta piemontese con ripieno di carne arrosto in salsa di burro e salvia."
                }
            },
            
            // Category translations
            categories: {
                "Pasta": { es: "Pastas", fr: "Pâtes", pt: "Massas", it: "Pasta" },
                "Poultry": { es: "Aves", fr: "Volailles", pt: "Aves", it: "Pollame" },
                "Vegetarian": { es: "Vegetariano", fr: "Végétarien", pt: "Vegetariano", it: "Vegetariano" },
                "Desserts": { es: "Postres", fr: "Desserts", pt: "Doces", it: "Dolci" },
                "Meat": { es: "Carnes", fr: "Viandes", pt: "Carnes", it: "Carni" },
                "Fish": { es: "Pescados", fr: "Poissons", pt: "Peixes", it: "Pesce" }
            },
            
            // Difficulty translations
            difficulties: {
                "Facile": { es: "Fácil", fr: "Facile", pt: "Fácil", it: "Facile" },
                "Intermedio": { es: "Intermedio", fr: "Intermédiaire", pt: "Intermediário", it: "Intermedio" },
                "Avanzato": { es: "Avanzado", fr: "Avancé", pt: "Avançado", it: "Avanzato" }
            }
        };

        // DYNAMIC RECIPE TRANSLATION FUNCTION
        function translateRecipe(recipe, targetLang) {
            if (targetLang === 'en') return recipe; // Return original if English
            
            const translated = { ...recipe };
            
            // Translate title
            if (recipeTranslations.titles[recipe.title] && recipeTranslations.titles[recipe.title][targetLang]) {
                translated.title = recipeTranslations.titles[recipe.title][targetLang];
            }
            
            // Translate category
            if (recipeTranslations.categories[recipe.category] && recipeTranslations.categories[recipe.category][targetLang]) {
                translated.category = recipeTranslations.categories[recipe.category][targetLang];
            }
            
            // Translate difficulty
            if (recipeTranslations.difficulties[recipe.difficulty] && recipeTranslations.difficulties[recipe.difficulty][targetLang]) {
                translated.difficulty = recipeTranslations.difficulties[recipe.difficulty][targetLang];
            }
            
            // Generate translated description based on language patterns
            translated.description = generateTranslatedDescription(recipe, targetLang);
            
            return translated;
        }

        // DESCRIPTION TRANSLATION GENERATOR - Now uses complete translation dictionary
        function generateTranslatedDescription(recipe, lang) {
            if (lang === 'en') return recipe.description; // Return original if English
            
            // First try to find exact translation in our complete dictionary
            if (recipeTranslations.descriptions[recipe.description] && 
                recipeTranslations.descriptions[recipe.description][lang]) {
                return recipeTranslations.descriptions[recipe.description][lang];
            }
            
            // Fallback to pattern-based translation for any missing descriptions
            const patterns = {
                es: {
                    "Traditional": "Tradicional",
                    "Classic": "Clásico", 
                    "Simple": "Simple",
                    "Perfect": "Perfecto",
                    "Fresh": "Fresco",
                    "Rich": "Rico",
                    "Tender": "Tierno",
                    "Crispy": "Crujiente",
                    "with": "con",
                    "and": "y"
                },
                fr: {
                    "Traditional": "Traditionnel",
                    "Classic": "Classique",
                    "Simple": "Simple", 
                    "Perfect": "Parfait",
                    "Fresh": "Frais",
                    "Rich": "Riche",
                    "Tender": "Tendre",
                    "Crispy": "Croustillant",
                    "with": "avec",
                    "and": "et"
                },
                pt: {
                    "Traditional": "Tradicional",
                    "Classic": "Clássico",
                    "Simple": "Simples",
                    "Perfect": "Perfeito", 
                    "Fresh": "Fresco",
                    "Rich": "Rico",
                    "Tender": "Macio",
                    "Crispy": "Crocante",
                    "with": "com",
                    "and": "e"
                },
                it: {
                    "Traditional": "Tradizionale",
                    "Classic": "Classico",
                    "Simple": "Semplice",
                    "Perfect": "Perfetto",
                    "Fresh": "Fresco", 
                    "Rich": "Ricco",
                    "Tender": "Tenero",
                    "Crispy": "Croccante",
                    "with": "con",
                    "and": "e"
                }
            };
            
            let description = recipe.description;
            if (patterns[lang]) {
                Object.keys(patterns[lang]).forEach(en => {
                    const translated = patterns[lang][en];
                    description = description.replace(new RegExp(en, 'gi'), translated);
                });
            }
            
            return description;
        }

        // Complete language switching function
        function switchLanguage(lang) {
            currentLanguage = lang;
            
            // Update active language button
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
            
            // Update all text content
            updateAllContent(lang);

            // Refresh stats immediately with localized labels
            updateStats(
                window.recipes?.length || (Array.isArray(allRecipes) ? allRecipes.length : 0),
                window.favoritesManager?.favorites?.length || 0
            );

            // Update recipes with perfect images
            loadRecipes(lang);
        }

        // Update all content based on language
        function updateAllContent(lang) {
            const t = translations[lang];
            
            // Update all elements with IDs
            Object.keys(t).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = t[key];
                }
            });
            
            // Update search placeholder
            document.getElementById('searchInput').placeholder = t.searchPlaceholder;

            // Update floating button title
            document.getElementById('floatingAdd').title = t.btnNewRecipe;

            // Ensure stat labels are localized
            updateStatLabels(t);
        }

        function updateStatLabels(t) {
            if (!t) return;

            const labelMappings = {
                statTotalRecipes: t.statTotalRecipes,
                statCompleted: t.statCompleted,
                statFavorites: t.statFavorites,
                statSeals: t.statSeals
            };

            Object.entries(labelMappings).forEach(([id, text]) => {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = text;
                }
            });
        }

        // Load and filter recipes with PERFECT matching images - DYNAMIC TRANSLATION
        function loadRecipes(lang) {
            // Always start with English recipes as base
            const baseRecipes = recipesByLanguage['en'];
            
            // If English, use directly
            if (lang === 'en') {
                allRecipes = baseRecipes;
            } else {
                // Translate all 51 recipes to target language
                allRecipes = baseRecipes.map(recipe => translateRecipe(recipe, lang));
            }
            
            filterAndDisplayRecipes();
        }

        // Filter and display recipes based on current filters
        function filterAndDisplayRecipes() {
            const t = translations[currentLanguage];
            let filteredRecipes = [...allRecipes];

            // Apply difficulty filter
            if (currentDifficultyFilter !== 'tutte') {
                filteredRecipes = filteredRecipes.filter(recipe => 
                    recipe.difficulty.toLowerCase() === currentDifficultyFilter.toLowerCase()
                );
            }

            // Apply category filter
            if (currentCategoryFilter !== 'all') {
                const categoryMappings = getCategoryMapping(currentCategoryFilter);
                filteredRecipes = filteredRecipes.filter(recipe => 
                    categoryMappings.some(mapping => 
                        recipe.category.toLowerCase() === mapping.toLowerCase()
                    )
                );


            }

            // Update stats
            updateStats(filteredRecipes.length);

            // Display filtered recipes
            const grid = document.getElementById('recipesGrid');
            grid.innerHTML = filteredRecipes.map((recipe, index) => `
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
                        <button class="recipe-btn view-btn">${t.btnView}</button>
                        <button class="recipe-btn edit-btn">${t.btnEdit}</button>
                        <button class="recipe-btn delete-btn">${t.btnDelete}</button>
                    </div>
                </div>
            `).join('');

            // ADICIONAR ESTAS LINHAS AQUI:
            setTimeout(() => {
              if (window.favoritesManager) {
                 window.favoritesManager.updateFavoriteButtons();
              }
            }, 100);

        }

        // Map category filter names to recipe categories
        function getCategoryMapping(filterCategory) {
            const categoryMappings = {
                'meat': ['Meat', 'Carnes', 'Viandes', 'Carnes', 'Carni'],
                'poultry': ['Poultry', 'Aves', 'Volailles', 'Aves', 'Pollame'], 
                'pasta': ['Pasta', 'Pastas', 'Pâtes', 'Massas', 'Pasta'],
                'desserts': ['Desserts', 'Postres', 'Desserts', 'Doces', 'Dolci'],
                'vegetarian': ['Vegetarian', 'Vegetariano', 'Végétarien', 'Vegetariano', 'Vegetariano'],
                'fish': ['Fish', 'Pescados', 'Poissons', 'Peixes', 'Pesce']
            };
            return categoryMappings[filterCategory] || [filterCategory];
        }

        // Update statistics display
        function updateStats(totalCount, favoriteCountOverride = null) {
            const favoritesCount = favoriteCountOverride !== null
                ? favoriteCountOverride
                : (window.favoritesManager ? window.favoritesManager.favorites.length : 0);

            document.getElementById('totalRecipes').textContent = totalCount;
            document.getElementById('completedRecipes').textContent = 0;
            document.getElementById('favoriteRecipes').textContent = favoritesCount;
            document.getElementById('sealsEarned').textContent = 0;
        }

// incluir daqui

function showSection(section) {
    console.log('🔍 DEBUG: showSection chamada com:', section);
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.nav-item').classList.add('active');

    // ADICIONAR ESTE BLOCO:
    if (section === 'favorites') {
        console.log('🔍 DEBUG: Seção favoritos detectada');
        if (window.favoritesManager) {
            console.log('🔍 DEBUG: Chamando showFavoritesOnly');
            window.favoritesManager.showFavoritesOnly();
        } else {
            console.log('❌ DEBUG: favoritesManager não encontrado');
        }
        return;
    }
    
    // Reset filters when showing all recipes
    if (section === 'all-recipes') {
        currentCategoryFilter = 'all';
        currentDifficultyFilter = 'tutte';
        
        // Reset difficulty filter buttons
        document.querySelectorAll('.filter-tag').forEach(tag => {
            tag.classList.remove('active');
        });
        document.getElementById('filterTutte').classList.add('active');
        
        // Refresh display
        filterAndDisplayRecipes();
    }
}

// ate aqui

        function filterByCategory(category) {
            // Update active category button
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            event.target.closest('.nav-item').classList.add('active');
            
            // Set current category filter
            currentCategoryFilter = category;
            
            // Apply filter and refresh display
            filterAndDisplayRecipes();
        }

        function filterByDifficulty(difficulty) {
            // Update active difficulty button
            document.querySelectorAll('.filter-tag').forEach(tag => {
                tag.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Set current difficulty filter
            currentDifficultyFilter = difficulty;
            
            // Apply filter and refresh display
            filterAndDisplayRecipes();
        }

        function createNewRecipe() {
            alert('Recipe creation feature coming soon!');
        }

        function importRecipe() {
            alert('Recipe import feature coming soon!');
        }

        function randomRecipe() {
            const randomIndex = Math.floor(Math.random() * allRecipes.length);
            const randomRecipe = allRecipes[randomIndex];
            alert(`Random recipe: ${randomRecipe.title}`);
        }

        // INTELLIGENT SEARCH SYSTEM - Advanced multi-criteria search
        function searchRecipes() {
            const searchTerm = document.getElementById('searchInput').value.trim();
            
            if (searchTerm.length === 0) {
                filterAndDisplayRecipes();
                updateSearchCounter(allRecipes.length, false);
                return;
            }
            
            if (searchTerm.length < 2) {
                return; // Wait for at least 2 characters
            }
            
            const results = performIntelligentSearch(searchTerm);
            displaySearchResults(results, searchTerm);
            updateSearchCounter(results.length, true, searchTerm);
        }
        
        // ADVANCED SEARCH ALGORITHM
        function performIntelligentSearch(searchTerm) {
            const normalizedSearch = normalizeText(searchTerm);
            const searchWords = normalizedSearch.split(' ').filter(word => word.length > 1);
            
            const results = allRecipes.map(recipe => {
                let score = 0;
                let matchedFields = [];
                
                // Normalize recipe data
                const normalizedTitle = normalizeText(recipe.title);
                const normalizedDescription = normalizeText(recipe.description);
                const normalizedCategory = normalizeText(recipe.category);
                const normalizedDifficulty = normalizeText(recipe.difficulty);
                const normalizedTime = normalizeText(recipe.time);
                
                // Get recipe ingredients for ingredient search
                const recipeIngredientsList = recipeIngredients[recipe.title] || [];
                const normalizedIngredients = recipeIngredientsList.map(ingredient => normalizeText(ingredient));
                
                // Search in different fields with different weights
                searchWords.forEach(word => {
                    // Title match (highest priority)
                    if (normalizedTitle.includes(word)) {
                        score += 10;
                        matchedFields.push('title');
                    }
                    
                    // Ingredient match (high priority - NEW!)
                    const ingredientMatch = normalizedIngredients.some(ingredient => 
                        ingredient.includes(word) || word.includes(ingredient)
                    );
                    if (ingredientMatch) {
                        score += 9;
                        matchedFields.push('ingredients');
                    }
                    
                    // Description match (medium priority)
                    if (normalizedDescription.includes(word)) {
                        score += 5;
                        matchedFields.push('description');
                    }
                    
                    // Category match (medium priority)
                    if (normalizedCategory.includes(word)) {
                        score += 7;
                        matchedFields.push('category');
                    }
                    
                    // Difficulty match (low priority)
                    if (normalizedDifficulty.includes(word)) {
                        score += 3;
                        matchedFields.push('difficulty');
                    }
                    
                    // Time-based search (special handling)
                    if (isTimeSearch(word, recipe.time)) {
                        score += 6;
                        matchedFields.push('time');
                    }
                });
                
                // Bonus for exact phrase matches
                if (normalizedTitle.includes(normalizedSearch)) {
                    score += 15;
                }
                if (normalizedDescription.includes(normalizedSearch)) {
                    score += 8;
                }
                
                return {
                    ...recipe,
                    searchScore: score,
                    matchedFields: [...new Set(matchedFields)]
                };
            })
            .filter(recipe => recipe.searchScore > 0)
            .sort((a, b) => b.searchScore - a.searchScore);
            
            return results;
        }
        
        // TEXT NORMALIZATION - Remove accents, convert to lowercase
        function normalizeText(text) {
            return text.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') // Remove accents
                .replace(/[^\w\s]/g, ' ') // Replace special chars with spaces
                .replace(/\s+/g, ' ') // Normalize spaces
                .trim();
        }
        
        // TIME-BASED SEARCH LOGIC
        function isTimeSearch(searchWord, recipeTime) {
            const timeValue = parseInt(recipeTime);
            
            // Quick/Fast search
            if (['quick', 'fast', 'rapido', 'rapide', 'veloce', 'facil'].includes(searchWord)) {
                return timeValue <= 30;
            }
            
            // Slow/Long search
            if (['slow', 'long', 'lento', 'longo', 'lungo', 'demorado'].includes(searchWord)) {
                return timeValue >= 60;
            }
            
            // Medium time search
            if (['medium', 'medio', 'moyen', 'moderado'].includes(searchWord)) {
                return timeValue > 30 && timeValue < 60;
            }
            
            // Direct time search (e.g., "30", "45min")
            if (/^\d+/.test(searchWord)) {
                const searchTime = parseInt(searchWord);
                return Math.abs(timeValue - searchTime) <= 15; // Within 15 minutes
            }
            
            return false;
        }
        
        // DISPLAY SEARCH RESULTS WITH HIGHLIGHTING
        function displaySearchResults(results, searchTerm) {
            const t = translations[currentLanguage];
            const grid = document.getElementById('recipesGrid');
            
            if (results.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #e8e8e8;">
                        <div style="font-size: 3rem; margin-bottom: 20px;">🔍</div>
                        <h3 style="color: #d4af37; margin-bottom: 10px;">No recipes found</h3>
                        <p>Try searching for ingredients, dish names, or cooking time</p>
                        <p style="margin-top: 10px; font-size: 0.9rem; opacity: 0.7;">
                            Examples: "tomato", "garlic", "chicken", "pasta", "quick", "chocolate"
                        </p>
                    </div>
                `;
                return;
            }
            
            grid.innerHTML = results.map((recipe, index) => `
                <div class="recipe-card" style="border: ${recipe.searchScore > 15 ? '2px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.3)'};">
                    <div class="category-badge">${recipe.category}</div>
                    ${recipe.searchScore > 15 ? '<div style="position: absolute; top: 15px; left: 15px; background: #d4af37; color: #1a1a2e; padding: 4px 8px; border-radius: 10px; font-size: 0.7rem; font-weight: bold;">⭐ Best Match</div>' : ''}
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
                    <div class="recipe-title">${highlightText(recipe.title, searchTerm)}</div>
                    <div class="recipe-meta">
                        <span>⏱️ ${highlightText(recipe.time, searchTerm)}</span>
                        <span>📊 ${highlightText(recipe.difficulty, searchTerm)}</span>
                        <span>👥 ${recipe.servings}</span>
                    </div>
                    <div class="recipe-description">${highlightText(recipe.description, searchTerm)}</div>
                    <div style="margin: 10px 0; font-size: 0.8rem; color: #b8b8b8;">
                        <span>Found in: ${recipe.matchedFields.join(', ')}</span>
                    </div>
                    <div class="recipe-actions">
                        <button class="recipe-btn view-btn">${t.btnView}</button>
                        <button class="recipe-btn edit-btn">${t.btnEdit}</button>
                        <button class="recipe-btn delete-btn">${t.btnDelete}</button>
                    </div>
                </div>
            `).join('');
        }
        
        // HIGHLIGHT SEARCH TERMS IN TEXT
        function highlightText(text, searchTerm) {
            if (!searchTerm || searchTerm.length < 2) return text;
            
            const normalizedSearch = normalizeText(searchTerm);
            const searchWords = normalizedSearch.split(' ').filter(word => word.length > 1);
            
            let highlightedText = text;
            
            searchWords.forEach(word => {
                const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
                highlightedText = highlightedText.replace(regex, '<mark style="background: rgba(212, 175, 55, 0.3); color: #d4af37; padding: 1px 2px; border-radius: 2px;">$1</mark>');
            });
            
            return highlightedText;
        }
        
        // ESCAPE REGEX SPECIAL CHARACTERS
        function escapeRegex(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        
        // UPDATE SEARCH COUNTER
        function updateSearchCounter(count, isSearch, searchTerm = '') {
            const existingCounter = document.getElementById('searchCounter');
            if (existingCounter) {
                existingCounter.remove();
            }
            
            if (isSearch) {
                const counter = document.createElement('div');
                counter.id = 'searchCounter';
                counter.style.cssText = `
                    margin: 10px 0;
                    padding: 10px 15px;
                    background: rgba(212, 175, 55, 0.1);
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    border-radius: 10px;
                    color: #d4af37;
                    font-size: 0.9rem;
                `;
                
                if (count === 0) {
                    counter.innerHTML = `🔍 No results for "<strong>${searchTerm}</strong>"`;
                } else {
                    counter.innerHTML = `🔍 Found <strong>${count}</strong> recipe${count !== 1 ? 's' : ''} for "<strong>${searchTerm}</strong>"`;
                }
                
                const searchBar = document.getElementById('searchInput');
                searchBar.parentNode.insertBefore(counter, searchBar.nextSibling);
            }
        }

        function setView(view) {
            document.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        // Initialize with English and perfect images
        //document.addEventListener('DOMContentLoaded', function() {
        //    updateAllContent('en');
        //    loadRecipes('en');
        //    console.log('🍷✨ SandyChef Perfect Images loaded!');
        //    console.log('All 51+ recipes now have PERFECT matching images!');
        //});

        function initSandyChef() {
         const activeLanguageButton = document.querySelector('.lang-btn.active');
         const initialLanguage = activeLanguageButton?.dataset.lang || currentLanguage;

         switchLanguage(initialLanguage);

         console.log('🍷✨ SandyChef Perfect Images loaded!');
         console.log('All 51+ recipes now have PERFECT matching images!');
        }

	// If the document is still loading, wait for DOMContentLoaded.
	// If it is already loaded, run immediately.
	if (document.readyState === 'loading') {
  	  document.addEventListener('DOMContentLoaded', initSandyChef);
	} else {
	  initSandyChef();
	}

//    </script>
