import React from 'react'
import './addappointment.css'

function AddAppointment({setOpen}) {
  return (
    <div className='add-appointment flex flex-col items-center'>
        <p className='cursor-pointer close-add-p-appointment' onClick={()=>setOpen(false)}><i className="fa-regular fa-rectangle-xmark"></i></p>
        <div className='flex add-p-inputs items-center justify-between mt-8'>
            <select className='border-2 add-patient-input p-3 outline-emerald-100'>
                <option>Select patient</option>
                <option value="John Doe">John Doe</option>
                <option value="John Doe">John Doe</option>
                <option value="John Doe">John Doe</option>
            </select>
            <div className='or flex items-center justify-center'>
                <p className='text-white text-xl'>OR</p>
            </div>
            <input className='add-patient-input border-2 p-2 outline-emerald-100' type='text' placeholder='Enter Name'/>
       </div>

       <div className='flex add-p-inputs items-center justify-between mt-2 gap-2'>
            <input className='add-patient-2-input border-2 p-2 outline-emerald-100' type='text' placeholder='Enter Phone number'/>
            <input className='add-patient-2-input border-2 p-2 outline-emerald-100' type='date' placeholder='Select Date'/>
       </div>

       <div className='flex add-p-inputs items-center justify-between mt-2 gap-2'>
            <select className='add-patient-2-input border-2 p-3 outline-emerald-100'>
                <option>Select doctor</option>
                <option>Joseph Kimani</option>
                <option>Peter Otieno</option>
                <option>Brian kingori</option>
            </select>
            <select className='add-patient-2-input border-2 p-3 outline-emerald-100'>
                <option>Select depatment</option>
                <option>Optical</option>
                <option>Dental</option>
                <option>General consultation</option>
            </select>
       </div>
       <div className='flex add-p-inputs items-center justify-between mt-2 gap-2'>
          <input className='w-full border-2 p-2 outline-emerald-100' type='text' placeholder='Charges'/>
       </div>
       <div className='add-p-inputs'>
          <button className='bg-emerald-500 hover:bg-emerald-600 py-2 px-3 mt-2 self-start publish-btn'>Make Appointment</button>
        </div>
    </div>
  )
}

export default AddAppointment