import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'

function Calender_loading(props) {
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('type') == "planner"){
            history.push('/plan-calender')
        }
        else if (localStorage.getItem('type') == "driver"){
            history.push('/driver-calender')
        }
    },[])
    return (
        <div style={{textAlign: 'center', marginTop: '300px'}}>
           {localStorage.getItem('type')=="admin" ? <h1 style={{fontWeight:'bold'}}>No Calenders ...</h1> : <h1 style={{fontWeight:'bold'}}>Loading ...</h1>}
        </div>
    );
}

export default Calender_loading;