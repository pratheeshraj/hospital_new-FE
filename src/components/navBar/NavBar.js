import React, { useState } from 'react'
import "./NavBar.css"
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
const NavBar = () => {
  const [dropDown1, setDropDown1] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)
  const [dropDown3, setDropDown3] = useState(false)
  return (
    <div className='nav'>

      <div className='nav-logo'>
        <div className='nav-dot'></div>
        <a href='#' className='nav-logo-name'>MEDSIR</a>
        <div className='nav-dot'></div>
      </div>

      <div className='nav-mid'>
        <a href='#'>Find Doctors</a>
        <a href='#'>Video Consult</a>
        <a href='#'>Medicines</a>
        <a href='#'>Lab Tests</a>
        <a href='#'>Lab Tests</a>
      </div>
      <div>
        <div className='nav-last'>
          <div className='nav_dropd-head' >
            <div style={{ display: 'flex' }} onClick={()=>setDropDown1((prev)=>!prev)} >

              <div style={{ marginRight: "7px", }}>For Coperates</div>
              <div><FaArrowDown setDropDown1 onClick={()=>setDropDown1((prev)=>!prev)} size={"10px"} /></div>
            </div>
            {
              dropDown1 && <div className='nav_dropd'>
                <ul>
                  <li>Health And Wellness Plans</li>
                  <li>Group Insurance</li>
                </ul>
              </div>
            }
          </div>
          <div className='nav_dropd-head'>
            <div style={{ display: 'flex' }} onClick={()=>setDropDown2((prev)=>!prev)} >

              <div style={{ marginRight: "7px", }}>For Providers</div>
              <div><FaArrowDown size={"10px"} /></div>
            </div>
            {
              dropDown2 && <div className='nav_dropd1'>
                <ul>
                  <li>Health And Wellness Plans</li>
                  <li>Group Insurance</li>
                  <li>Group Insurance</li>
                </ul>
              </div>
            }
          </div>
          <div className='nav_dropd-head'>
            <div style={{ display: 'flex' }} onClick={()=>setDropDown3((prev)=>!prev)} >

              <div style={{ marginRight: "7px", }}>For Providers</div>
              <div><FaArrowDown size={"10px"} /></div>
            </div>
            {
              dropDown3 && <div className='nav_dropd2'>
                <ul>
                  <li>Health And Wellness Plans</li>
                  <li>Group Insurance</li>
                  <li>Group Insurance</li>
                </ul>
              </div>
            }
          </div>

          <button className='nav-btn'>LogIn/SignIn</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar