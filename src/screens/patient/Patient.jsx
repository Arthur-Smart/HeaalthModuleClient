import React from 'react'
import Header from '../../components/header/Header'
import './patient.css'

function Patient() {
  return (
    <div className='patient flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Header title='JAMES MWAI' text='Kidney Diagnosis | Lab test'/>
        </div>
        <div className='single-p-info flex flex-col items-center'>
            <div className='print bg-emerald-600 p-2 text-white rounded-md cursor-pointer'>
                <p>Print <i class="fa-solid fa-pen-to-square"></i></p>
            </div>
            <div className='info-con py-2'>
               <p className='text-white text-lg info-title p-1 rounded-md'>Personal Information</p>
               <p className='text-gray-500'><strong>Patient Name:</strong> James Mwai</p>
               <p className='text-gray-500'><strong>Date Of Birt:</strong> 12-09-1980</p>
               <p  className='text-gray-600' ><strong>Phone No:</strong> 0785987568</p>
               <p className='text-gray-600'><strong>Residence:</strong> Nairobi, Kenya</p>
               <p className='text-gray-600'><strong>Email:</strong> mwaijames@gmail.com</p>
            </div>
            <div className='info-con py-2'>
                <p className='text-white text-lg info-title p-1 rounded-md'>Insurance Information</p>
                <p className='text-gray-600' ><strong>Insuaree:</strong> NHIF</p>
                <p className='text-gray-600' ><strong>Policy Number:</strong> 46573</p>
                <p className='text-gray-600' ><strong>Group member:</strong> Member</p>
            </div>
            <div className='info-con py-2'>
                <p className='text-white text-lg info-title p-1 rounded-md'>Medical Issue</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div className='info-con py-2'>
                <p className='text-white text-lg info-title p-1 rounded-md'>Test Results</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
             <div className='info-con py-2'>
                <p className='text-white text-lg info-title p-1 rounded-md'>Prescriptions</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <div className='info-icons flex items-center py-2'>
                <p className='cursor-pointer text-emerald-600'><i class="fa-solid fa-pen-to-square"></i></p>
                <p className='cursor-pointer ml-2 text-red-500'><i class="fa-solid fa-trash"></i></p>
            </div>
        </div>
    </div>
  )
}

export default Patient