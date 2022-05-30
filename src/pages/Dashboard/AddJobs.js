import React from 'react'
import styled from 'styled-components'
import FormRow from '../../components/FormRow'
import { useSelector, useDispatch } from 'react-redux'
import { getAddJobs, jobHandleChangeValue } from '../../features/job/jobSlice'
import FormRowSelect from '../../components/FormRowSelect'
import { toast } from 'react-toastify'

const AddJobs = () => {
  const dispatch = useDispatch()
  const {
    isLoading,
    position,
    company,
    location,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useSelector((state) => {
    return state.job
  })
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !location) {
      toast.warn('Please fill in all the fields.')
      return
    }
    return dispatch(
      getAddJobs({ position, company, location, jobType, status })
    )
  }
  // handleChange

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(jobHandleChangeValue({ name, value }))
  }
  return (
    <Wrapper>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <p className='title'>Add a job to list </p>
          <div
            className='title-underline'
            style={{ marginBottom: '1rem' }}
          ></div>
          <div>
            {/* company input */}
            <FormRow
              type='text'
              name='company'
              id='company'
              value={company}
              handleChange={handleChange}
            />
            {/*location input */}
            <FormRow
              type='text'
              name='location'
              id='location'
              value={location}
              handleChange={handleChange}
            />
            {/* position input */}
            <FormRow
              type='text'
              name='position'
              id='position'
              value={position}
              handleChange={handleChange}
            />
          </div>
          <div>
            {/* status input */}

            <FormRowSelect
              name='status'
              id='status'
              value={status}
              handleChange={handleChange}
              list={statusOptions}
            />

            {/* jobType input */}

            <FormRowSelect
              name='jobType'
              labelText='job type'
              id='jobType'
              value={jobType}
              handleChange={handleChange}
              list={jobTypeOptions}
            />
          </div>
          <button disabled={isLoading} type='submit' className='btn btn-block'>
            Add job
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default AddJobs
