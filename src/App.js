import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./style.css"
import RectangleOne from "./components/Rectangleone"
import Rectangletwo from "./components/Rectangletwo"

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Main />
            <RectangleOne />
            <Rectangletwo />
        </div>
    )
}