import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-left-container'>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Cookie Policies</p>
        </div>
        <div className='footer-right-container'>
            <p>2022</p>
            <p>&#169;UniLife</p>
        </div>
    </div>
  )
}

export default Footer