import React from "react";
import "./search.css";
import MOCK_DATA from ".\src\MOCK_DATA.json";
import {useState} from "react";



    function Search() {
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
                }
            }).map((val, key) => {
                return (
                <div className="user" key={key}> 
                    <p>{val.Language}</p>
                </div>
                );
            })}
        </div>
    );
}

export default Search;