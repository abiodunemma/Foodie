import React from 'react'
import './css/Footer.css';
import food from './assets/food.png';
import search from './assets/search.png';
import orders from './assets/orders.png'
import profile from './assets/profile.png';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-links">
        <img src={food} alt='food' className='food' />
    
        <img src={search} alt='search' className='search' />
       
        <img src={orders} alt='orders' className='orders' />
        <img src={profile} alt='profile' className='profile' />
      </div>
  </footer>
  )
}

export default Footer