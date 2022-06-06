import { Cocktail, Ingredient, Settings, Menu } from "./interfaces";

export const expandCocktails = (cocktails: Cocktail[], ingredients: Ingredient[], settings: Settings): Cocktail[] => {
    if (!cocktails.length > 0 || !ingredients.length > 0 || !settings?.isLoaded) return [];
    return cocktails.map(cocktail => {
        const _recipe = cocktail.recipe.map(recipeItem => {
            const _ingredient = ingredients.find(i => i.id === recipeItem.id);
            if (settings.isTrenchMode) {
                const grandparent = ingredients.find(i => i.id === _ingredient.grandparent);
                if (grandparent) {
                    return {
                        ...recipeItem,
                        ingredient: grandparent,
                    };
                }
                const parent = ingredients.find(i => i.id === _ingredient.parent);
                if (parent) {
                    return {
                        ...recipeItem,
                        ingredient: parent,
                    };
                }                
                return {
                    ...recipeItem,
                    ingredient: _ingredient,
                };
            } else {
                return {
                    ...recipeItem,
                    ingredient: ingredients.find(i => i.id === recipeItem.id),
                };
            }
        });

        return {
            ...cocktail,
            recipe: _recipe,
        };
    });
};

/**
 * Returns the cocktail with the given id.
 */
export const id2cocktail = (id: number, cocktails: Cocktail[], ingredients: Ingredient[], settings: Settings): Cocktail => {
    if (!id || !cocktails.length > 0 || !ingredients.length > 0) return null;
    const cocktail = cocktails.find(cocktail => cocktail.id === id);
    return expandCocktails([cocktail], ingredients, settings)[0];
};

/**
 * Finds the menu object whose slug matches the given slug and returns it
 * with the cocktail ids converted into cocktail objects.
 */
export const slug2menu = (
    slug: string,
    menus: Menu[],
    cocktails: Cocktails[],
    ingredients: Ingredient[],
    settings: Settings
): Menu => {
    if (!slug || !menus?.length > 0 || !cocktails?.length > 0, || !ingredients?.length > 0 || !settings?.isLoaded) return null;
    const menu = menus.find(menu => menu.slug === slug);
    const menuCocktails = expandCocktails(ids2Cocktails(menu.cocktailIds, cocktails), ingredients, settings);
    menu.cocktails = menuCocktails;
    return menu;
};

/**
 * Returns all the cocktails whose id was found in the array of ids.
 */
export const ids2Cocktails = (ids: number[], cocktails: Cocktail[]): Cocktail[] => {
    if (!ids.length > 0 || !cocktails) return [];
    return cocktails.filter(cocktail => ids.includes(cocktail.id));
};
