import React from 'react'
import './transactions.css'

function Transactions() {
  return (
    <div className='transaction-wrapper flex items-center justify-between p-3 mt-1 cursor-pointer'>
        <div className='name-id'>
            <p className='text-emerald-500 font-medium '>RB681CSBLU</p>
            <p className='text-gray-400'>Annita Wambui</p>
        </div>
        <div className='date'>
            <p className='text-gray-400'>2023-02-06</p>
        </div>
        <div className='amount bg-emerald-500 p-1 rounded-md text-white'>
            <p>Kes 3,400</p>
        </div>
    </div>
  )
}

export default Transactions