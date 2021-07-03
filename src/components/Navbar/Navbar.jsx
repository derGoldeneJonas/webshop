import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Modal} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../assets/Ernstings_family.png';
import useStyles from './styles';
import FormDialog from "../Modal/FormDialog";
import {Form} from "semantic-ui-react";

const PrimarySearchAppBar = ({totalItems}) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal');
    });


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{vertical: 'top', horizontal: 'right'}} id={mobileMenuId}
              keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}} open={isMobileMenuOpen}
              onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="85px" className={classes.image}/>
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {handleClickOpen}
        </>
    );
};

export default PrimarySearchAppBar;
