import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const SingleProduct = () => {
  const { productsId } = useParams()
  const { products } = useSelector((state) => state.products)
  const singleProduct = products.find((product) => product.id === productsId)

  const { category, colors, company, description, image, name, price } =
    singleProduct

  return (
    <Wrapper>
      <div className='container'>
        <div className='heading'>
          {' '}
          <h1 className='title'>{name}</h1>
          <div className='title-underline'></div>
        </div>
        <div className='img-info'>
          <div className='imgs-container'>
            <img className='img' src={image} alt={name} />
          </div>
          <div className='info'>
            <p className='title'>Company</p>

            <h4 className='title'>{company}</h4>
            <p>Best product for your '{category}'</p>
            <div>
              <p>price : {(price / 100) * 2} $</p>
              <button className='btn'>Add to cart</button>
            </div>
          </div>
        </div>
        <hr />
        <div className='footer'>
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .img-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 3rem;
  }
  .imgs-container {
    max-width: 300px;
    margin: 0 auto;
  }
  .info {
    p {
      margin: 0px;
    }
    h4 {
      margin: 0px;
    }
  }
`

export default SingleProduct
