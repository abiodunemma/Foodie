import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './css/page.1.css';
import  g12 from './assets/g12.png'; 
import  Illustration from './assets/page1.png'; 



const Page1 = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/sign');
  };

  return (
    <div className='background-container '>

    <div className='header'>
      <div className='name'>
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
<p>It a pleasure to meet you.we are </p>
<p className='welcome1'>  exited we are where so let get started </p>
</div>

<button className='button' onClick={handleClick}>
<h2>Get started</h2>
</button>
    </div>
    

</div>
  );
};

export default Page1;
