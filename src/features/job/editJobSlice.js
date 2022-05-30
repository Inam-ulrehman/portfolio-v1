import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchJob } from '../../utils/axios'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobType: 'full-time',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  status: 'interview',
  statusOptions: ['interview', 'declined', 'pending'],
  id: null,
}

// axios === hold === editJob === Method === patch

export const getEditJob = createAsyncThunk(
  'job/getEditJob',
  async (user, thunkAPI) => {
    const { id, company, jobLocation, jobType, position, status } = user
    const ids = id
    const newUser = { company, jobLocation, jobType, position, status }
    try {
      const resp = await customFetchJob.patch(`/jobs/${ids}`, newUser, {
        headers: {
          authorization: `Bearer ${
            thunkAPI.getState().user.existingUser.token
          }`,
        },
      })
      return resp.statusText
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const editJobSlice = createSlice({
  name: 'editJob',
  initialState,
  reducers: {
    getEditId: (state, { payload }) => {
      console.log(payload)
      state.position = payload.position
      state.company = payload.company
      state.jobLocation = payload.jobLocation
      state.id = payload.id
    },
    getEditValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
  },
  extraReducers: {
    [getEditJob.pending]: (state) => {
      state.isLoading = true
    },
    [getEditJob.fulfilled]: (state) => {
      state.isLoading = true
      toast.success('Details updated')
    },
    [getEditJob.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const { getEditId, getEditValues } = editJobSlice.actions

export default editJobSlice.reducer
