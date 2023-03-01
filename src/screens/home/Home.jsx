import React, {useState} from 'react'
import Header from '../../components/header/Header'
//import LineChart from '../../components/LineChart'
import './home.css'
import Example from '../../components/LineChart'
import Transactions from '../../components/transactions/Transactions'
import Test from '../../components/Test'
import PatientInfo from '../../components/patientinfo/PatientInfo'

function Home() {
  const [patientInfo, setPatientInfo] = useState(false)
  return (
    <div className='home flex flex-col items-center mt-4'>
      <div className='section-header flex items-center justify-between'>
        <Header title='DASHBOARD' text='Hello Arthur. Welcome!'/>
        <button onClick={() => setPatientInfo(true)} className='add-p-btn rounded-md'>Add Patient</button>
      </div>
      <div className='section-header flex gap-2 items-center justify-betweens'>
        <div className='data-sub-container rounded-md flex items-center justify-between p-3'>
          <div className='left-block'>
            <p className='text-emerald-700'><i class="fa-solid fa-user-group"></i></p>
            <p className='font-bold text-xl text-white'>12,456</p>
            <p className='text-emerald-700 text-base'>Patients</p>
          </div>          
          <div className='right-block'>
            <p className='text-emerald-700 -mt-6' ><i class="fa-solid fa-signal"></i></p>
            <p className='text-white'>21%</p>
          </div>          
        </div>

        <div className='data-sub-container rounded-md flex items-center justify-between p-3'>
          <div className='left-block'>
            <p className='text-emerald-700'><i class="fa-solid fa-bed"></i></p>
            <p className='font-bold text-xl text-white'>2,456</p>
            <p className='text-emerald-700 text-base'>Addmitted Individuals</p>
          </div>          
          <div className='right-block'>
            <p className='text-emerald-700 -mt-6' ><i class="fa-solid fa-signal"></i></p>
            <p className='text-white'>39%</p>
          </div>          
        </div>

        <div className='data-sub-container rounded-md flex items-center justify-between p-3'>
          <div className='left-block'>
            <p className='text-emerald-700'><i class="fa-solid fa-prescription-bottle"></i></p>
            <p className='font-bold text-xl text-white'>22,456</p>
            <p className='text-emerald-700 text-base'>Inventory Status</p>
          </div>          
          <div className='right-block'>
            <p className='text-emerald-700 -mt-6' ><i class="fa-solid fa-signal"></i></p>
            <p className='text-white'>62%</p>
          </div>          
        </div>

        <div className='data-sub-container rounded-md flex items-center justify-between p-3'>
          <div className='left-block'>
            <p className='text-emerald-700'><i class="fa-solid fa-hospital-user"></i></p>
            <p className='font-bold text-xl text-white'>456</p>
            <p className='text-emerald-700 text-base font-medium'>Matanity Ward</p>
          </div>          
          <div className='right-block'>
            <p className='text-emerald-700 -mt-6' ><i class="fa-solid fa-signal"></i></p>
            <p className='text-white'>14%</p>
          </div>          
        </div>
      </div>

      <div className='revenue-section flex items-center justify-between gap-2 mt-4'>
          <div className='revenue-tab p-3'>
            <p className='text-gray-300 font-medium'>Medical Revenue</p>
            <p className='font-bold text-2xl text-emerald-500'>Kes 100,300</p>
            <div className='line-chart'>
                <Example/>
            </div>
          </div>
          <div className='transactions-tab '>
            <p className='text-gray-300 font-medium transaction p-3'>Recent M-pesa Medical Transactions</p>
            <div className=''>
              <Transactions/>
              <Transactions/>
              <Transactions/>
              <Transactions/>
            </div>
          </div>
      </div>
      <div className='clinic-outpatient flex items-center justify-between gap-2 mt-4'>
          <div className='clinics p-3'>
            <p className='text-gray-400 font-medium'>Clinics Attendace</p>
            <p className='font-bold text-xl text-emerald-500'>245 Individuals</p>
            <div className='flex w-full items-center justify-between gap-2 mt-2'>
                <div className='bg-red-300 hover:bg-red-400 p-1  clinic-tab cursor-pointer'>
                    <p className='text-white font-medium text-center'>Orthopaedic</p>
                </div>
                <div className='bg-emerald-300 hover:bg-emerald-400 p-1 clinic-tab cursor-pointer'>
                    <p className='text-black font-medium text-center'>Paediatric</p>
                </div>
                <div className='bg-sky-300 hover:bg-sky-400 p-1  clinic-tab cursor-pointer'>
                    <p className='text-black font-medium text-center'>Ultrasound</p>
                </div>
                <div className='bg-white p-1  clinic-tab cursor-pointer'>
                    <p className='text-black font-medium text-center'>All</p>
                </div>
            </div>
          </div>
          <div className='outpatient-inpatient p-3'>
            <p className='text-gray-300 font-medium'> <i class="fa-regular fa-circle-dot text-yellow-600"></i> Out patient - 17%</p>
            <p className='text-gray-300 font-medium'> <i class="fa-regular fa-circle-dot text-emerald-600"></i> In patient - 83%</p>
            <button className='mt-4 p-2 out-in-btn rounded-md text-gray-300'>Manage Services</button>
          </div>
      </div>
      {patientInfo && (
        <div className='add-patient'>
          <PatientInfo setPatientInfo={setPatientInfo}/>
        </div>
      )}
      
    </div>
  )
}

export default Home