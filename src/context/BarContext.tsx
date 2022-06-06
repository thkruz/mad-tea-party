import { createContext, useEffect, useState } from 'react';
import { Cocktail, Ingredient, Menu, Settings } from '../lib/interfaces';

export const BarContext = createContext({
    bar: {
        settings: {} as Settings,
        cocktails: [] as Cocktail[],
        ingredients: [] as Ingredient[],
        menus: [] as Menu[],
        setMenus: () => {},
        setSettings: () => {},
        setCocktails: () => {},
        setIngredients: () => {},
    },
});

export const Bar = ({ children }) => {
    const [cocktails, setCocktails] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [menus, setMenus] = useState([]);
    const [settings, setSettings] = useState({});

    const bar = {
        cocktails,
        setCocktails,
        ingredients,
        setIngredients,
        menus,
        setMenus,
        settings,
        setSettings,
    };

    useEffect(() => {
        fetch('/data/cocktails.json')
            .then(res => res.json())
            .then(data => {
                setCocktails(data);
            })
            .catch(err => console.log(err));
        fetch('/data/ingredients.json')
            .then(res => res.json())
            .then(data => {
                setIngredients(data);
            })
            .catch(err => console.log(err));
    }, []);

    return <BarContext.Provider value={{ bar }}>{children}</BarContext.Provider>;
};
