import { Container } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { Error, Product} from '../../components';
const ProductPage = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({})
    const [error, setError] = useState('')
    console.log(id);

     /// get PRODUCT from api
  useEffect(() => {
    createAPIEndpoint(ENDPIONTS.ALLPRODUCTS).fetchById(id)
      .then(res => {
        setProduct(res.data)
      }).catch(err => setError(err))
  }, [])

    return (
        <Container>
          <ToastContainer />
                  <h1 className='custom-header'>Product Page</h1>
           <Product product={product} description={product.description} key={product.id} />
            {error && <Error />}
        </Container>
    )
}

export default ProductPage
