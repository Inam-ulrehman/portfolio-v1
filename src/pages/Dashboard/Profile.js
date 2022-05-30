import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { FormRow } from '../../components'
import {
  getUpdateUser,
  getUserProfileValue,
} from '../../features/user/userSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const { existingUser } = useSelector((state) => state.user)

  // handleSubmit
  const handleSubmit = (e) => {
    const { name, email, lastName, location } = existingUser
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      toast.warn('Please provide all details...', {
        position: toast.POSITION.TOP_LEFT,
      })
      return
    }

    return dispatch(getUpdateUser({ name, email, lastName, location }))
  }

  // handleChange
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getUserProfileValue({ name, value }))
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        {/* name input */}
        <FormRow
          type='text'
          name='name'
          id='name'
          value={existingUser?.name || ''}
          handleChange={handleChange}
        />

        {/* lastName input */}
        <FormRow
          labelText='last name'
          type='text'
          name='lastName'
          id='lastName'
          value={existingUser?.lastName || ''}
          handleChange={handleChange}
        />
        {/* email input */}
        <FormRow
          type='email'
          name='email'
          id='email'
          value={existingUser?.email || ''}
          handleChange={handleChange}
        />
        {/* location input */}
        <FormRow
          type='text'
          name='location'
          id='location'
          value={existingUser?.location || ''}
          handleChange={handleChange}
        />
        <button className='btn btn-block'>Update profile</button>
      </form>
    </div>
  )
}

export default Profile
