import React from 'react'

const SecondaryBtn = ({disabled,text,onClick,btnClass}) => {
  return (
    <button disabled={disabled} onClick={onClick??onClick} className={`${btnClass??btnClass} ${disabled?"bg-gray-200":"bg-white"} border-2 border-gray-300 rounded-lg py-2  px-2  text-sm  text-center text-black font-semibold hover:bg-gray-200 `}>{text?text:"secondaryBtn"}</button>

  )
}

export default SecondaryBtn