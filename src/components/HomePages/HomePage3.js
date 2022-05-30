import React from 'react'
import styled from 'styled-components'

const HomePage3 = () => {
  return (
    <Wrapper className='fixed-bg'>
      <hr />
      <div className='main-container '>
        <div className='center'>
          <p style={{ color: 'white' }}>Code is Art</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-container {
    display: grid;
    .center {
      place-self: center;
      margin-top: 50%;
      margin-bottom: 50%;
      border: 5px double var(--white);
      padding: 1rem;
    }
  }
`

export default HomePage3
