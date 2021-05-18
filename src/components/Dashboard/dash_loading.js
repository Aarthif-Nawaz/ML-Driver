import { useState, useEffect } from "react";
import React from 'react';
import {useHistory} from 'react-router-dom'

function Dash_loading(props) {
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('type') == "admin"){
            history.push('/dashboard2')
        }
        else if (localStorage.getItem('type') == "planner"){
            history.push('/dashboard')
        }
        else if (localStorage.getItem('type') == "driver"){
            history.push('/dashboard3')
        }
    },[])
    return (
        <div style={{ textAlign: 'center', marginTop: '300px' }}>
            <h1 style={{ fontWeight: 'bold' }}>Loading ...</h1>
        </div>
    );
}

export default Dash_loading;