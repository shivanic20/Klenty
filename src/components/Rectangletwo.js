import React from "react";
import { useState } from "react";
import vec from "../images/Vector.png"
import eye from "../images/red-eye.png"
import face from "../images/Group 1008.png"
import face2 from "../images/gavin.png"
import jmp from "../images/jump-logo.png"
export default function Rectangletwo(){
    const [on,setOn]= useState(false);
    function toggle(){
        setOn(prevOn => !prevOn)
    }
    
    return(
        <div className="Rectangltwo">
         <h2>What our customers have to say</h2>
         {on&& <div><img src={vec} className="vec"/>
         <p>It changed our business. Klenty allowed our outbounds sales team to leverage their time and skills </p>
        <img src={eye} className="eye"/> <span className="name">Gavin Tye  </span><span className="down">Sales Director , Red Eye </span>
        < img src={face} className="face" /></div>}
        {!on && <div><img src={vec} className="vec"/>
         <p>From someone who is relatively new to sales and lead generating, Klenty was a highly effective and simple-to-use tool that allowed me to quickly generate leads in a genuine and customisable manner </p>
        <img src={jmp} className="eye"/> <span className="name">Sam W   </span><span className="down">Head of Demand Generation , Jump  </span>
        < img src={face2} className="face" /></div>}
        <div className="left" onClick={toggle}>prev | next</div>
        </div>
    );
}