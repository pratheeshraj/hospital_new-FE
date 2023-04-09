import React from 'react'
import NavBar from '../components/navBar/NavBar'
import Search from '../components/navBar/search/Search'
import HomeDesc from '../components/navBar/home_des/HomeDesc'
import HomeCard from '../components/navBar/home_card/HomeCard'
import Consult from '../components/navBar/consult/Consult'


const Home = () => {
  return (
    <div>
        <NavBar/>
        <main className='main'>
        <Search/>
        <HomeDesc/>
        <HomeCard/>
        <Consult/>
        </main>
    </div>
  )
}

export default Home