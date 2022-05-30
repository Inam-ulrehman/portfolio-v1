import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const DashboardNavBar = () => {
  return (
    <Wrapper>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='/dashboard/add-jobs'>add jobs</NavLink>

      <NavLink to='/dashboard/all-jobs'> jobs</NavLink>
      <NavLink to='/dashboard/profile'>profile</NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  a {
    margin-right: 10px;
    border-right: 1px solid black;
    padding-right: 4px;
  }
`

export default DashboardNavBar
