import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { BarContext } from '../context/BarContext';

export const MainListItems = () => {
    const navigate = useNavigate();
    return (
        <>
            <ListItemButton onClick={() => navigate('/')}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary='Inventory' />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary='Patrons' />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary='Reports' />
            </ListItemButton>
        </>
    );
};

export const SecondaryListItems = () => {
    const [cocktailMenus, setCocktailMenus] = useState([]);
    const { bar } = useContext(BarContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (bar.setMenus) {
            fetch('/data/menus.json')
                .then(res => res.json())
                .then(data => {
                    setCocktailMenus(data);
                    bar.setMenus(data);
                });
        }
    }, [bar.setMenus]);

    return (
        <>
            <ListSubheader component='div' inset>
                Cocktail Menus
            </ListSubheader>
            {cocktailMenus.map(menu => (
                <ListItemButton key={menu.id} onClick={() => navigate(`/menu/${menu.slug}`, { state: { menu } })}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary={menu.name} />
                </ListItemButton>
            ))}
        </>
    );
};
