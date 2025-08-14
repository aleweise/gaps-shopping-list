export interface GapsFood {
  name: string
  category: string
  quantity: string
  substitutions?: string[]
  notes?: string
}

export const GAPS_PHASES = {
  1: {
    name: "Fase 1 - Introducción",
    description: "Caldos caseros, probióticos y alimentos muy suaves",
    foods: [
      { name: "Huesos para caldo (res, pollo, pescado)", category: "Carnes", quantity: "2-3 kg", notes: "Preferiblemente orgánicos" },
      { name: "Carne hervida (pollo, res, pescado)", category: "Carnes", quantity: "500g", notes: "Sin piel, bien cocida" },
      { name: "Jugo de chucrut", category: "Fermentados", quantity: "1 frasco", notes: "Casero o sin pasteurizar" },
      { name: "Probióticos", category: "Suplementos", quantity: "1 frasco", notes: "Consultar con profesional" },
      { name: "Sal marina sin refinar", category: "Condimentos", quantity: "1 paquete", notes: "Sin aditivos" },
      { name: "Jengibre fresco", category: "Condimentos", quantity: "100g", notes: "Para infusiones" },
      { name: "Miel cruda", category: "Endulzantes", quantity: "1 frasco pequeño", notes: "Solo si se tolera" }
    ],
    restrictions: "Evitar todos los vegetales, frutas, lácteos y granos. Solo caldos y carnes hervidas."
  },
  2: {
    name: "Fase 2 - Expansión gradual",
    description: "Se añaden yemas de huevo crudas, ghee y vegetales fermentados",
    foods: [
      { name: "Huevos orgánicos", category: "Proteínas", quantity: "1 docena", notes: "Solo yemas crudas al principio" },
      { name: "Ghee", category: "Grasas", quantity: "500g", notes: "Casero o de calidad" },
      { name: "Chucrut", category: "Fermentados", quantity: "1 frasco", notes: "Casero preferiblemente" },
      { name: "Kimchi", category: "Fermentados", quantity: "1 frasco", notes: "Sin azúcar añadido" },
      { name: "Pescado graso", category: "Carnes", quantity: "500g", notes: "Salmón, sardinas, caballa" },
      { name: "Aceite de coco", category: "Grasas", quantity: "1 frasco", notes: "Virgen, prensado en frío" },
      { name: "Hierbas frescas", category: "Condimentos", quantity: "Variadas", notes: "Perejil, cilantro, eneldo" }
    ],
    restrictions: "Aún evitar vegetales crudos, frutas y lácteos. Introducir alimentos gradualmente."
  },
  3: {
    name: "Fase 3 - Vegetales cocidos",
    description: "Introducción de vegetales bien cocidos y aguacate maduro",
    foods: [
      { name: "Calabaza", category: "Vegetales", quantity: "1 unidad", notes: "Bien cocida, sin piel" },
      { name: "Calabacín", category: "Vegetales", quantity: "3 unidades", notes: "Pelado y bien cocido" },
      { name: "Brócoli", category: "Vegetales", quantity: "2 cabezas", notes: "Solo floretes, bien cocido" },
      { name: "Coliflor", category: "Vegetales", quantity: "1 cabeza", notes: "Bien cocida" },
      { name: "Zanahorias", category: "Vegetales", quantity: "1 kg", notes: "Peladas y bien cocidas" },
      { name: "Aguacate maduro", category: "Grasas", quantity: "3-4 unidades", notes: "Muy maduro, empezar con poco" },
      { name: "Aceite de oliva", category: "Grasas", quantity: "500ml", notes: "Extra virgen, prensado en frío" },
      { name: "Pancakes de calabaza", category: "Preparados", quantity: "Ingredientes", notes: "Harina de calabaza casera" }
    ],
    restrictions: "Evitar vegetales fibrosos, frutas ácidas y lácteos. Introducir un vegetal nuevo cada 3-5 días."
  },
  4: {
    name: "Fase 4 - Carnes asadas y aceite de oliva",
    description: "Se añaden carnes asadas, aceite de oliva prensado en frío y jugo de vegetales",
    foods: [
      { name: "Carne de res para asar", category: "Carnes", quantity: "1 kg", notes: "Cortes tiernos, orgánica" },
      { name: "Pollo entero", category: "Carnes", quantity: "1 unidad", notes: "Orgánico, para asar" },
      { name: "Aceite de oliva extra virgen", category: "Grasas", quantity: "750ml", notes: "Primera presión en frío" },
      { name: "Jugo de vegetales frescos", category: "Bebidas", quantity: "Ingredientes", notes: "Zanahoria, apio, pepino" },
      { name: "Apio", category: "Vegetales", quantity: "2 manojos", notes: "Para jugos y cocido" },
      { name: "Pepino", category: "Vegetales", quantity: "5 unidades", notes: "Para jugos, pelado" },
      { name: "Pan de almendras", category: "Preparados", quantity: "Ingredientes", notes: "Harina de almendras casera" },
      { name: "Almendras crudas", category: "Frutos secos", quantity: "500g", notes: "Remojadas 12-24h" }
    ],
    restrictions: "Evitar frutas, lácteos y granos. Los frutos secos deben introducirse gradualmente."
  },
  5: {
    name: "Fase 5 - Vegetales crudos y frutas cocidas",
    description: "Introducción de ensaladas y frutas bien cocidas",
    foods: [
      { name: "Lechuga orgánica", category: "Vegetales", quantity: "3 unidades", notes: "Empezar con hojas tiernas" },
      { name: "Pepino", category: "Vegetales", quantity: "5 unidades", notes: "Pelado, sin semillas" },
      { name: "Tomate", category: "Vegetales", quantity: "1 kg", notes: "Maduro, sin piel ni semillas" },
      { name: "Manzanas", category: "Frutas", quantity: "2 kg", notes: "Para cocinar, peladas" },
      { name: "Peras", category: "Frutas", quantity: "1 kg", notes: "Para cocinar, peladas" },
      { name: "Compota de manzana", category: "Preparados", quantity: "Ingredientes", notes: "Casera, sin azúcar" },
      { name: "Aceite de girasol prensado en frío", category: "Grasas", quantity: "500ml", notes: "Sin refinar" },
      { name: "Vinagre de manzana", category: "Condimentos", quantity: "1 botella", notes: "Sin filtrar, con madre" }
    ],
    restrictions: "Introducir vegetales crudos gradualmente. Frutas solo cocidas al principio."
  },
  6: {
    name: "Fase 6 - Frutas crudas y más variedad",
    description: "Frutas crudas peladas y mayor variedad de alimentos",
    foods: [
      { name: "Manzanas", category: "Frutas", quantity: "2 kg", notes: "Peladas, empezar con poca cantidad" },
      { name: "Peras", category: "Frutas", quantity: "1 kg", notes: "Peladas y maduras" },
      { name: "Bayas", category: "Frutas", quantity: "500g", notes: "Arándanos, frambuesas" },
      { name: "Melón", category: "Frutas", quantity: "1 unidad", notes: "Muy maduro" },
      { name: "Nueces", category: "Frutos secos", quantity: "300g", notes: "Remojadas y activadas" },
      { name: "Semillas de girasol", category: "Semillas", quantity: "200g", notes: "Crudas, remojadas" },
      { name: "Miel cruda", category: "Endulzantes", quantity: "500g", notes: "Sin procesar" },
      { name: "Horneados con almendras", category: "Preparados", quantity: "Ingredientes", notes: "Galletas, muffins caseros" }
    ],
    restrictions: "Introducir frutas crudas gradualmente. Evitar frutas muy ácidas o con mucha fibra."
  }
}

export const FOOD_CATEGORIES = [
  "Carnes",
  "Vegetales", 
  "Frutas",
  "Fermentados",
  "Grasas",
  "Frutos secos",
  "Semillas",
  "Condimentos",
  "Endulzantes",
  "Suplementos",
  "Bebidas",
  "Preparados"
]

export const COMMON_INTOLERANCES = {
  histamina: "Evitar alimentos fermentados, tomates, aguacate muy maduro",
  oxalatos: "Limitar espinacas, acelgas, frutos secos",
  salicilatos: "Evitar la mayoría de frutas y especias",
  fodmaps: "Limitar cebolla, ajo, manzanas, peras"
}