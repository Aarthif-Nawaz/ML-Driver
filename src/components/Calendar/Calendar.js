import React from 'react';
import { Link } from 'react-router-dom';
import Fullcalender from '../common/fullcalender';
import {useHistory} from 'react-router-dom'

const Messenger = () => {
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
                    <Fullcalender></Fullcalender>
                </div>
            </div>
        </>
    );

}
export default Messenger
