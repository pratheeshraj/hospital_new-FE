import React from 'react'
import "./HomeDesc.css"
import Desc  from "../../../images/desc.png"
const HomeDesc = () => {
  return (
    <div className='home_desc'>
      <div className='home_desc_content'>
        <h1>MEDSIR</h1>
        <p>For many, the concept of creating medical content writing samples can be 
          a challenging one  after all, theyre a long way away from more</p>

<a href='#'>Read More</a>

      </div>
      <img src={Desc} className='home_desc_img'></img>
    </div>
  )
}

export default HomeDesc