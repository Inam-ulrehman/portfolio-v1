import { React, useState } from 'react'

import styled from 'styled-components'
import image from '../../images/profile.jpeg'

import {
  AiFillFacebook,
  AiFillPhone,
  AiFillMail,
  AiOutlineGithub,
} from 'react-icons/ai'

const initialState = {
  isMobileOpen: false,
  isMailOpen: false,
}
const HomePage2 = () => {
  const [values, setValues] = useState(initialState)

  // handleMailButton
  const handleMailButton = () => {
    setValues({ ...values, isMailOpen: !values.isMailOpen })
  }
  // handleMailButton
  const handleMobileButton = () => {
    setValues({ ...values, isMobileOpen: !values.isMobileOpen })
  }
  return (
    <Wrapper>
      <hr />
      <div className='container'>
        <h4 className='title cs2'>
          Computer <span className='cs3'>/ Science </span>
        </h4>
        <div className='cart'>
          <div className='image'>
            <img src={image} alt='' />
          </div>
          <p className='title name'>Inam ul Rehman</p>
          <div className='title-underline'></div>
          <div className='icon'>
            <a
              className='icon-a'
              href='https://facebook.com'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillFacebook />
            </a>
            <a
              className='icon-a '
              href='https://github.com/Inam-ulrehman'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineGithub />
            </a>
            <button onClick={handleMailButton} className='icon-a styleButton'>
              <AiFillMail />
            </button>
            <button
              className='icon-a styleButton '
              onClick={handleMobileButton}
            >
              <AiFillPhone />
            </button>
          </div>
          {values.isMailOpen && <p className='title'>Inam6530@hotmail.com</p>}
          {values.isMobileOpen && <p className='title'>4165606790</p>}
          <p className='title vision'>vision to help you archive your goals</p>
        </div>
        <div className='information'>
          <h4 className='title '>
            Computer <span className='cs1'>/ Science </span>
          </h4>
          <p>
            I enjoy working around technologies and learn more about advance
            technologies to upgrade my skills.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    height: 300px;
    width: 350px;

    margin: 0 auto;
  }
  .name {
    margin-top: -2rem;
  }
  .cart {
    position: relative;
    margin: 0 auto;
    height: 300px;
    margin-top: 8rem;
    background-color: var(--primary-1);
    width: 300px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-3);

    .image {
      width: 70px;
      height: 70px;
      margin: 0 auto;
      text-align: center;

      img {
        margin-top: -40px;
        height: 70px;
        width: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  .icon-a {
    margin-left: 2rem;
    font-size: 2rem;
    color: var(--primary-5);
    transition: var(--transition);
    cursor: pointer;
    :hover {
      transform: scale(1.2);
    }
  }
  .styleButton {
    background: transparent;
    border: transparent;
  }
  .vision {
    background: var(--primary-5);
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--white);
    padding: 0.5rem;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .container {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 0;
      height: auto;
      width: auto;
    }
  }
  .information {
    margin-top: 7rem;
  }
  .information {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .cs1 {
    color: var(--primary-5);
  }
  .cs2 {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .cs3 {
    color: var(--primary-5);
  }
`

export default HomePage2
