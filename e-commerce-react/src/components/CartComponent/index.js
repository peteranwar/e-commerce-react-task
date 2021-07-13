import React, { useState, useEffect } from 'react'
import { useCart, useDispatchCart } from '../../context/CartState';
import { Grid} from '@material-ui/core';
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { toast } from 'react-toastify';
import styles from './cart.module.scss'

const CartComponent = ({ crt }) => {
    const cart = useCart();
    const dispatch = useDispatchCart()
    const [availQuantity, NotAvalQuantity] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    const handleRemoveFromCart = (cartId) => {
        createAPIEndpoint(ENDPIONTS.CART).delete(cartId)
        dispatch({
            type: 'REMOVE_ITEM',
            payload: cartId
        })
    }

    //  increment cart number 
    const handleInc = (crt) => {
        if (crt.quantity < crt.availbleQTY) {
            const newCartData = [...cart.cartItems]
            newCartData.forEach(item => {
                if (item.id === crt.id) item.quantity += 1
            })
            createAPIEndpoint(ENDPIONTS.CART).update(crt.id, crt)
            dispatch({
                type: 'INCREMENT_ITEM',
                payload: newCartData
            })
        } else {
            toast.info(`Available Quantity only ${crt.availbleQTY} items.`, { autoClose: 10000, position: "top-center", })
        }
    }

    // Decrement car number 
    const handleDec = (crt) => {
        if (crt.quantity === 1) {
            handleRemoveFromCart(crt.id)
        } else {
            const newCartData = [...cart.cartItems]
            newCartData.forEach(item => {
                if (item.id === crt.id) item.quantity--
            })
            createAPIEndpoint(ENDPIONTS.CART).update(crt.id, crt)
            dispatch({
                type: 'DECREMENT_ITEM',
                payload: newCartData
            })
        }
    }



    useEffect(() => {
        let totalArray = []
        cart.cartItems.forEach((item) => {
            totalArray.push(item.price * item.quantity)
        })
        var totalQuantitySum = totalArray.reduce(function (a, b) {
            return a + b
        }, 0);
        setTotalPrice(totalQuantitySum)
        console.log(totalQuantitySum)
    }, [cart])

    return (
        <Grid style={{width: '100%'}}  item md={8} sm={12} >
            <div className={styles.cartContainer}>
                <div className={styles.prodcutImage}>
                    <img src={crt.image} alt={crt.title} />
                </div>
                <div className={styles.cartContent}>
                    <h5 color="primary" className={styles.productTitle} >{crt.title}</h5>
                    <div className={styles.productDetails}>
                        <p>$ {crt.price} </p>
                        <p>Available quantity - {crt.availbleQTY} items</p>
                        <p className={styles.totalPrice}> price: {crt.price * crt.quantity} </p>
                    </div>
                    <div className={styles.productBottom}>
                        <div className={styles.productEdit}>
                            <button class="app-btn light" onClick={() => handleInc(crt)}> + </button>
                            <p>{crt.quantity}</p>
                            <button class="app-btn light" onClick={() => handleDec(crt)}>- </button>
                        </div>
                        <div>
                            <button class={styles.remove} onClick={() => handleRemoveFromCart(crt.id)}  >
                                Remove From Cart
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </Grid>

    )
}

export default CartComponent

