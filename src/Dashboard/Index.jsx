import React from 'react'
import AddResume from './components/AddResume'

function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h1 className='text-3xl font-bold'>My Resume</h1>

      <p>Start Creating AI resume to your next job Role</p>
      <div className='grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-7'>
        <AddResume  />
      </div>
    </div>
  )
}

export default Dashboard
