import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorMode = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleColorMode = () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const colorMode = useMemo(
        () => ({
            toggleColorMode,
        }),
        []
    );

    // Update the theme only if the mode changes
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#157342',
                    },
                    secondary: {
                        main: '#ff9800',
                    },
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};
