export interface Cocktail {
    id: number;
    name: string;
    description: string;
    image: string;
    recipe: RecipeItem[];
}
interface RecipeItem {
    id: number;
    quantity: number;
    unit: string;
    ingredient?: Ingredient;
}
export interface Menu {
    id: number;
    name: string;
    slug: string;
    cocktailIds: number[];
    cocktails?: Cocktail[];
}
export interface Ingredient {
    id: number;
    name: string;
    description: string;
    country: string;
    flavors: string[];
    price: number;
    parent: number;
    grandparent: number;
    garnish: boolean;
}
export interface Settings {
    isLoaded: boolean;
    units: 'oz' | 'ml' | 'fun';
    isTrenchMode: boolean;
    isGarrisonMode: boolean;
}
