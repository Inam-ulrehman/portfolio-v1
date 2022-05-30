import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchUser } from '../../utils/axios'
import {
  addSignInLocalStorage,
  addUserFromLocalStorage,
  getSignInLocalStorage,
  removeSignInLocalStorage,
  removeUserFromLocalStorage,
  setUserInLocalStorage,
} from '../../utils/localStorage'
const data = addUserFromLocalStorage()

const initialState = {
  name: data?.name || '',
  email: data?.email || '',
  password: '',
  location: data?.location || '',
  lastName: data?.lastName || '',
  isMember: true,
  isLoading: false,
  existingUser: addUserFromLocalStorage() || [],
  isSignIn: getSignInLocalStorage() || false,
}

// Axios  ==== RegisterUser === Holder

export const getRegisterUser = createAsyncThunk(
  'user/getRegisterUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUser.post('/auth/register', user)
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
// Axios  ==== LoginUser === Holder

export const getLoginUser = createAsyncThunk(
  'user/getRegisterUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUser.post('/auth/login', user)
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// Axios ==== updateUser ==== Holder
export const getUpdateUser = createAsyncThunk(
  'user/getUpdatedUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUser.patch('auth/updateUser', user, {
        headers: {
          authorization: `Bearer ${
            thunkAPI.getState().user.existingUser.token
          }`,
        },
      })
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserNameValue: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
      return
    },
    getUserProfileValue: (state, { payload }) => {
      const { name, value } = payload
      const { existingUser } = state
      existingUser[name] = value
    },
    userToggleButton: (state) => {
      state.isMember = !state.isMember
      return
    },
    userLogeOutButton: (state) => {
      removeUserFromLocalStorage()
      state.existingUser = []
      state.isSignIn = false
      removeSignInLocalStorage()
    },
  },
  extraReducers: {
    [getRegisterUser.pending]: (state) => {
      state.isLoading = true
    },
    [getRegisterUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.user = payload
      toast.success(`Hello there ${payload.name}`)
      setUserInLocalStorage(payload)
    },
    [getRegisterUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [getLoginUser.pending]: (state) => {
      state.isLoading = true
      state.isSignIn = false
    },
    [getLoginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.user = payload
      state.isSignIn = true
      toast.success(`Welcome back ${payload.name}`)
      setUserInLocalStorage(payload)
      addSignInLocalStorage('true')
      window.location.reload()
    },
    [getLoginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [getUpdateUser.pending]: (state) => {
      state.isLoading = true
    },
    [getUpdateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.existingUser = payload
      setUserInLocalStorage(payload)
      toast.success(`Update Successful ${payload.name}`, {
        position: toast.POSITION.TOP_CENTER,
      })
    },
    [getUpdateUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const {
  getUserNameValue,
  userToggleButton,
  userLogeOutButton,
  getUserProfileValue,
} = userSlice.actions

export default userSlice.reducer
