import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';


import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import Modal from "@material-ui/core/Modal";

const Cart = ({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/webshop">start adding some</Link>!
        </Typography>
    );

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty}
                                  onRemoveFromCart={onRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained"
                            color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} onClick={handleOpen} size="large"
                            type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    const handleOpen = () => {
        setOpen(true);
    };

    const body = (
        <div className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Test.
            </p>
        </div>
    );

    return (
        <Container>
            <Modal
                open={open}
                disableBackdropClick={true}
                disableEnforceFocus={true}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    );
};

export default Cart;
