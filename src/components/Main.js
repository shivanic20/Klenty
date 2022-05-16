import React from 'react'
import group from "../images/Group 1006.png"
export default function Main(){

    return(
    <main>
       <div className='heading'> <p className='tagline'>Don't just integrate <span>Accelerate your CRM</span> </p>
        <p className='para'>Propel your sales team into a state of flow with CRM Accelerations. 
            Switch out boring hours of repetitive work with high-impact activities.
             Build a repeatable sales process. </p>
             <div><img src={group} className="group" />
             
        </div></div></main>);
}