
import { useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { Container, Box, Button } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import Masonry from 'react-masonry-css'
import {Product, Error} from '../../components';
import styles from './products.module.scss'
import Spinner from '../../controlls/Spinner';

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [productsToShow, setProductsToShow] = useState([])
  const [showAllProducts, setShowAllProducts] = useState(false)
  /// get ALL PRODUCTS from api
  useEffect(() => {
    createAPIEndpoint(ENDPIONTS.ALLPRODUCTS).fetchAll()
      .then(res => {
        setProducts(res.data);
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
      } )
  }, [])

  const showProducts = () => {
    if (showAllProducts) {
      setProductsToShow(products.slice(0, 8))
        setShowAllProducts(!showAllProducts)
    } else {
      setProductsToShow([...productsToShow, ...products.slice(8)])
      setShowAllProducts(!showAllProducts)
    }
}
useEffect(() => {
  setProductsToShow(products.slice(0, 8))
}, [products])

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }
  return (
    <>
      <Container>
        <h1 className='custom-header'>All Products Page</h1>
        <ToastContainer />
        {loading && <Spinner />}
        <Masonry breakpointCols={breakpoints}
          className={styles.my_masonry_grid}
          columnClassName={styles.my_masonry_grid_column}>
          {productsToShow.map(product => (
                <Product  product={product} key={product.id} />
          ))}
        </Masonry>
       {productsToShow.length > 0 && <Box m={6} textAlign="center">
                    <Button variant="contained" color="secondary" size="large" onClick={showProducts}>
                        view {showAllProducts ? ' less' : ' more'}
                    </Button>
                </Box>}
        {error && <Error />}
      </Container>
    </>
  );
}

export default ProductsPage;
