import React from "react"
import Container from "../Container"
import CTAButton from "../CTAButton"
import { Link, useNavigate } from "react-router-dom";
import "./twocolumn.css"

export default function TwoColumn({ heading, paragraph, button, image, link, direction }) {
    return (
        <div className={`columnContainer ${direction === "reverse" ? "reverse" : ""}`}>
            <div className='columnText'>
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <Link to={link}><CTAButton>{button}</CTAButton></Link>


            </div>
            <div className='columnImage'>
                <img src={image}></img>
            </div>
        </ div>
    );
}