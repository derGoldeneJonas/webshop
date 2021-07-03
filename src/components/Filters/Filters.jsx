import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {commerce} from "../../lib/commerce";
import Button from "@material-ui/core/Button";

const Filters = ({filterProducts}) => {
    const drawerWidth = 190;
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            top:'8%',
        },
        drawerContainer: {
            overflow: 'hidden',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }));
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const classes = useStyles();
    const handleFilterProducts = () => filterProducts();

    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <div className="row">
                        <Button onClick={handleFilterProducts}>Test</Button>
                        <div className="col-2 d-none d-lg-block position-relative"><p
                            className="font-size-title font-weight-medium mb-3">Type</p>
                            <div className="mb-5">
                                <div className="d-flex"><p
                                    className="mb-2 position-relative cursor-pointer">Men</p></div>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className="row">
                        <div className="col-2 d-none d-lg-block position-relative"><p
                            className="font-size-title font-weight-medium mb-3">Size</p>
                            <div className="mb-5">
                                <div className="d-flex"><p
                                    className="mb-2 position-relative cursor-pointer">S</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Filters;


/*    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const mobileMenuId = 'primary-search-account-menu-mobile';

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal');
    });


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };*/
