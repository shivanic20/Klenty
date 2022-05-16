import React from "react";
import group1 from "../images/Group 1006-3.png"
import group2 from "../images/Group 1006-4.png"
import group3 from "../images/Group 1006-5.png"
export default function RectangleOne()
{
    return(
        <section className="content"><div className="RectOne">
        <h2>   CRM Acceleration</h2>
        <p>Everything CRM Integrations was supposed to be. And more.</p>
        <div className="small"> <div className="r1">
            <img src ={group1}/>
            <h6>Never update your contacts manually</h6>
            <p>Any contact you add in CRM gets updated automatically in Klenty. 
                Set up Triggers to drive leads from Klenty back into the CRM.  
                Save hours everyday to focus on critical activities</p>
         </div>
        <div className="r2">
        <img src ={group2}/>
            <h6>Engage instantly with prospects who show intent</h6>
            <p>Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. 
                Get notified immediately. Followup without skipping a beat.</p>
        </div>
        <div className="r3">
        <img src ={group3}/>
            <h6>Outreach without leaving your CRM </h6>
            <p>Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. 
                No more switching screens to execute sales outreach.</p></div></div>
        </div></section>
    );
}