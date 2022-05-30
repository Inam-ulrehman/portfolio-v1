import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import JobsHolder from '../../components/JobsHolder'
import { deleteJob, getAllJobs, modalClose } from '../../features/job/jobSlice'

const AllJobs = () => {
  const dispatch = useDispatch()
  const { jobs } = useSelector((state) => {
    return state.job
  })
  const modal = useSelector((state) => state.job.isModalOpen)
  const totalJobs = useSelector((state) => state.job.totalJobs)

  useEffect(() => {
    dispatch(getAllJobs())
  }, [jobs])
  return (
    <Wrapper>
      <h4 className='title'>total jobs: {totalJobs} </h4>
      {modal && (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            top: '0',
            position: 'sticky',
            backgroundColor: 'rgb(0,0,0,0.2)',
            display: 'grid',
            placeItems: 'center',
          }}
          className='warning-container'
        >
          <div
            style={{
              display: 'grid',
              background: 'var(--white)',
              height: '50%',
              width: '50%',
              borderRadius: 'var(--radius)',
              textAlign: 'center',
              placeItems: 'center',
            }}
          >
            <p className='paragraph'>
              Are you sure you want to delete this job ?
              <button
                onClick={() => {
                  dispatch(deleteJob())
                  dispatch(modalClose())
                }}
                className='alert-danger'
              >
                {' '}
                yes
              </button>
              <button
                onClick={() => dispatch(modalClose())}
                className='alert-success'
              >
                no
              </button>
            </p>
          </div>
        </div>
      )}
      <div className='media'>
        {jobs.map((job) => {
          return <JobsHolder key={job._id} {...job} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .media {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1120px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .paragraph {
    display: grid;
    button {
      width: 55px;
      margin: 5px auto;
      border: transparent;
      padding: 6px;
      border-radius: var(--radius);
      transition: var(--transition);
      :hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
`

export default AllJobs
