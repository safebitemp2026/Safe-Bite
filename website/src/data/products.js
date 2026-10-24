export const PRODUCTS = [
  {
    id: "lays-classic-salted",
    name: "Lays Classic Salted",
    brand: "Lay's",
    category: "Snacks",
    barcode: "8901063010123",
    scannedBadge: "Scanned via SafeBite App",
    isEdible: false,
    edibilityStatus: "Non Edible",
    edibilityMessage: "It is not edible for person with kidney issue",
    allergyAlert: "May Cause Allergy",
    allergensFound: ["Peanut", "Milk", "Soy"],
    novaClass: 4,
    novaLabel: "Ultra-processed Food",
    ingredients: "Potatoes, edible vegetable oil, iodized salt, seasoning (spices, sugar, flavour enhancers), Milk solids, acidity regulator and natural flavors.",
    nutritionPer100g: {
      energy: "536 kcal",
      protein: "6.8g",
      carbohydrate: "53.7g",
      totalFat: "34.1g",
      sodium: "1.2g"
    },
    allergySubstances: [
      { name: "Peanut", description: "Peanut and nut-based flavoring" },
      { name: "Milk", description: "Milk solids and dairy seasoning" },
      { name: "Soy", description: "Soy lecithin and soybean oil" }
    ],
    harmfulConditions: [
      { condition: "Kidney Disease / Renal Impairment", description: "High sodium concentration (1.2g/100g) strains renal filtration." },
      { condition: "Hypertension", description: "Excess salt elevates blood pressure significantly." },
      { condition: "Peanut Allergy", description: "May trigger a severe allergic response." },
      { condition: "Milk Allergy", description: "Contains dairy-derived ingredients." },
      { condition: "Soy Allergy", description: "Soy ingredients are present." }
    ],
    healthRisks: [
      { title: "High Sodium Level", severity: "High", detail: "1.2g per 100g exceeds recommended daily threshold for sodium. Unsafe for kidney patients." },
      { title: "High Saturated Fat", severity: "Medium", detail: "Edible vegetable oil contributes to 34.1g fat total." },
      { title: "NOVA Class 4", severity: "High", detail: "Ultra-processed product containing flavor enhancers and acidity regulators." }
    ],
    aiSummary: "Lays Classic Salted is an ultra-processed snack high in sodium and saturated fats. It is not recommended for individuals with kidney issues or high blood pressure due to extreme sodium content."
  },
  {
    id: "maggi-noodles",
    name: "Maggi 2-Minute Masala Noodles",
    brand: "Nestle",
    category: "Instant Foods",
    barcode: "8901058852119",
    scannedBadge: "Scanned via SafeBite App",
    isEdible: false,
    edibilityStatus: "Non Edible",
    edibilityMessage: "It is not edible for person with kidney issue or celiac disease",
    allergyAlert: "Contains Gluten & Wheat",
    allergensFound: ["Wheat", "Gluten", "Soy"],
    novaClass: 4,
    novaLabel: "Ultra-processed Food",
    ingredients: "Refined wheat flour (Maida), Palm oil, Salt, Wheat gluten, Mineral (Calcium carbonate), Thickeners (508 & 412). Masala Tastemaker: Mixed spices, Sugar, Hydrolysed groundnut protein, Dehydrated onion, Garlic powder.",
    nutritionPer100g: {
      energy: "427 kcal",
      protein: "8.2g",
      carbohydrate: "63.5g",
      totalFat: "15.7g",
      sodium: "1.18g"
    },
    allergySubstances: [
      { name: "Wheat / Gluten", description: "Primary flour and added wheat gluten" },
      { name: "Soy / Hydrolyzed Protein", description: "Hydrolyzed vegetable protein in seasoning" }
    ],
    harmfulConditions: [
      { condition: "Kidney Disease", description: "Concentrated sodium in tastemaker stresses renal function." },
      { condition: "Celiac Disease", description: "Contains significant wheat gluten." },
      { condition: "Hypertension", description: "High sodium content per serving." },
      { condition: "Wheat Allergy", description: "Triggers immediate IgE-mediated response." }
    ],
    healthRisks: [
      { title: "Refined Wheat Flour", severity: "Medium", detail: "High glycemic index refined carbohydrate base." },
      { title: "High Sodium", severity: "High", detail: "Tastemaker packet contains concentrated sodium dangerous for kidneys." }
    ],
    aiSummary: "Maggi Masala Noodles are ultra-processed (NOVA 4) with high sodium and gluten. Unsuitable for individuals with kidney disease, hypertension, or Celiac disease."
  },
  {
    id: "coca-cola",
    name: "Coca-Cola Original Taste",
    brand: "The Coca-Cola Company",
    category: "Beverages",
    barcode: "5449000000996",
    scannedBadge: "Scanned via SafeBite App",
    isEdible: false,
    edibilityStatus: "Non Edible",
    edibilityMessage: "It is not edible for person with diabetes",
    allergyAlert: "High Added Sugar Alert",
    allergensFound: ["Caffeine", "Sulphites"],
    novaClass: 4,
    novaLabel: "Ultra-processed Soft Drink",
    ingredients: "Carbonated water, Sugar, Caramel color (E150d), Phosphoric acid, Natural flavorings including caffeine.",
    nutritionPer100g: {
      energy: "44 kcal",
      protein: "0.0g",
      carbohydrate: "10.6g",
      totalFat: "0.0g",
      sodium: "0.01g"
    },
    allergySubstances: [
      { name: "Caffeine", description: "Natural stimulant present in beverage" },
      { name: "Caramel Color E150d", description: "Contains trace sulphites from processing" }
    ],
    harmfulConditions: [
      { condition: "Diabetes Mellitus", description: "10.6g sugar per 100ml rapidly spikes blood glucose." },
      { condition: "Dental Caries", description: "Acidic pH combined with high sugar promotes enamel erosion." }
    ],
    healthRisks: [
      { title: "Excessive Added Sugar", severity: "High", detail: "35g sugar in a single 330ml can exceeds WHO daily intake guideline." },
      { title: "Phosphoric Acid", severity: "Medium", detail: "High consumption may affect calcium absorption." }
    ],
    aiSummary: "Coca-Cola is an ultra-processed carbonated beverage with high added sugar density. Poses significant health risk for diabetic individuals and those avoiding high glycemic loads."
  },
  {
    id: "pepsi",
    name: "Pepsi Cola",
    brand: "PepsiCo",
    category: "Beverages",
    barcode: "012000000133",
    scannedBadge: "Scanned via SafeBite App",
    isEdible: false,
    edibilityStatus: "Non Edible",
    edibilityMessage: "It is not edible for person with diabetes",
    allergyAlert: "High Added Sugar Alert",
    allergensFound: ["Caffeine"],
    novaClass: 4,
    novaLabel: "Ultra-processed Soft Drink",
    ingredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Sugar, Phosphoric Acid, Caffeine, Citric Acid, Natural Flavor.",
    nutritionPer100g: {
      energy: "43 kcal",
      protein: "0.0g",
      carbohydrate: "10.9g",
      totalFat: "0.0g",
      sodium: "0.01g"
    },
    allergySubstances: [
      { name: "Caffeine", description: "Central nervous system stimulant" }
    ],
    harmfulConditions: [
      { condition: "Diabetes Mellitus", description: "High fructose corn syrup causes fast sugar surges." },
      { condition: "Insulin Resistance", description: "Frequent consumption impairs insulin sensitivity." }
    ],
    healthRisks: [
      { title: "High Fructose Corn Syrup", severity: "High", detail: "Linked to hepatic fat accumulation and metabolic strain." }
    ],
    aiSummary: "Pepsi is a sugar-sweetened carbonated drink with high glycemic carbohydrates. Unsafe for diabetics and individuals with insulin resistance."
  },
  {
    id: "kelloggs-corn-flakes",
    name: "Kellogg's Original Corn Flakes",
    brand: "Kellogg's",
    category: "Breakfast Cereals",
    barcode: "380001600011",
    scannedBadge: "Scanned via SafeBite App",
    isEdible: false,
    edibilityStatus: "Non Edible",
    edibilityMessage: "It is not edible for person with celiac disease",
    allergyAlert: "May Contain Barley (Gluten)",
    allergensFound: ["Barley Malt Extract", "Gluten"],
    novaClass: 3,
    novaLabel: "Processed Food",
    ingredients: "Milled corn, Sugar, Malt flavoring (Barley), High fructose corn syrup, Salt, Iron, Vitamin C, Niacinamide, Vitamin B6, Vitamin B2, Vitamin B1, Vitamin A, Folic acid, Vitamin D, Vitamin B12.",
    nutritionPer100g: {
      energy: "378 kcal",
      protein: "7.0g",
      carbohydrate: "84.0g",
      totalFat: "0.9g",
      sodium: "0.72g"
    },
    allergySubstances: [
      { name: "Barley Malt Extract", description: "Contains gluten from barley malt" }
    ],
    harmfulConditions: [
      { condition: "Celiac Disease / Gluten Intolerance", description: "Malt flavoring contains trace barley proteins unsafe for celiac patients." }
    ],
    healthRisks: [
      { title: "High Glycemic Index", severity: "Medium", detail: "Fast-digesting corn starches can cause hunger rebounds." }
    ],
    aiSummary: "Kellogg's Corn Flakes contain barley malt extract which renders it unsafe for strict Celiac disease patients."
  },
  {
    id: "tender-coconut-water",
    name: "Pure Tender Coconut Water",
    brand: "Nature's Pure",
    category: "Beverages",
    barcode: "8901234567890",
    scannedBadge: "Scanned via SafeBite App",
    isEdible: true,
    edibilityStatus: "Edible",
    edibilityMessage: "Safe and edible for your health profile",
    allergyAlert: "No Allergens Found",
    allergensFound: [],
    novaClass: 1,
    novaLabel: "Unprocessed Natural Food",
    ingredients: "100% Pure Natural Tender Coconut Water.",
    nutritionPer100g: {
      energy: "19 kcal",
      protein: "0.7g",
      carbohydrate: "3.7g",
      totalFat: "0.2g",
      sodium: "0.02g"
    },
    allergySubstances: [],
    harmfulConditions: [],
    healthRisks: [],
    aiSummary: "Pure natural coconut water is rich in hydration minerals and electrolytes without artificial additives or excessive sodium. Safe for daily diet."
  }
];
