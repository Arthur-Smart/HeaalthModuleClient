import React, {useState} from 'react'
import BillingData from '../../components/BillingData'
import Header from '../../components/header/Header'
import './billing.css'

function Billing() {
  const [open, setOpen] = useState(false)
  return (
    <div className='billing flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Header title='BILLING' text='Manage users in your web portal'/>           
            <button onClick={() => setOpen(true)} className='notification-btn rounded-md'>Create Invoice</button>                       
        </div>
        <div className='amount-due mt-4'>
            <p className='text-gray-300 font-medium'>Amount Due</p>
            <p className='font-bold text-2xl text-emerald-500'>Kes 17,000</p>
        </div>

        <div className='billing-wrapper mt-4'>            
            <BillingData/>
        </div>
        {/*Create a new Invoice*/}
        {open && (
          <div className='create-invoice flex items-center justify-center'>
           <div className='invoice-wrapper flex flex-col'>
              <div className='invoice-n-close flex items-center justify-between p-3'>
                <p className='font-bold text-white'>INVOICE NO: 23894</p>
                <p onClick={() => setOpen(false)} className='text-white cursor-pointer'><i className="fa-regular fa-rectangle-xmark"></i></p>
              </div>
              <div className='invoice-fields flex flex-col items-center p-3'>
                  <div className='fields-top flex items-center gap-2 justify-between'>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='text' placeholder='Enter patient name'/>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='text' placeholder='Enter service offered'/>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='date' placeholder='Enter service offered'/>
                  </div>
                  <div className='fields-bottom flex items-center gap-2 justify-between mt-4'>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='type' placeholder='Service cost'/>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='type' placeholder='Paid Amount'/>
                    <input className='border-2 p-2 outline-emerald-100 invoice-inputs' type='type' placeholder='Balance'/>
                  </div>
                  <button className='bg-emerald-500 hover:bg-emerald-600 py-2 px-3 mt-2 self-start publish-btn'>Publish</button>
              </div>
           </div>
        </div>
        )}
        
        <div>

        </div>
    </div>
  )
}

export default Billing