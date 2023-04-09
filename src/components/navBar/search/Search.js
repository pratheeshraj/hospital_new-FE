import React from 'react'
import "./Search.css"
import { GrLocation,GrFormSearch } from "react-icons/gr";

const Search = () => {
    return (
        <div className='container'>
            <div className='search'>
            
               <div className='search-option'>
                <div className='icon1'><GrLocation/></div>
               <input  type='text' placeholder="location"></input>
               </div>
               <div className='search-option'>
               <div className='icon2'><GrFormSearch size="2em"/></div>
               <input className='br' type='text' placeholder=' Search doctors,hospitals,clinics ...'></input>
               </div>
            </div>
        </div>
    )
}

export default Search