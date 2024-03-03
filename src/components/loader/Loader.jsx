import React from 'react'
import { loader } from '../../assets'

const Loader = () => {
  return (
    <div className='h-full w-full flex justify-center items-center bg-white'>
        <img src={loader} alt="loader"/>
    </div>
  )
}

export default Loader