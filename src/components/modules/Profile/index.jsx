import React from 'react'
import "./index.css";
import Container from '../../common/Container'
import Grid from '../../common/Grid'


export default function Profile(){
    return (
    <>
    
    <Container>

   
    
    <Grid>

    <div className='top-half'>
    <div className='user-icon'></div>

    <div className="top-button">
        <button id="top-button-1">Workshop Manage</button>
        <button id="top-button-2">Profile Manage</button>
    </div>
    </div>

    <div className="workshop-tile"></div>
    <div className="workshop-tile"></div>
    <div className="workshop-tile"></div>
    </Grid>

    </Container>
    </>
    )
}