import { ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CocktailCard = ({ cocktail }) => {
    const [expanded, setExpanded] = useState(false);

    const navigate = useNavigate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Card>
                <CardHeader
                    title={
                        <Typography
                            onClick={() => navigate(`/cocktail/${cocktail.id}`, { state: { cocktail } })}
                            sx={{
                                color: 'inherit',
                                textDecoration: 'inherit',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                            }}>
                            {cocktail.name}
                        </Typography>
                    }
                    sx={{ '& .MuiCardHeader-content': { width: '90%' } }}
                    subheader={cocktail.recipe
                        .map(recipeItem => {
                            return recipeItem.ingredient?.name;
                        })
                        .join(', ')}
                    subheaderTypographyProps={{ textOverflow: 'ellipsis', noWrap: true, width: '100%' }}
                    action={
                        <IconButton aria-label='settings'>
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardMedia component='img' image={cocktail.image} title={cocktail.name} sx={{ height: '300px' }} />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {cocktail.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.
                            Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to
                            8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in
                            the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and
                            remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again
                            without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more.
                            (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
};

export default CocktailCard;
