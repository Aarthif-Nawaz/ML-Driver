import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Fullcalender from '../common/fullcalender';
import {useHistory, useLocation} from 'react-router-dom'
import { propTypes } from 'react-bootstrap/esm/Image';

const Messenger = (props) => {
    const location = useLocation()
    const val = location.state ? props.location.state.email : localStorage.getItem('email')
    const [email,setEmail] = useState(val)
    const [come,setCome] = useState(false)
    
    useEffect(() => {
        try{
            if(props.location.state.email){
                console.log(props.location.state.email)
                setCome(true)
                setEmail(props.location.state.email)
            }
        }catch(e){
            console.log(e)
        }
        
        
    },[])

    const history = useHistory()
    return (
        <>
        {/*  */}
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Calendar</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Booking System</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Calendar - Planner</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <Fullcalender email={email}></Fullcalender>
                </div>
            </div>
        </>
    );

}
export default Messenger
