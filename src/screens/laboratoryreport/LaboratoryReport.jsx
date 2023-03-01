import React, {useState} from 'react'
import Header from '../../components/header/Header'
import LabResults from '../../components/LabResults'
import './laboratoryreport.css'

function LaboratoryReport() {
  const [showCreate, setShowCreate] = useState(false)
  return (
    <div className='laboratory-report flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Header title='LAB REPORTS' text='Laboratory Reports Updates'/>
        </div>
        <div className='main-wrapper w-full flex flex-col items-center'>
          <div className='laboratory-wrapper mt-4'>
              <button onClick={() => setShowCreate(true)} className='rounded-md lab-btn'>New Lab Results</button>
          </div>
          <div className='results-wrapper mt-4'>
              <LabResults/>
          </div>

          {showCreate && (
              <div className='create-new-l-report flex flex-col items-center justify-center'>
                
                  <div className='create-bar flex items-center justify-between py-2 px-3'>
                    <p className='text-gray-200'>Please fill all fields</p>
                    <p className='text-gray-200 cursor-pointer' onClick={() => setShowCreate(false)}><i className="fa-regular fa-rectangle-xmark"></i></p>
                  </div>
                  <div className='create-body flex flex-col items-center p-2 '>
                    <input className='w-full border-2 p-2 outline-emerald-100' type='text' placeholder='Enter name'/>
                    <div className='w-full flex items-center justify-between gap-2 my-2'>
                      <input className='lab-input  border-2 p-2 outline-emerald-100' type='date'/>
                      <input className='lab-input  border-2 p-2 outline-emerald-100' type='text' placeholder='Enter patient ID' defaultValue='2345869'/>
                    </div>

                    <div className='w-full flex items-center justify-between gap-2'>
                      <input className='lab-input border-2 p-2 outline-emerald-100' type='text' placeholder='Test Type'/>
                      <input className='lab-input border-2 p-2 outline-emerald-100' type='text' placeholder='Lab ID'/>
                    </div>

                    <div className='w-full mt-2'>
                        <textarea className='w-full border-2 p-2 outline-emerald-100' placeholder='Test results'></textarea>
                    </div>
                    <div className='w-full'>
                        <textarea className='w-full border-2 p-2 outline-emerald-100' placeholder='Analysiys and Conclusion'></textarea>
                    </div>
                    <button className='bg-emerald-500 hover:bg-emerald-600 py-2 px-3 mt-2 self-start publish-btn'>Publish</button>
                  </div>
                </div>
          )}           
        </div>
    </div>
  )
}

export default LaboratoryReport