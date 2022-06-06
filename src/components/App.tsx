import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Bar } from './../context/BarContext';
import { ColorMode } from './ColorMode';
import { Copyright } from './Copyright';
import { Drawer } from './Drawer';
import CocktailPage from './Home/CocktailPage/CocktailPage';
import { Home } from './Home/Home';
import MenuPage from './Home/Menu/MenuPage';
import { MainListItems, SecondaryListItems } from './ListItems';
import { NavBar } from './NavBar';
import NotFound from './NotFound';

export const drawerWidth: number = 240;

export const App = () => {
    const [open, setOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDrawer = () => setOpen(!open);

    return (
        <ColorMode>
            <Bar>
                <BrowserRouter>
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
                                <MainListItems />
                                <Divider sx={{ my: 1 }} />
                                <SecondaryListItems />
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
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/cocktail/:id' element={<CocktailPage />} />
                                <Route path='/menu/:slug' element={<MenuPage />} />
                                <Route path='*' element={<NotFound />} />
                            </Routes>
                        </Box>
                        <Copyright />
                    </Box>
                </BrowserRouter>
            </Bar>
        </ColorMode>
    );
};
