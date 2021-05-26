import React, { useState, useEffect } from 'react';
import { getDriverBookings, updateBooking } from '../../service'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Card, Button} from 'react-bootstrap'
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
                {bookings.map((booking) => (
							<Card style={{ fontSize: 16 }} key={booking._id} >
								<Card.Header className="text-center">Client Name : {booking.client} ,  Client Email : {booking.email}</Card.Header>
								<Card.Header className="text-center">Refernce No : {booking._id}</Card.Header>
                                <Card.Body className="text-center">
									<Card.Title >Booking Date : {booking.date.split("T")[0]}    Delivery Date : {booking.DelDate.split("T")[0]}</Card.Title>
									<Card.Text style={{marginTop:20}} className="text-left">
										Departure Address : {booking.fromAddress}
									</Card.Text>
									<Card.Text className="text-left">
										Designation Address : {booking.toAddress}
									</Card.Text>
									<Card.Text className="text-left">
										Booking Time : {booking.time}
									</Card.Text>
									<Card.Text className="text-left">
										Booking Delivery Time : {booking.endTime}
									</Card.Text>
									<Card.Text className="text-left">
										No Of People Required : {booking.peopleReq}
									</Card.Text>
									<Card.Text className="text-left">
										Special Requirements : {booking.specialReq}
									</Card.Text>
									<Card.Text className="text-left">
										Message : {booking.message}
									</Card.Text>
									<Card.Text style={{ display: 'inline-block', marginTop: '-320px' , marginLeft: 450}} className="text-right">
										<b><u>Items to Be Moved</u></b> {booking.items.map((item) => (
											<Card.Text>
												{item}
											</Card.Text>
										))}
									</Card.Text>
								</Card.Body>
								<Card.Footer><Button variant="primary">Print Invoice [PDF]</Button>{booking.clicked ? (booking.accepted ? <p style={{fontWeight:'bold', marginLeft:20}}>Accepted</p> : <p style={{fontWeight:'bold', marginLeft:20}}>Declined</p>) : <><Button variant="primary" onClick={() => accept(booking._id)} style={{ width: 100, backgroundColor: 'green', color: 'white', marginLeft:20 }}>Accept</Button><Button variant="primary" onClick={() => decline(booking._id)} style={{ width: 100, marginLeft: 20, backgroundColor: 'red', color: 'white' }}>Decline</Button></>}</Card.Footer>
							</Card>
						))}
                </div>
            </div>
        </div>
    );

}
export default Dashboard4
