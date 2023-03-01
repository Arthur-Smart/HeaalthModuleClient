import React, {useState} from 'react'
import AddAppointment from '../../components/addappointment/AddAppointment'
import AppointmentData from '../../components/AppointmentData'
import Heaader from '../../components/header/Header'
import './appointments.css'

function Appointments() {
  const [open, setOpen] = useState(false)
  return (
    <div className='appointments flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Heaader title='APPOINTMENT' text='Track and attend to the appointments made'/>
        <button onClick={() => setOpen(true)} className='add-p-btn rounded-md'>Add Appointment</button>
      </div>

      <div className='appointment-tabs flex items-center justify-between'>
            <div className='appointment-d-container rounded-md p-3'>
                <p className='text-emerald-700'><i class="fa-solid fa-user-group"></i></p>
                <p className='font-bold text-xl text-white'>2456</p>
                <p className='text-emerald-700 text-base'>Appointments made</p>
            </div>

             <div className='appointment-d-container rounded-md p-3'>
                <p className='text-emerald-700'><i class="fa-solid fa-user-group"></i></p>
                <p className='font-bold text-xl text-white'>1254</p>
                <p className='text-emerald-700 text-base'>Appointments approved </p>
            </div>

            <div className='appointment-d-container flex justify-between rounded-md p-3'>
                <div>
                    <p className='text-emerald-700'><i class="fa-solid fa-user-group"></i></p>
                    <p className='font-bold text-xl text-white'>458</p>
                    <p className='text-emerald-700 text-base'>Appointments rejected </p>
                </div>
            </div>

             <div className='appointment-d-container rounded-md p-3'>
                <p className='text-emerald-700'><i class="fa-solid fa-user-group"></i></p>
                <p className='font-bold text-xl text-white'>2000</p>
                <p className='text-emerald-700 text-base'>Appointments completed</p>
            </div>
      </div>

      <div className='appointments-wrapper mt-2'>
            <AppointmentData/>
      </div>
      {open && (
          <div className='appointment-div'>
          <AddAppointment setOpen={setOpen}/>
          </div>
      )     
      }
    </div>
  )
}

export default Appointments