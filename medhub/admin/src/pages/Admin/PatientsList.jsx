import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const PatientsList = () => {

  const { patients , aToken , allPatients} = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
        allPatients()
    }
}, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Patients</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {patients.map((item, index) => (
          <div className='border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
            <img className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default PatientsList;