import React, { useState, useEffect } from 'react'
import { useCart } from '../../context/CartState';
import { Container, Grid, Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';
import { CartComponent } from '../../components';
import Modal from '../../controlls/Modal'
const Cart = () => {
    const cart = useCart();
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let totalArray = []
        cart.cartItems.forEach((item) => {
            totalArray.push(item.price * item.quantity)
        })
        var totalQuantitySum = totalArray.reduce(function (a, b) {
            return a + b
        }, 0);
        setTotalPrice(totalQuantitySum)
    }, [cart])

    // console.log("id", ...cart.cartItems.map(crt => crt.id));

    return (
        <Container>
            <ToastContainer />
            <h1 className="custom-header">Cart page</h1>
            <Box display="flex" textAlign="center" mx="auto" justifyContent="center">
                {cart.cartItems.length === 0 && <Box my="10rem" >
                <Typography variant="h3" color="primary">
                    Your Card is Empty Now <Link to="/">Go to Home</Link>
                </Typography>
                </Box>}
            </Box>
            <Grid container  justifyContent="center" spacing={5}>
                {cart.cartItems.length > 0 && cart.cartItems.map(crt => (
                    <CartComponent crt={crt} id={crt.id} />
                ))}
            </Grid>
            {cart.cartItems.length > 0 &&<Box display="flex" flexDirection="column" justifyContent="center" textAlign="center"  mx="auto" my="3rem">
                  <Box display="flex" alignItems="center" justifyContent="center"  my="2rem"  >
                    <Typography variant="h4">
                        Total Price =
                    </Typography>
                    <Typography variant="h3" color="primary">
                        $ {totalPrice.toFixed(2)}
                    </Typography>
                  </Box>
                  <Modal ids={cart.cartItems.map(crt => crt.id)} modalText={`Total Price = $ ${totalPrice.toFixed(2)}`} />
               </Box>
            }
        </Container>
    )
}

export default Cart

