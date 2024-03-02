import React from 'react'

const SecondaryBtn = ({disabled,text,onClick,btnClass}) => {
  return (
    <button disabled={disabled} onClick={onClick??onClick} className={`${btnClass??btnClass} ${disabled?"bg-gray-200":"bg-white"} border-2 border-gray-300 rounded-xl p-2 px-4 text-center text-black font-semibold hover:bg-gray-200 `}>{text?text:"secondaryBtn"}</button>

  )
}

export default SecondaryBtn