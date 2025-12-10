// Basic recipe dataset for SandyChef™
// Later we can move this to a JSON file or API.

const SANDYCHEF_RECIPES = [
  {
    id: 1,
    title: "Creamy Lemon Pasta",
    subtitle: "Bright, silky and ready in under 20 minutes.",
    time: "20 min",
    difficulty: "Easy",
    servings: "2 portions",
    tags: ["quick", "dinner", "comfort"],
    ingredients: [
      "200 g pasta (spaghetti or linguine)",
      "1 lemon (zest + juice)",
      "2 tbsp butter",
      "60 ml heavy cream",
      "30 g grated parmesan",
      "Salt and black pepper to taste"
    ],
    steps: [
      "Cook the pasta in salted boiling water until al dente.",
      "In a pan, melt the butter on low heat and add the lemon zest.",
      "Add the cream and a ladle of the pasta cooking water, stirring gently.",
      "Drain the pasta and toss it into the pan with the sauce.",
      "Add parmesan, adjust salt and pepper, and finish with a splash of lemon juice.",
      "Serve immediately with extra parmesan on top."
    ],
    note:
      "Great with a small handful of arugula on top for a peppery contrast.",
    highlightTag: "dinner"
  },
  {
    id: 2,
    title: "Overnight Oats with Berries",
    subtitle: "Zero-stress breakfast that waits for you in the fridge.",
    time: "10 min + overnight",
    difficulty: "Easy",
    servings: "1–2 portions",
    tags: ["breakfast", "quick"],
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup milk (or plant-based milk)",
      "1/2 cup yogurt (optional for extra creaminess)",
      "1 tsp honey or maple syrup",
      "Fresh berries (strawberries, blueberries, raspberries)",
      "Chia seeds or nuts (optional)"
    ],
    steps: [
      "In a jar, combine oats, milk and yogurt.",
      "Add honey or maple syrup and stir well.",
      "Fold in chia seeds or nuts, if using.",
      "Close the jar and refrigerate overnight.",
      "In the morning, top with fresh berries and serve."
    ],
    note: "Adjust sweetness to your taste. It keeps well for up to 2 days.",
    highlightTag: "breakfast"
  },
  {
    id: 3,
    title: "Herb & Garlic Roasted Chicken Thighs",
    subtitle: "Juicy, golden and perfect for a cozy dinner.",
    time: "45 min",
    difficulty: "Medium",
    servings: "3–4 portions",
    tags: ["dinner", "comfort"],
    ingredients: [
      "6 chicken thighs (bone-in, skin-on)",
      "3 cloves garlic, minced",
      "2 tbsp olive oil",
      "1 tsp dried thyme",
      "1 tsp dried rosemary",
      "Salt and pepper to taste",
      "Lemon wedges, to serve"
    ],
    steps: [
      "Preheat the oven to 200°C / 400°F.",
      "Mix olive oil, garlic, thyme, rosemary, salt and pepper in a small bowl.",
      "Pat the chicken dry and rub the herb mixture all over.",
      "Arrange the thighs on a baking tray, skin-side up.",
      "Roast for 35–40 minutes until golden and cooked through.",
      "Serve with lemon wedges and your favorite side."
    ],
    note:
      "You can add potato wedges to the same tray to make a full one-pan dinner.",
    highlightTag: "comfort"
  }
];

