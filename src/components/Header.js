import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar color={'primary'} position={'sticky'}>
            <Toolbar>
                <Typography color={'inherit'} component={Link} to={'/'} variant={'h5'}>
                    {'Forum'}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;