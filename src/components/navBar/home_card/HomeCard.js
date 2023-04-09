import React from 'react'
import "./HomeCard.css"
import SingleCard from './singlecard/SingleCard'
import { CardData } from './HomeCardData.'
const HomeCard = () => {
  return (
    <div className='home_card'>
        {
          CardData.map((value)=>{
          return <SingleCard value={value}/>
          })
        }
    </div>
  )
}

export default HomeCard