import React from 'react'
import "./SingleCard.css"
const SingleCard = ({value}) => {
  return (
    <div className='single_card'>
        <img className='single_card_img' src={value.img} alt=""/>
        <div className='single_card_intro'>
          <h1>{value.title}</h1>
          <p>{value.info}</p>
        </div>
    </div>
  )
}

export default SingleCard