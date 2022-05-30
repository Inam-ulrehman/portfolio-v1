import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { jobDeleteId, modalOpen } from '../features/job/jobSlice'
import { useDispatch } from 'react-redux'
import { getEditId } from '../features/job/editJobSlice'

import { Link } from 'react-router-dom'

const JobsHolder = ({
  _id: id,
  company,
  createdAt,
  createdBy,
  jobLocation,
  jobType,
  position,
  status,
  updatedAt,
}) => {
  const dispatch = useDispatch()

  // handle handleDelete

  const handleDelete = (id) => {
    dispatch(modalOpen())
    dispatch(jobDeleteId(id))
  }

  const handleEditButton = (id) => {
    dispatch(getEditId(id))
  }
  return (
    <Wrapper>
      <div className='header'>
        <p>Company : {company}</p>
        <p>Location : {jobLocation}</p>
      </div>
      <hr />
      <div className='body'>
        <div>
          <p>position : {position}</p>
          <p
            style={{
              borderLeft: '3px solid var(--primary-5)',
              paddingLeft: '1rem',
            }}
          >
            Type: {jobType}
          </p>
        </div>
        <div className='status-holder'>
          <p>status</p>
          <p className={status}>{status}</p>
        </div>
      </div>
      <div className='footer'>
        <p>Created At: {moment(createdAt).format('MMM Do YY')}</p>
        <p>Created By: {moment(updatedAt).format('MMM Do YY')}</p>
      </div>
      <div className='btn-holder'>
        <Link
          to='/dashboard/edit-jobs'
          onClick={() =>
            handleEditButton({
              id,
              company,
              createdAt,
              createdBy,
              jobLocation,
              jobType,
              position,
              status,
              updatedAt,
            })
          }
          className='btn'
        >
          edit
        </Link>
        <button className='btn' onClick={() => handleDelete(id)}>
          delete
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  width: 300px;
  margin: 2rem auto;
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  padding: 1rem;
  :hover {
    box-shadow: var(--shadow-4);
  }
  p {
    margin: 0;
  }
  .header {
  }
  .body {
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .btn-holder {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .pending {
    background: var(--red-light);
    padding: 0 5px;
    border-radius: var(--radius);
  }
  .declined {
    background: var(--red-dark);
    color: white;
    padding: 0 5px;
    border-radius: var(--radius);
  }
  .interview {
    background: var(--green-light);

    padding: 0 5px;
    border-radius: var(--radius);
  }
`
export default JobsHolder
