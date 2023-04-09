import React from 'react'
import "./ConsultCard.css"
import consult5 from "../../../../images/consult5.webp"
const ConsultCard = () => {
  return (
    <div className='consult_card'>
        <div className='consult_card_imgc'> <img className='consult_card_img' src={consult5} alt=""/></div>
        <div className='consult_card_intro'>
          <h1>Depression or anixty</h1>
         <a href='#' className='consult_card_a'>Consult Now</a>
        </div>
    </div>
  )
}

export default ConsultCard