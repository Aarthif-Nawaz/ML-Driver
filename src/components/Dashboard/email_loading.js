import React , {useEffect} from 'react';
import {useHistory} from 'react-router-dom'

function Email_loading(props) {
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('type') == "planner"){
            history.push('/planner-inbox')
        }
        else if (localStorage.getItem('type') == "driver"){
            history.push('/driver-inbox')
        }
    },[])
    return (
        <div style={{textAlign: 'center', marginTop: '300px'}}>
           {localStorage.getItem('type')=="admin" ? <h1 style={{fontWeight:'bold'}}>No Emails ...</h1> : <h1 style={{fontWeight:'bold'}}>Loading ...</h1>}
        </div>
    );
}

export default Email_loading;