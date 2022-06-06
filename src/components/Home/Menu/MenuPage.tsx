import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { BarContext } from '../../../context/BarContext';
import { Cocktail } from '../../../lib/interfaces';
import { slug2menu } from '../../../lib/lib';
import CocktailCard from '../Dashboard/CocktailCard';

export const MenuPage = () => {
    const location = useLocation();
    const { bar } = useContext(BarContext);
    const [cocktails, setCocktails] = useState([] as Cocktail[]);

    useEffect(() => {
        console.log(bar.settings);
        const _menu = slug2menu(location.state.menu.slug, bar.menus, bar.cocktails, bar.ingredients, bar.settings);
        if (_menu?.cocktails.length > 0) {
            setCocktails(_menu.cocktails);
        }
    }, [bar.cocktails, bar.menus, bar.ingredients, bar.settings, location.state?.menu]);

    return (
        <Container maxWidth='xxl' sx={{ mt: 4, mb: 10 }}>
            <Grid container spacing={3}>
                {cocktails.map((cocktail, index) => (
                    <CocktailCard key={index} cocktail={cocktail} />
                ))}
            </Grid>
        </Container>
    );
};

export default MenuPage;
