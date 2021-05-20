import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Columnchart from '../common/columnchart';
import Tooltip from '../common/toolTip';
import FormsBasic from '../Form/formsBasic'
import { getBookings } from '../../service'

function Dashboard() {
	const [view, setView] = useState(true)
	const [bookings, setBookings] = useState([])
	const [acount,setDacount] = useState(0);
	const [dcount,setDdcount] = useState(0);
	const [res,setRes] = useState(0)
	const fetchData = async () => {
		let darr = []
		try {
			const data = await getBookings(localStorage.getItem('email'))
			setRes(data.result.length)
			if (data.result != "No Data"){
				for (let index = 0; index < data.result.length; index++) {
					if(data.result[index].accepted){
						setDacount(prevCount => prevCount +1)
					}
					if(!data.result[index].accepted){
						setDdcount(prevCount => prevCount +1)
					}
					darr.push(data.result[index])
	
				}
				setBookings([...darr])
			}
			
		} catch (e) {
			console.log(e)
		}


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
						<h1>Planner</h1>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">Booking System</Link></li>
								<li className="breadcrumb-item active" aria-current="page">Planner</li>
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
						<div className="table-responsive">
							<table className="table table-hover table-custom spacing5">
								<thead>
									<tr>
										<th>Driver Email</th>
										<th>From Address</th>
										<th>To Address</th>
										<th>Date</th>
										<th>Time</th>
										<th>Accepted</th>
									</tr>
								</thead>
								<tbody>
									{bookings.length > 0 && bookings.map((booking) => (
										<tr>
											<td>{booking.driverName}</td>
											<td>{booking.fromAddress}</td>
											<td>{booking.toAddress}</td>
											<td>{booking.date.split("T")[0]}</td>
											<td>{booking.time}</td>
											<td>{booking.accepted ? "Driver Has Accepted" : "Driver Has Not Accepted Yet"}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div> :
				<FormsBasic />
			}
		</div>
	);

}
export default Dashboard
