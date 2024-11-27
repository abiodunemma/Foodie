import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './css/Home.css';
import  g12 from './assets/g12.png'; 
import  Illustration from './assets/Illustration.png'; 


const Home = () => {
  const [timer, setTimer] = useState(10);  
  const history = useHistory();  


  
  useEffect(() => {
    if (timer === 0) {
      
      history.push('/page1');  
    } else {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);  
    }
  }, [timer, history]);

  return (
    <div className='background-container '>

        <div className='header'>
          <div className='home-name'>
          <h2>Tamang</h2>
       
</div>
  <h1>   <span> <img src={g12} alt="g12 icon" className='icon'/></span> Foodservice </h1>
  <div className='center'>
        
<div><img src={Illustration} alt="g12 icon" className='image'/></div>
</div>

<div>
  <h2>Welcome</h2>
</div>
<div className='welcome'>
  <p className='welcome2' >It a pleasure to meet you.we are </p>
   <p className='welcome1'>  exited we are where so let get started </p>
</div>
<button className='button7'>
  <h2>Get started</h2>
</button>
        </div>
        

    </div>
  )
}

export default Home