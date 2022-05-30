import React from 'react'
import styled from 'styled-components'
import { HomePage1, HomePage2, HomePage3 } from '../components/HomePages'

const Home = () => {
  return (
    <Wrapper className='main-container'>
      <div className='box box1'>
        <HomePage1 />
      </div>
      <div className='box box2'>
        <HomePage2 />
      </div>
      <div className='box box3'>
        <HomePage3 />
      </div>
      <div className='box box4'>
        <h1>4</h1>
      </div>
      <div className='box box5'>
        <h1>5</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--grey-1);
  padding-left: 10px;
  padding-right: 10px;
  .box1 {
    height: calc((100vh) - 80px);
  }
  .box2 {
    height: 100vh;
  }
  .box3 {
    height: 100vh;
  }
  .box4 {
    height: 100vh;
  }
  .box5 {
    height: 100vh;
  }
`
export default Home
