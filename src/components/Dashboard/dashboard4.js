import React, { useState, useEffect } from 'react';
import { getDriverBookings, updateBooking } from '../../service'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Dashboard4(props) {
    const [bookings, setBookings] = useState([])
    const [clicked,setClicked] = useState(false)

    const fetchData = async () => {
        let darr = []
        try {
            const data = await getDriverBookings(localStorage.getItem('email'))
            if (data.result != "No Data") {
                for (let index = 0; index < data.result.length; index++) {
                    if (data.result[index]._id == props.location.state.id) {
                        console.log(data.result[index])
                        darr.push(data.result[index])
                    }


                }
                setBookings([...darr])
            }
        } catch (e) {
            console.log(e)
        }


    }

    const accept = async (id) => {
        const data = await updateBooking({ id: id, clicked: true, accepted: true })
        console.log(data['result'])
        toast.success("Accepted", {
            position: toast.POSITION_TOP_RIGHT,
        });
        setClicked(true)
    }

    const decline = async (id) => {
        const data = await updateBooking({ id: id, clicked: true, accepted: false })
        console.log(data['result'])
        toast.success("Declined", {
            position: toast.POSITION_TOP_RIGHT,
        });
        setClicked(true)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="container-fluid">
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12">
                    <div className="table-responsive">
                        <table className="table table-hover table-custom spacing5">
                            <thead>
                                <tr>
                                    <th>Client Name</th>
                                    <th>Client Email</th>
                                    <th>From Address</th>
                                    <th>To Address</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.length > 0 ? bookings.map((booking) => (
                                    <tr>
                                        <td>{booking.client}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.fromAddress}</td>
                                        <td>{booking.toAddress}</td>
                                        <td>{booking.date.split("T")[0]}</td>
                                        <td>{booking.time}</td>
                                        <td>{booking.clicked ? (booking.accepted ? "Accepted" : "Declined") : <><button onClick={() => accept(booking._id)} style={{ width: 70, backgroundColor: 'green', color: 'white' }}>Accept</button><button onClick={() => decline(booking._id)} style={{ width: 70, marginLeft: 20, backgroundColor: 'red', color: 'white' }}>Decline</button></>}</td>
                                    </tr>
                                )) : <></>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Dashboard4
