import React, {useState} from 'react'
import Header from '../../components/header/Header'
import PortalData from '../../components/PortalData'
import './portal.css'

function Portal() {
  const [show,setShow] = useState(false)
  const [showEvent, setShowEvents] = useState(false)
  return (
    <div className='portal flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Header title='PORTAL' text='Manage users in your web portal'/>           
            <button onClick={()=>setShow(true)} className='notification-btn rounded-md'>Education panel</button>                       
        </div>
      <div className='portal-m-container mt-4 flex'>
         <div className='portal-d-container rounded-md p-3 flex justify-between'>
            <div>
                <p className='text-emerald-700'><i class="fa-solid fa-user-group"></i></p>
                <p className='font-bold text-xl text-white'>2456</p>
                <p className='text-emerald-700 text-base'>Portal Members</p>
            </div>
            <div>
                <p className='text-emerald-700'><i class="fa-solid fa-comments"></i></p>
                <p className='font-bold text-xl text-white'>800</p>
                <p className='text-emerald-700 text-base'>Message</p>
            </div>    
                <div className='notfication-count cursor-pointer bg-red-700 flex items-center justify-center'>
                    <p className='text-white'><i class="fa-solid fa-envelope"></i></p>
                </div>               
                    
         </div>

          <div className='portal-d-container rounded-md p-3 flex items-center justify-between ml-5'>
            <div>
                <p className='text-emerald-700'><i class="fa-solid fa-user-group"></i></p>
                <p className='font-bold text-xl text-white'>26</p>
                <p className='text-emerald-700 text-base'>3 portal updates</p>
            </div>
            <div>
                <button onClick={() => setShowEvents(true)} className='py-2 px-4 bg-white rounded-md'>Create Event</button>
            </div>    
                <div className='notfication-count cursor-pointer bg-red-700 flex items-center justify-center'>
                    <p className='text-white'><i class="fa-solid fa-bell"></i></p>
                 </div>               
                    
         </div>
      </div>
      <div className='portalWrapper mt-4'>
        <PortalData/>
      </div>
      {show && (
      <div className='education-panel-div flex items-center justify-center'>
          <div className='education-wrapper p-3 flex flex-col rounded-md'>
               <div className='flex items-center justify-between'>
                <p className='mb-2 text-gray'>Please fill all the fields</p>
                <p onClick={()=>setShow(false)} className='cursor-pointer'><i className="fa-regular fa-rectangle-xmark"></i></p>
               </div>               
               <input className='w-full border-2 p-2 outline-emerald-100' type='text' placeholder='Enter title'/>
               <textarea className='w-full border-2 p-2 outline-emerald-100 mt-2' placeholder='Type description'></textarea> 
               <button className='bg-emerald-500 hover:bg-emerald-600 py-2 px-3 mt-2 self-start publish-btn'>Publish</button> 
          </div>
      </div>
      )
      }
      {/*Events section */}
      {showEvent && (      
      <div className='events-div flex items-center justify-center'>
          <div className='events-wrapper p-3 flex flex-col items-center rounded-md'>
              <div className='flex w-full items-center justify-between'>
                  <p className='mb-2 text-gray'>Please fill all the fields</p>
                  <p onClick={() => setShowEvents(false)} className='cursor-pointer'><i className="fa-regular fa-rectangle-xmark"></i></p>
              </div>
              <input className='w-full border-2 p-2 outline-emerald-100' type='text' placeholder='Enter Event title'/>
              <input className='w-full border-2 p-2 outline-emerald-100 my-4' type='date' placeholder='Date'/>
              <textarea className='w-full border-2 p-2 outline-emerald-100 mt-2' placeholder='Type event description'></textarea>
              <button className='bg-emerald-500 hover:bg-emerald-600 py-2 px-3 mt-2 self-start publish-btn'>Publish</button>
          </div>
      </div>
      )}
    </div>
  )
}

export default Portal