import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useContext, useEffect, useState } from 'react';
import { BarContext } from '../../context/BarContext';
import { expandCocktails } from '../../lib/lib';
import CocktailCard from './Dashboard/CocktailCard';

export const Home = () => {
    const [cocktails, setCocktails] = useState([]);
    const { bar } = useContext(BarContext);

    useEffect(() => {
        console.log(bar.settings);
        setCocktails(expandCocktails(bar.cocktails, bar.ingredients, bar.settings));
    }, [bar.cocktails, bar.ingredients, bar.settings]);

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
