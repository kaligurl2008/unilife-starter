import React from 'react'
import { Link } from 'react-router-dom'
import './CityButton.css'

function CityButton({city}) {

    const buttonStyle ={
        fontSize:"28px",
        border:"1px black solid",
        backgroundColor:"white",
        borderRadius:"24px",
        width:"302px",
        height:"88px",
        margin:"12px",
        cursor:"pointer"
    }

  return (
    <div className='city-button-wrapper'>
        <Link to={`/citydetails/${city._id}`}>
        <button className='button'
        style={buttonStyle}>{city.name}</button>
        </Link>
    </div>
  )
}

export default CityButton