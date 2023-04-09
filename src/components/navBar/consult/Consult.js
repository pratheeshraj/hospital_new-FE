import React from 'react'
import "./Consult.css"
import ConsultCard from './consultCard/ConsultCard'
const Consult = () => {
  return (
    <div className='consult_main'>
        <div className='consult_main_info'>
            <div className='consult_main_info_1'>
                <p>Consult top doctors online for any health concern</p>
                <span>Private online consultations with verified doctors in all specialists</span>
            </div>
            
        

<button className='consult_main_btn'>View All specialists</button>
        </div>
       
    </div>
  )
}

export default Consult