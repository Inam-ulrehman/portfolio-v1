import { React, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { userLogeOutButton } from '../features/user/userSlice'
import { AiFillCaretDown } from 'react-icons/ai'

import { toggleProfileOpenButton } from '../features/home/components/homSlice'

const NavBar = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => {
    return state.user
  })
  const { isSignIn } = user

  //  handle LogeOut Button
  const handleButton = () => {
    dispatch(userLogeOutButton())
  }
  useEffect(() => {}, [])
  return (
    <Wrapper>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        {isSignIn && (
          <NavLink onClick={handleButton} to='/'>
            LogOut
          </NavLink>
        )}
        {!isSignIn && <NavLink to='/login'>Login/Register</NavLink>}
      </div>

      <Link
        onClick={() => dispatch(toggleProfileOpenButton())}
        className='btn'
        to='/dashboard'
      >
        Dashboard <AiFillCaretDown />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: var(--primary-1);
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  a {
    margin-right: 1rem;
  }
  .btn {
    padding: 0px 6px;
  }
`

export default NavBar
