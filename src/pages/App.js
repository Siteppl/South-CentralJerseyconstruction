import React from "react";
import '../css/main.css'
import reclaimlogo from '../images/logo2.png';
import tridentlogo from '../images/tridentlogo.png';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import FadeIn from 'react-fade-in';
import { Fade } from "@material-ui/core";




const App = () => {

  
  

  

  return (
  
    <div>
  
  <div id='content-wrapper'>
       
            
          <div id='gridoutline'>
            <div id='column1'>
              <img className='logo' src={reclaimlogo}/>
              <p>Contracting services for the South and Central Jersey areas. We help demo and install anything in your home</p>
              <div id='connect'><a href='reclaimrepairs.com'>Relaimrepairs.com</a></div>
              <div id='connect2'>Reclaimrepairs@gmail.com</div>
              <div id='connect'>(609) 605-1452 </div>
          </div>
          <div id='column2'>
            <hr id='line'/>
             <h1 id='title'>New Jersey <br/> Restoration and Contracting</h1>
             
           <ul id='services'>
             <li className='service'>Repairs</li>
             <li className='service'>Restoration </li>
             <li className='service'>Claims</li>
             <li className='service'>Demo</li>
             <li className='service'>Construction</li>
           </ul>

           <hr id='line'/>
          </div>
          
          <div id='column3'>
          <img className='logo2' src={tridentlogo}/>
              <p>Contracting services for the South and Central Jersey areas. We help demo and install anything in your home</p>
              <div id='connect'><a href='reclaimrepairs.com'>Tridentrestoration.com</a></div>
              <div id='connect2'>Tridentrestoration3@gmail.com</div>
              <div id='connect'>(609) 605-1452 </div>
          </div>
        </div>


    </div>

  </div>



  
)};

export default App;