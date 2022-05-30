import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getLoginUser,
  getRegisterUser,
  getUserNameValue,
  userToggleButton,
} from '../features/user/userSlice'
import { FormRow } from '../components'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginRegister = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { name, email, password, isMember, isLoading, existingUser, isSignIn } =
    useSelector((state) => state.user)

  // handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password || (!isMember && !name)) {
      toast.warn('Please fill in all details..', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
    if (isMember) {
      dispatch(getLoginUser({ email, password }))
      return
    }
    return dispatch(getRegisterUser({ name, email, password }))
  }

  // handleChange

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getUserNameValue({ name, value }))
  }

  // handleButton
  const handleButton = () => {
    dispatch(userToggleButton())
  }

  useEffect(() => {
    if (isSignIn) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
      return
    }
  }, [isSignIn])
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='title'>{isMember ? 'Login' : 'Register'}</h3>
        {/* name input */}
        {!isMember && (
          <FormRow
            className='form-input'
            type='text'
            name='name'
            id='name'
            value={name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          className='form-input'
          type='email'
          name='email'
          id='email'
          value={email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          className='form-input'
          type='password'
          name='password'
          id='password'
          value={password}
          handleChange={handleChange}
        />
        <button disabled={isLoading} type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {isMember ? 'Are you register yet ? ' : 'Are you a member ?'}{' '}
          <button onClick={handleButton} className='toggle-btn' type='button'>
            {isMember ? 'Register..' : 'Login...'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .toggle-btn {
    background-color: transparent;
    border: transparent;
    color: var(--primary-5);
    cursor: pointer;
  }
`
export default LoginRegister
