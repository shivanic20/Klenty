import React from "react"
import logo from "../images/BigLogo.png"
export default function Navbar() {
    return (
        <nav>
            <div className="con">
            <img src={logo} className="nav--icon" />
            <div className="options"><p className="first">Platform</p>
            <p>Pricing</p>
            <p>Acceleration</p>
            <p>Resources</p><p>Customer Stories </p>
            </div>
            <ul>
            <li><div className="login">Log in</div></li>
            <li><div className="demo"><span classname="text">SCHEDULE DEMO</span></div></li>
            <li><div className="try"><div>TRY FOR FREE</div></div></li></ul>
            </div>
        </nav>
    )
}