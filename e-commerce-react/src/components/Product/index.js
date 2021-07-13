import { useDispatchCart } from '../../context/CartState'
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { Box, Button, Typography } from '@material-ui/core';
import {  toast } from 'react-toastify';
import styles from './product.module.scss'
import { Link, useHistory } from "react-router-dom";

function Product({ product, description }) {
  const dispatch = useDispatchCart()
  const history = useHistory();
  console.log();

  const handleAddToCart = (product) => {
    createAPIEndpoint(ENDPIONTS.CART).create(product)
      .then(res => {
        // setCart(res.data)
        dispatch({
          type: 'ADD_TO_CART',
          payload: product
        })
        if (res.status == 201) {
          console.log('ichta')
        }
        toast.success('One product has been successfully added.', { autoClose: 2000 })
      }).catch(res => {
        toast.info('This product in cart already.', {  autoClose: false, position: "top-center", })
      })
  }

  return (
    <>
      
      <Box p={2} className={styles.productContainer} >
        {
          history.location.pathname == '/' && <Link to={`/${product.id}`} class={styles.moreDetails}>
            More Details
          </Link>
        }
        <Box  >
          <img src={product.image} width={300} style={{ display: 'flex', margin: "auto" }} height={400} />
          <Typography color="textSecondary" variant="caption">{description}</Typography>
        </Box>
        <Typography color="primary" variant="h6">{product.title}</Typography>
        <Typography variant="body1">{product.category}</Typography>
        <Box display="flex" mt={4} alignItems="center" justifyContent="space-between">
          <Typography color="primary" variant="body1">$ {product.price} </Typography>
          <Typography variant="body1">Available quantity - {product.availbleQTY} items</Typography>
        </Box>
        <Box display="flex" mt={4} alignItems="center" justifyContent="center">
          <Button onClick={() => handleAddToCart(product)} variant="contained" color="primary">
            Add To Cart
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Product;
