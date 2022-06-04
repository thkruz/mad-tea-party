import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { useContext, useEffect, useState } from 'react';
import { BarContext } from '../../context/BarContext';
import { Copyright } from '../Copyright';
import CocktailCard from './CocktailCard';
import { Drawer } from './Drawer';
import { mainListItems, secondaryListItems } from './ListItems';
import { NavBar } from './NavBar';

export const drawerWidth: number = 240;

export const Home = () => {
    const [open, setOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const { bar, setBar } = useContext(BarContext);

    useEffect(() => {
        console.log(bar);
        if (bar.test === 'test') {
        } else {
            console.log('not test');
            setBar({ ...bar, ...{ test: 'test' } });
        }
    }, [bar]);

    const toggleDrawer = () => setOpen(!open);

    return (
        <Box
            sx={{
                display: 'flex',
            }}>
            <CssBaseline />
            <NavBar open={open} toggleDrawer={toggleDrawer} />
            <Drawer variant='permanent' open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component='nav'>
                    {mainListItems}
                    <Divider sx={{ my: 1 }} />
                    {secondaryListItems}
                </List>
            </Drawer>
            <Box
                component='main'
                sx={{
                    backgroundColor: theme =>
                        theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}>
                <Toolbar />
                <Container maxWidth='xxl' sx={{ mt: 4, mb: 10 }}>
                    <Grid container spacing={3}>
                        {bar.cocktails?.map((cocktail, index) => (
                            <CocktailCard key={index} cocktail={cocktail} />
                        ))}
                    </Grid>
                </Container>
                <Copyright />
            </Box>
        </Box>
    );
};
