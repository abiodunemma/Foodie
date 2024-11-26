import React from 'react'
import './css/Main.css';
import Footer from'./Footer.js';
import  burger from'./assets/burger.png';
import  cake from'./assets/cake.png';
import  pate from'./assets/pate.png';
import  fish from'./assets/fish.png';
import tea from'./assets/tea.png';

const Main = () => {
  return (
    <div className='main-background'>
<div className='main-header'>

    <div className='mains'>
    <h2>Featured Partners</h2>
</div>

<div class="container">
    <div class="image-box">
      <img src={burger} alt="Image 1"/>
    
      <p>Opemiposi Deborah</p>
      <h2 className='country'>Chinese <span  className='country2'>American</span></h2>
    </div>
    <div class="image-box">
      <img src={fish} alt="Image 2"/>
      <p>Adeyemi Abbey</p>
      <h2 className='country'>spanish <span className='country2'>.  American</span></h2>
    </div>
  </div>



  <div class="container">
    <div class="image-box">
      <img src={cake} alt="Image 1"/>
      <p>Opemiposi Deborah</p>
      <h2 className='country'>Chinese <span  className='country2'>American</span></h2>
    </div>
    <div class="image-box">
      <img src={pate} alt="Image 2"/>
      <p>Adeyemi Abbey</p>
      <h2 className='country'>spanish <span  className='country2'>.  American</span></h2>
    </div>
  </div>

  

  <div class="container">
    <div class="image-box">
      <img src={burger} alt="Image 1"/>
      <p>Opemiposi Deborah</p>
      <h2 className='country'>Chinese <span  className='country2'>American</span></h2>
    </div>
    <div class="image-box">
      <img src={tea} alt="Image 2"/>
      <p>Adeyemi Abbey</p>
      <h2 className='country'>spanish <span  className='country2'>.  American</span></h2>
    </div>
  </div>

{/* Include Footer Component */}
<Footer />
</div>

    </div>
  )
}

export default Main