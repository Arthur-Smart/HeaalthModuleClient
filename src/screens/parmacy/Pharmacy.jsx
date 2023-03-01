import React, {useState} from 'react'
import Header from '../../components/header/Header'
import PharmacyData from '../../components/PharmacyData'
import './pharmacy.css'

function Pharmacy() {
    const [open, setOpen] = useState(false)
  return (
    <div className='pharmacy flex flex-col items-center mt-4'>
        <div className='section-header flex items-center justify-between'>
            <Header title='PHARMACY' text='Hello Arthur. Welcome!'/>
            <button onClick={() => setOpen(true)}  className='add-p-btn rounded-md'>Create Product</button>
        </div>
        <div className='pharmacy-data mt-4'>
            <PharmacyData/>
        </div>
        {open && (
            <div className='create-product flex flex-col items-center justify-center'>
            <div className='creat-product-top flex items-center justify-between p-3'>
                <p className='text-gray-200'>Please fill all fields</p>
                <p onClick={() => setOpen(false)} className='text-gray-200 cursor-pointer' ><i className="fa-regular fa-rectangle-xmark"></i></p>
            </div>
            <div className='product-inputs flex flex-col items-center p-3'>
                <div className='product-i-top flex items-center justify-between gap-2'>
                    <input className='border-2 p-2 outline-emerald-100 patient-portal-input-2' type='file'/>
                    <input className='border-2 p-2 outline-emerald-100 patient-portal-input-2' type='text' placeholder='Enter title'/>
                </div>
                <div  className='product-i-bottom flex items-center justify-between gap-2 mt-4'>
                    <input className='border-2 p-2 outline-emerald-100 patient-portal-input-2' type='text' placeholder='Enter category'/>
                    <input className='border-2 p-2 outline-emerald-100 patient-portal-input-2' type='text' placeholder='Enter amount'/>
                </div>
                <textarea className='product-i-textarea border-2 p-2 outline-emerald-100 mt-2' placeholder='Type product description...'></textarea>
                <button className='bg-emerald-500 hover:bg-emerald-600 py-2 px-3 mt-2 self-start publish-btn'>Publish</button>
            </div>
        </div>
        )}
        
    </div>
  )
}

export default Pharmacy