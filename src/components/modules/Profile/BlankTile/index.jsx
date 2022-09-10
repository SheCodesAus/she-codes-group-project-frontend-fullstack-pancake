import React from 'react'
import "./index.css";
import Placehoder from "../../../../assets/images/placeholder.svg"

export default function BlankTile(){
    return (
    <>
        <div className="tile">
            <img src={Placehoder} alt=""/>
        </div>
    </>
    )
}