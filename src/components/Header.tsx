import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Header: React.FC<{}> = () => {
    return (
        <Grid container sx={{ borderBottom: 2, borderColor: 'text.secondary' }}>
            <Grid item md>
            </Grid>
            <Grid item md={9}>
            <Typography variant="h4" component="div" gutterBottom>
                Coding Challenge
            </Typography>
            </Grid>
            <Grid item md>
            </Grid>
        </Grid>
    );
};

export default Header;
