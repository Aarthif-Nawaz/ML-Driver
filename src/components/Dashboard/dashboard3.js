import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Columnchart from '../common/columnchart';
import Tooltip from '../common/toolTip';
import FormsBasic from '../Form/formsBasic'
import { getDriverBookings, updateBooking } from '../../service'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Card, Button} from 'react-bootstrap'

toast.configure();
function Dashboard3() {
	const [view, setView] = useState(true)
	const [bookings, setBookings] = useState([])
	const [clicked, setClicked] = useState(false)
	const [acount, setDacount] = useState(0);
	const [dcount, setDdcount] = useState(0);
	const [res, setRes] = useState(0)
	const fetchData = async () => {
		let darr = []

		try {
			const data = await getDriverBookings(localStorage.getItem('email'))
			if (data.result != "No Data") {
				setRes(data.result.length)
				for (let index = 0; index < data.result.length; index++) {
					if (data.result[index].accepted) {
						console.log("hello")
						setDacount(prevCount => prevCount + 1)
					}
					if (!data.result[index].accepted) {
						setDdcount(prevCount => prevCount + 1)
					}
					//console.log(data.result[index])
					darr.push(data.result[index])

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

	const createBooking = () => {
		setView(false)
	}

	const viewBooking = () => {
		setView(true)
	}
	return (
		<div className="container-fluid">
			<div className="block-header">
				<div className="row clearfix">
					<div className="col-md-6 col-sm-12">
						<h1>Driver</h1>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">Booking System</Link></li>
								<li className="breadcrumb-item active" aria-current="page">Driver</li>
							</ol>
						</nav>
					</div>
					<div className="col-md-6 col-sm-12 text-right hidden-xs">
						<span onClick={viewBooking} className="btn btn-sm btn-primary mr-1" title="">View Bookings</span>
					</div>
				</div>

			</div>
			<div className="row clearfix">
				<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div className="card">
						<div className="body">
							<div className="row clearfix">
								<div className="col-7">
									<h5 className="mb-0">0</h5>
									<small className="text-muted">Announcements</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div className="card">
						<div className="body">
							<div className="row clearfix">
								<div className="col-7">
									<h5 className="mb-0">{res}</h5>
									<small className="text-muted">Reservations</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div className="card">
						<div className="body">
							<div className="row clearfix">
								<div className="col-7">
									<h5 className="mb-0">{acount}</h5>
									<small className="text-muted">Acceptance</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<div className="card">
						<div className="body">
							<div className="row clearfix">
								<div className="col-7">
									<h5 className="mb-0">{dcount}</h5>
									<small className="text-muted">Declines</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{view ?
				<div className="row clearfix">
					<div className="col-lg-12 col-md-12">
						{/* <div className="table-responsive">
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
							</table> */}
						{/* </div> */}
						{bookings.map((booking) => (
							<Card style={{ fontSize: 16 }} key={booking._id} >
								<Card.Header className="text-center">Client Name : {booking.client} , Client Email : {booking.email}</Card.Header>
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
				</div> :
				<FormsBasic />
			}
		</div>
	);

}
export default Dashboard3
