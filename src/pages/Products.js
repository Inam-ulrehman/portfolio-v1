import { React, useEffect } from 'react'
import { getProducts } from '../features/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)

  // useEffect for products

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
      <div className='main-container'>
        <div className='container'>
          {products.map((products) => {
            const { image, category, price, id } = products
            return (
              <div key={id} className='product'>
                <div className='img-container'>
                  <img className='img' src={image} alt={image} />
                </div>
                <div className='footer'>
                  <p>{category}</p>
                  <p>price: {(price / 100) * 2} $</p>
                </div>
                <div className='btn-container'>
                  <Link className='btn btn-block' to={`/products/${id}`}>
                    More info
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    @media (min-width: 1120px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }
  .product {
    max-width: 300px;
    background-color: var(--white);
    margin: 1rem auto;
    box-shadow: var(--shadow-4);
    position: relative;
  }
  .footer {
    display: flex;
    padding: 0 1rem;
    padding-bottom: 10px;
    justify-content: space-between;
    p {
      margin: 0;
    }
  }
`

export default Products
