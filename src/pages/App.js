import React from "react";
import '../css/main.css'
import reclaimlogo from '../Images/reclaimlogo.jpg';
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
         
              <img className='logo' src={reclaimlogo}/>
              {/* <p>Contracting services for the South and Central Jersey areas. We help demo and install anything in your home</p> */}
              <div id='connect'><a href='https://reclaimrepairs.com'>Relaimrepairs.com</a></div>
              <div id='connect2'>Reclaimrepairs@gmail.com</div>
              <div id='connect'>(609) 605-1452 </div>
             Contracting and isurance claim repair service 
          </div>
          <div id='column2'>
            <hr id='line'/>
             <h1 id='title'>New Jersey <br/> Restoration and Contracting <br/> <span  id='x'>x</span></h1>
             
           <ul id='services'>
           <FadeIn delay='1000' duration='1000'>
             <li className='service'>Repairs</li>
             <li className='service'>Restoration </li>
             <li className='service'>Claims</li>
             <li className='service'>Demo</li>
             <li className='service'>Construction</li>
            <li className='service'><a href='https://tridentrestorationnj.com'>Referal Program</a></li>
             </FadeIn>
           </ul>

           <hr id='line'/>
          </div>
          
          <div id='column3'>
       
          <img className='logo2' src={tridentlogo}/>
            
              <div id='connecttrident'><a href='https://tridentrestorationnj.com'>Tridentrestoration.com</a></div>
              <div id='connect2trident'>Tridentrestoration3@gmail.com</div>
              <div id='connecttrident'>(609) 605-1452 </div>

              Restoration company for the NJ area. We have a team of experienced professionals that can help you with your home restoration needs.
           
          </div>
         
        </div>
   

    </div>

  </div>



  
)};

export default App;