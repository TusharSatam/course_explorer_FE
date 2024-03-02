import React from 'react'

const SecondaryBtn = ({text,onClick}) => {
  return (
    <button onClick={onClick??onClick} className='bg-white border-2 border-gray-300 rounded-xl p-2 px-4 text-center text-black font-semibold hover:bg-gray-200 '>{text?text:"secondaryBtn"}</button>

  )
}

export default SecondaryBtn