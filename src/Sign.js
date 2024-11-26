import React from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './css/sign.css';

const Sign = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/Rest');
    };

  return (
    <div className='background-container'>
<div className='header'>
    <h3>Sign In</h3>
    <div className='welcome'>
        <h2 className='text'>Welcome to Tamang</h2>
        <h2 className='text1'>Food Service</h2>
    </div>
   
    <form className='form'>
  <div className='email'>
    <div className='name'>
  <label>
  
    EMAIL ADDRESS
  </label>
  </div>
  <input placeholder='Enter your Full Email here' id="email1"  className='input'>
  </input>
  <hr></hr>
  </div>

  <div className='form2'>
    <div className='password'>
  <label>
    PASSWORD
  </label>
  </div>
  <input placeholder='Enter your  Password Name  here' id="password" className='input'>
  </input>
  <hr></hr>
  </div>
</form>
<p className='forget'>
    Forget Password?
</p>
<button className='next' onClick={handleClick}>
    SIGN IN 
    </button>
<div className=''>
    <p className='account'>Dont account? <span className='new'> Create new account</span></p>
</div>
<h2 className='or'>Or</h2>
<div >
<button className=' facebook'>
    CONNECT WITH FACEBOOK
</button>
</div>
<div >
<button className=' google'>
    CONNECT WITH GOOGLE
</button>
</div>
</div>


    </div>
  )
}

export default Sign