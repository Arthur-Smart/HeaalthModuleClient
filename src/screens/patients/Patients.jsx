import React from 'react'
import Header from '../../components/header/Header'
import PatientsData from '../../components/PatientsData'
import './patients.css'

function Patients() {
  return (
    <div className='patients flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Header title='Patients' text='Electronic Health Records'/>
        </div>
        <div className='patients-wrapper mt-4'>
            <PatientsData/>
        </div>
    </div>
  )
}

export default Patients