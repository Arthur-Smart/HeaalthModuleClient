import React from 'react'
import Header from '../../components/header/Header'
import TeamData from '../../components/TeamData'
import './team.css'

function Team() {
  return (
    <div className='team flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
           <Header title='WORKERS' text='Doctors|Nurses|'/>
        <button className='add-p-btn rounded-md'>Add Worker</button>
      </div>
      <div className='workers-wrapper mt-4'>
            <TeamData/>
      </div>
    </div>
  )
}

export default Team