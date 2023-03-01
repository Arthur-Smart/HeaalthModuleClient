import React from 'react'
import './patientinfo.css'

function PatientInfo({setPatientInfo}) {
  return (
    <div className='patient-info flex flex-col items-center'>
        <p onClick={()=>setPatientInfo(false)} className='close-patient-info cursor-pointer'><i className="fa-regular fa-rectangle-xmark"></i></p>
        <div className='info-wrapper py-3'>
            <p className='text-2xl text-gray-500 mb-2 font-medium'>Personal information</p>
            <div className='flex gap-2 items-center justify-between'>
                <input className='border-2 patient-input p-2 outline-emerald-100'  type="text" placeholder='Enter name'/>
                <input className='border-2 patient-input p-2 outline-emerald-100'  type="text" placeholder='Enter DOB'/>
            </div>
            <div className='flex gap-2 items-center justify-between mt-2 '>
                <input className='border-2 p-2 outline-emerald-100 patient-input-2' type="text" placeholder='Enter phone'/>
                <input className='border-2 p-2 outline-emerald-100 patient-input-2' type="text" placeholder='Enter Location'/>
                <input className='border-2 p-2 outline-emerald-100 patient-input-2' type="email" placeholder='Enter Email'/>
            </div>
            <div className='insurance  py-3 flex flex-col '>
            <p className='text-2xl text-gray-500 mb-2 font-medium'>Insurance information</p>
                <select className='border-2 p-2 outline-emerald-100 '>
                    <option value='insurance'>Laison</option>
                    <option value='insurance'>NHIF</option>
                </select>
                <div className='flex justify-between  gap-2 mt-2'>
                    <input className='border-2 patient-input p-2 outline-emerald-100' type="text" placeholder='Policy number'/>
                    <input className='border-2 patient-input p-2 outline-emerald-100' type="text" placeholder='Group member'/>
                </div>
            </div>
            <div className='medical-issue'>
                <p className='text-2xl text-gray-500 mb-2 font-medium'>Medical issue</p>
                <textarea className='border-2 p-2 outline-emerald-100' placeholder='Write description'></textarea>
            </div>
            <div className='test-issue'>
                <p className='text-2xl text-gray-500 mb-2 font-medium'>Test result</p>
                <textarea className='border-2 p-2 outline-emerald-100' placeholder='Write description'></textarea>
            </div>

            <button className='bg-emerald-500 py-2 px-3 publish-btn'>Publish</button>
        </div>
    </div>
  )
}

export default PatientInfo