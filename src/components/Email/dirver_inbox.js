import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDriverBookings } from '../../service'

function DriverInbox() {
    const [bookings, setBookings] = useState([])

    const fetchData = async () => {
        let darr = []
        const data = await getDriverBookings(localStorage.getItem('email'))
        if (data.result != "No Data") {
            for (let index = 0; index < data.result.length; index++) {
                darr.push(data.result[index])

            }
            setBookings([...darr])
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Inbox</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Booking System</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Driver</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Inbox</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="mail-inbox">
                                <div className="mobile-left">
                                    <Link to="/" className="btn btn-primary toggle-email-nav"><i className="fa fa-bars"></i></Link>
                                </div>
                                <div className="body mail-left">
                                    <div className="mail-side">
                                        <ul className="nav">
                                            <li className="active"><Link to="/app-inbox"><i className="icon-drawer"></i>Inbox<span className="badge badge-primary float-right"></span></Link></li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="body mail-right check-all-parent">
                                    <div className="mail-list">
                                        {bookings.length > 0 && bookings.map((booking) => (
                                            <ul className="list-unstyled">
                                                <li className="clearfix">
                                                    <div className="md-left">
                                                        <label className="fancy-checkbox">
                                                            <input type="checkbox" name="checkbox" className="checkbox-tick" />
                                                            <span></span>
                                                        </label>
                                                    </div>

                                                    <div className="md-right">
                                                        <img className="rounded" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                                                        <p className="sub">{booking.email}</p>
                                                        <p style={{ fontSize: 18 }} className="dep">{booking.message}</p>
                                                        <span className="time">{booking.date.split("T")[0]}  {booking.time}</span>
                                                    </div>

                                                </li>
                                            </ul>))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default DriverInbox
