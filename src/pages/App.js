import React from "react";
import '../css/main.css'
import reclaimlogo from '../Images/logo2.png';
import tridentlogo from '../Images/tridentlogo.png';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import FadeIn from 'react-fade-in';
import { Fade } from "@material-ui/core";




const App = () => {

  
  

  

  return (
  
    <div>
  
  <div id='content-wrapper'>
       
            
          <div id='gridoutline'>
            <div id='column1'>
            <FadeIn delay='500' duration='1000'>
              <img className='logo' src={reclaimlogo}/>
              {/* <p>Contracting services for the South and Central Jersey areas. We help demo and install anything in your home</p> */}
              <div id='connect'><a href='reclaimrepairs.com'>Relaimrepairs.com</a></div>
              <div id='connect2'>Reclaimrepairs@gmail.com</div>
              <div id='connect'>(609) 605-1452 </div>
              </FadeIn>
          </div>
          <div id='column2'>
            <hr id='line'/>
             <h1 id='title'>New Jersey <br/> Restoration and Contracting</h1>
             
           <ul id='services'>
           <FadeIn delay='1000' duration='1000'>
             <li className='service'>Repairs</li>
             <li className='service'>Restoration </li>
             <li className='service'>Claims</li>
             <li className='service'>Demo</li>
             <li className='service'>Construction</li>
             </FadeIn>
           </ul>

           <hr id='line'/>
          </div>
          
          <div id='column3'>
          <FadeIn delay='400' duration='1000'>
          <img className='logo2' src={tridentlogo}/>
              <p></p>
              <div id='connect'><a href='reclaimrepairs.com'>Tridentrestoration.com</a></div>
              <div id='connect2'>Tridentrestoration3@gmail.com</div>
              <div id='connect'>(609) 605-1452 </div>
              </FadeIn>
          </div>
         
        </div>
   

    </div>

  </div>



  
)};

export default App;