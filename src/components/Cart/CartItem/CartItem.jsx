import React from 'react';
import {Typography, Button, Card, CardActions, CardContent, CardMedia, IconButton} from '@material-ui/core';

import useStyles from './styles';
import {AddShoppingCart} from "@material-ui/icons";

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();

    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <Card className="cart-item">
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small"
                            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small"
                            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary"
                        onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    );
};
/*<Card className={classes.root}>
    <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
    <CardContent>
        <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
                ${product.price.formatted}
            </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"
                    color="textSecondary" component="p"/>
    </CardContent>
    <CardActions disableSpacing className={classes.cardActions}>
        {console.log(product.categories.some(item => item.slug === 'sustainable'))}
        {product.categories.some(item => item.slug === 'sustainable') ? renderBanner() : null}
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart />
        </IconButton>
    </CardActions>
</Card>*/


export default CartItem;
