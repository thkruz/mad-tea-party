import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export const Copyright = () => (
    <Box
        sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            width: '100%',
            padding: '1rem 0',
            backgroundColor: 'white',
            boxShadow: '0 -3px 0 1 rgba(0,0,0,0.12)',
        }}>
        <Typography variant='body2' color='textSecondary' align='center'>
            Copyright © {new Date().getFullYear()} Theodore Kruczek
        </Typography>
    </Box>
);
