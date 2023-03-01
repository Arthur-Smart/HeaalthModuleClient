import React, {useState} from 'react'
import Header from '../../components/header/Header'
import './patientportal.css'

function PatientPortal() {
  const [publish, setPublish] = useState(false)  
  return (
    <div className='patient-portal flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Header title='STEPHEN MAINA' text='Manage users in your web portal'/>           
            <button  className='notification-btn rounded-md'>Write a Message</button>                       
        </div>

        <div className='patient-p-wrapper p-2'>
            <p className='font-bold text-xl text-gray-600'>MEDICAL ISSUE</p>
            <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>

        <div className='patient-p-wrapper mt-3 p-2'>
           <div className='w-full flex items-center justify-between gap-1'>
              <input className='border-2 p-2 outline-emerald-100 patient-portal-input-2' type='text' placeholder='Patient name' defaultValue='Stephen Maina'/> 
              <input className='border-2 p-2 outline-emerald-100 patient-portal-input-2' type='text' placeholder='Patient phone' defaultValue='0756895734'/> 
           </div>
           <div className='w-full'>
               <div className='border-2 mt-2 p-2 flex items-center cursor-pointer'>
                 <p className='text-gray-500'><i class="fa-solid fa-receipt"></i></p>
                 <p className='ml-2 text-gray-500' >Billing No: EBI2023I2</p>
               </div>
               <div className='border-2 mt-2 p-2 flex items-center cursor-pointer'>
                <p className='text-gray-500'><i class="fa-regular fa-address-book"></i></p>
                <p className='ml-2 text-gray-500'>Medical Report No: EMR202312</p>
               </div>
               <div className='border-2 mt-2 p-2 flex items-center'>                 
                 <p className='text-gray-500'><i class="fa-regular fa-calendar-check"></i></p>
                 <p className='ml-2 text-gray-500'>Appointment has been approved</p>
               </div>
           </div>
           <div className='flex items-center mt-2'>
              <input type='checkbox' onClick={()=> setPublish(!publish)}/>
              <p className='ml-2'>Do you want to publish to the portal?</p>
           </div>
           {publish && 
            <div>
                <button className='bg-emerald-500 hover:bg-emerald-600 py-2 px-3 mt-2 self-start publish-btn'>Publish</button>
            </div>
           }
        </div>
    </div>
  )
}

export default PatientPortal