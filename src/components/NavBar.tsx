import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FortIcon from '@mui/icons-material/Fort';
import MenuIcon from '@mui/icons-material/Menu';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Badge, Tooltip, Typography, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { BarContext } from '../context/BarContext';
import { drawerWidth } from './App';
import { ColorModeContext } from './ColorMode';
import { defaultSettings } from './defaultSettings';

export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    toggleDrawer?: () => void;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.grey[900],
    color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300],
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const NavBar = ({ open, toggleDrawer, toggleDarkMode }) => {
    const theme = useTheme();
    const location = useLocation();
    const colorMode = useContext(ColorModeContext);
    const { bar } = useContext(BarContext);

    useEffect(() => {
        if (bar.setSettings && !bar.settings?.isLoaded) {
            bar.setSettings(defaultSettings);
        }
    }, [bar.setSettings, bar.settings]);

    const toggleMode = () => {
        // Trench => Original
        if (bar.settings?.isTrenchMode) {
            bar.setSettings({
                ...bar.settings,
                isTrenchMode: false,
                drinkingMode: 'Original',
                nextDrinkingMode: 'Garrison',
            });
            // Garrison => Trench
        } else if (bar.settings?.isGarrisonMode) {
            bar.setSettings({
                ...bar.settings,
                isGarrisonMode: false,
                isTrenchMode: true,
                drinkingMode: 'Trench',
                nextDrinkingMode: 'Original',
            });
            // Original => Garrison
        } else {
            bar.setSettings({
                ...bar.settings,
                isGarrisonMode: true,
                isTrenchMode: false,
                drinkingMode: 'Garrison',
                nextDrinkingMode: 'Trench',
            });
        }
    };

    return (
        <AppBar position='absolute' open={open}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='open drawer'
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}>
                    <MenuIcon />
                </IconButton>
                <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
                    {location.pathname === '/' ? 'Home' : null}
                    {location.pathname.startsWith('/cocktail') ? location.state.cocktail.name : null}
                    {location.pathname.startsWith('/menu') ? location.state.menu.name : null}
                </Typography>
                <Tooltip title={`${bar.settings.drinkingMode} Mode`}>
                    <IconButton color='inherit' onClick={toggleMode}>
                        {bar.settings?.isTrenchMode ? <MilitaryTechIcon /> : null}
                        {bar.settings?.isGarrisonMode ? <FortIcon /> : null}
                        {!bar.settings?.isTrenchMode && !bar.settings?.isGarrisonMode ? <VerifiedIcon /> : null}
                    </IconButton>
                </Tooltip>
                <Tooltip title={`${theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.slice(1)} Mode`}>
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Tooltip>
                <IconButton color='inherit'>
                    <Badge badgeContent={4} color='secondary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
