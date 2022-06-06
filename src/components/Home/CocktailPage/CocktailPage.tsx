import { Grid, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BarContext } from '../../../context/BarContext';
import { id2cocktail } from '../../../lib/lib';
import { Cocktail } from './../../../lib/interfaces';

export const CocktailPage = () => {
    const { id } = useParams();
    const { bar } = useContext(BarContext);
    const [cocktail, setCocktail] = useState(null as Cocktail);

    useEffect(() => {
        const _cocktail = id2cocktail(parseInt(id), bar.cocktails, bar.ingredients, bar.settings);
        setCocktail(_cocktail);
    }, [id, bar.cocktails, bar.ingredients, bar.settings]);

    return (
        <Container maxWidth='xxl' sx={{ mt: 4, mb: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant='h3' m={1}>
                            {cocktail?.name}
                        </Typography>
                        <Typography variant='h4' m={1} sx={{ textDecoration: 'underline' }}>
                            Story
                        </Typography>
                        <Typography variant='body1' m={1}>
                            {cocktail?.description}
                        </Typography>
                        <Typography variant='h4' m={1} sx={{ textDecoration: 'underline' }}>
                            Ingredients
                        </Typography>
                        {cocktail?.recipe?.map((recipeItem, index) => {
                            console.log(bar);
                            if (recipeItem.unit === 'oz' && bar.settings?.units === 'ml') {
                                recipeItem.amount = (recipeItem.amount * 29.57).toFixed(2);
                                recipeItem.unit = 'ml';
                            }

                            return (
                                <Typography variant='body1' m={1} key={index}>
                                    {recipeItem.quantity} {recipeItem.unit} {recipeItem.ingredient?.name}
                                </Typography>
                            );
                        })}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{ p: 3 }}>
                        <img src={cocktail?.image} alt={cocktail?.name} style={{ width: '100%', height: '100%' }} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CocktailPage;
