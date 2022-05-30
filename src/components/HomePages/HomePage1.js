import React from 'react'
import styled from 'styled-components'
import svg from '../../images/homeResume.svg'

const HomePage1 = () => {
  return (
    <Wrapper className='section'>
      <div className='box box-1 '>
        <h4 className='title'>
          welcome <span className='cs'>/ Home</span>
        </h4>
        <div className='title-underline'></div>
        <p>
          Thank you for coming to my site,I like you to explore all parts of
          this sites and experience most advance technology used to write this
          site..
        </p>
      </div>
      <div className='box-2'>
        <img src={svg} alt='' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .box-1 {
    display: flex;
    place-items: center;
    display: block;
    p {
      padding: 0 2rem;
    }
    @media (min-width: 768px) {
      margin-top: 7rem;
    }
  }
  .box-2 {
    display: grid;
    place-items: center;

    img {
      max-width: 300px;
    }
    @media (min-width: 768px) {
      margin-top: 7rem;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .cs {
    color: var(--primary-5);
  }
`

export default HomePage1
