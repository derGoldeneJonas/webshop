import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';
import Chip from "@material-ui/core/Chip";
import EcoIcon from '@material-ui/icons/Eco';

const Product = ({product, onAddToCart}) => {
    const classes = useStyles();

    const handleAddToCart = () => onAddToCart(product.id, 1);

    /* <Buton aria-label="Add to Cart" onClick={handleAddToCart}>
                    <AddShoppingCart/>
                    Add to Cart
                </Buton>*/
    return (
        <Card className={classes.root}>
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
                <Chip icon={<EcoIcon />}  label="Sustainable"/>
                <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<AddShoppingCart />}
                    onClick={handleAddToCart}
                 >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default Product;

