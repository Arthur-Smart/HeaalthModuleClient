import React from 'react'
import Header from '../../components/header/Header'
import './singlebilling.css'

function SingleBilling() {
  return (
    <div className='single-billing flex flex-col items-center mt-4s'>
        <div className='section-header flex items-center justify-between'>
            <Header title='JAMES MWAI' text='Billing No:23475'/>
        </div>
        <div className='billing-info flex flex-col items-center p-3 mt-4'>
                <div className='billing-input-top flex items-center justify-between gap-2'>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='text' placeholder='Enter name' value='John Kimani'/>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='text' placeholder='Enter name' value='Optical operations'/>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='text' placeholder='Enter name' value='20-02-2023'/>
                </div>
                <div className='billing-input-bottom flex items-center justify-between gap-2 mt-2'>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='text' placeholder='Amout' value='3500'/>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='text' placeholder='Amout' value='2000'/>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='text' placeholder='Amout' value='1500'/>
                </div>
                <div className='billing-icons flex items-center py-2'>
                    <p className='cursor-pointer text-emerald-600'><i class="fa-solid fa-pen-to-square"></i></p>
                    <p className='cursor-pointer ml-2 text-red-500'><i class="fa-solid fa-trash"></i></p>
                </div>           
        </div>
    </div>
  )
}

export default SingleBilling