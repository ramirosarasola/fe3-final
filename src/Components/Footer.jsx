import React from 'react'
import DH from '../assets/DH.png'
import facebook from '../assets/ico-facebook.png'
import tiktok from '../assets/ico-tiktok.png'
import instagram from '../assets/ico-instagram.png'
import wpp from '../assets/ico-whatsapp.png';

const Footer = () => {
  return (
    <footer>
      <div className='red-container'>
        <p>DESARROLLADO POR CHAB Y SARASOLA</p>
      </div>

      <div className="social">
        <div className='DH'>
          <img className='dh-logo' src={DH} alt='DH-logo' />
        </div>
        <div className='rrss'>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={tiktok} alt="tiktok" />
          <img src={wpp} alt="whatsApp" />
        </div>
      </div>

    </footer>
  )
}

export default Footer
