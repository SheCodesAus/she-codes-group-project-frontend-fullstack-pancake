import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import "../App.js"
import "./search.css";
import MOCK_DATA from ".\src\MOCK_DATA.json";
import {useState} from "react";



    function Search() {
        // const navigate = useNavigate();

        const [searchTerm,setSearchTerm] = useState('')
        return (
        <div className="Search">
            <input type="text" placeholder="Search..." 
            onChange={event => {
                setSearchTerm(event.target.value);
                }}
                />
            {MOCK_DATA.filter((val)=> {
                if (searchTerm =="") {
                    return val
                } else if (val.language.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val 
                }
            }).map((val, key) => {
                return (
                <div className="user" key={key}> 
                    <p>{val.language}</p>
                </div>
                );
            })}
        </div>
    );
}

export default Search;