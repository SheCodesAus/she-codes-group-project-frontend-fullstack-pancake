import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../App.js"
import "./search.css";
import MOCK_DATA from "./MOCK_DATA.json";
import {useState} from "react";



    function Search() {
        // const navigate = useNavigate();
        console.log('MOCK DATA', MOCK_DATA)

        const [searchTerm,setSearchTerm] = useState('')
        return (
        <div className="search">
            <input type="text" placeholder="Search..." 
            onChange={event => {
                setSearchTerm(event.target.value);
                }}
                />
            {MOCK_DATA.filter((val)=> {
                if (searchTerm =="") {
                    return val
                }
                
                if (val.language.toLowerCase().includes(searchTerm.toLowerCase()) || val.city.toLowerCase().includes(searchTerm.toLowerCase()) || val.datetime.toLowerCase().includes(searchTerm.toLowerCase())){ 
                // if (val.city.toLowerCase().includes(searchTerm.toLowerCase()))
                // if (val.datetime.toLowerCase().includes(searchTerm.toLowerCase()))
                    return val 
                }
            }).map((val, key) => {
                return (
                <div className="user" key={key}> 
                    <ol>
                    {val.language}&nbsp; 
                    {val.city }
                    </ol>
                </div>
                );
            })}
        </div>
    );
}

export default Search;