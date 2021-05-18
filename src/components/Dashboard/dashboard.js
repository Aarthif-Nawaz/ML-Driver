import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Columnchart from '../common/columnchart';
import Tooltip from '../common/toolTip';
import FormsBasic from '../Form/formsBasic'
import {getBookings} from '../../service'

function Dashboard() {
	const [view,setView] = useState(true)
	const [bookings,setBookings] = useState([])

	const fetchData = async () => {
		let darr = []
		const data = await getBookings(localStorage.getItem('email'))
		for (let index = 0; index < data.result.length; index++) {
			darr.push(data.result[index])
			
		}
		setBookings([...darr])
		
	}
    

    useEffect(() => {
        fetchData()
    },[])

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
						<span onClick={createBooking} className="btn btn-sm btn-primary mr-1" title="">Create Booking</span>
						<span onClick={viewBooking} className="btn btn-sm btn-primary mr-1" title="">View Bookings</span>
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
								{bookings.map((booking) => (
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
				<FormsBasic/>
			}
		</div>
	);

}
export default Dashboard
