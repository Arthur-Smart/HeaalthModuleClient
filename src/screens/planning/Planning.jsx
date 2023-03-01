import React from 'react'
import Calendar from '../../components/Calendar'
import Header from '../../components/header/Header'
import './planning.css'

function Planning() {
  return (
    <div className='planning flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Header title='PLANNING' text='Electronic Health Records'/>
        </div>
        <div className='mt-4 calendar-wrapper'>
                <Calendar/>
        </div>
    </div>
  )
}

export default Planning