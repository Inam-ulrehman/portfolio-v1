import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchJob } from '../../utils/axios'
const initialState = {
  isLoading: false,
  position: '',
  company: '',
  location: '',
  jobType: 'full-time',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  status: 'interview',
  statusOptions: ['interview', 'declined', 'pending'],
  jobs: [],
  totalJobs: '',
  numOfPages: '',
  isModalOpen: false,
  jobDeleteId: null,
}
// Axios hold === AddJobs ==== METHOD === POST

export const getAddJobs = createAsyncThunk(
  'job/getAddJobs',
  async (addJobs, thunkAPI) => {
    try {
      const resp = await customFetchJob.post('/jobs', addJobs, {
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

// Axios === GetJOB ==== METHOD === GET

export const getAllJobs = createAsyncThunk(
  'job/getAllJobs',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetchJob.get('/jobs', {
        headers: {
          authorization: `Bearer ${
            thunkAPI.getState().user.existingUser.token
          }`,
        },
      })
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// Axios === deleteJob ==== Method ==== Delete

export const deleteJob = createAsyncThunk(
  'job/deleteJob',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetchJob.delete(
        `/jobs/${thunkAPI.getState().job.jobDeleteId}`,
        {
          headers: {
            authorization: `Bearer ${
              thunkAPI.getState().user.existingUser.token
            }`,
          },
        }
      )
      return resp.data.msg
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    jobHandleChangeValue: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    modalOpen: (state) => {
      state.isModalOpen = true
    },
    modalClose: (state) => {
      state.isModalOpen = false
    },
    jobDeleteId: (state, { payload }) => {
      console.log(payload)
      state.jobDeleteId = payload
    },
  },
  extraReducers: {
    [getAddJobs.pending]: (state) => {
      state.isLoading = true
    },
    [getAddJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success(payload, {
        position: toast.POSITION.TOP_CENTER,
      })
      state.position = ''
      state.company = ''
      state.location = ''
    },
    [getAddJobs.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.warn(payload)
    },
    [getAllJobs.pending]: (state) => {
      state.isLoading = true
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      const { jobs, totalJobs, numOfPages } = payload
      state.jobs = jobs
      state.totalJobs = totalJobs
      state.numOfPages = numOfPages
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [deleteJob.pending]: (state) => {
      state.isLoading = true
    },
    [deleteJob.fulfilled]: (state, { payload }) => {
      state.isLoading = true
      toast.success(payload, {
        position: toast.POSITION.TOP_CENTER,
      })
    },
    [deleteJob.pending]: (state) => {
      state.isLoading = true
    },
  },
})
export const { jobHandleChangeValue, modalOpen, modalClose, jobDeleteId } =
  jobSlice.actions
export default jobSlice.reducer
