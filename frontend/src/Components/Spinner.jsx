import React from 'react'
import './Loader.css'
const Spinner = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column',height:"80vh"}}>
      <div className='loader w-[100px] h-[100px]'>
      
      </div>
      <h1>Loading</h1>
    </div>
    
  )
}

export default Spinner
