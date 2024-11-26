import React from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './css/Rest.css';
import back from './assets/back.png'; 
import coffee from './assets/coffee.png'

const Rest = () => {
  return (
    <div className='main'>
        <div className='forgot'>
<h2 className='now1'><span className='now'><img src={back}></img> </span>Forget Password</h2>
<div>

<h2 className='sent'>Reset email sent</h2>   
<p className='instrun'>We have sent a instruction email to</p>
<p className='instrun1'> Abbey@gmail.com<span className='instrun2'> Having problem?</span></p>
</div>
<button className='button-email'>SEND AGAIN</button>

    <img src={coffee}  alt='coffe'  className='coffe-image'/>

        </div>
       
    </div>
  )
}

export default Rest