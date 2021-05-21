import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Columnchart from '../common/columnchart';
import Tooltip from '../common/toolTip';
import FormsBasic from '../Form/formsBasic'
import { getDriverBookings, updateBooking, getAllBookings } from '../../service'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function AllDriver() {
	const [view, setView] = useState(true)
	const [bookings, setBookings] = useState([])
	const [clicked, setClicked] = useState(false)
	const [acount,setDacount] = useState(0);
	const [dcount,setDdcount] = useState(0);
	const  [res,setRes] = useState(0)
    const [plans,setPlans] = useState([])

    const searchData = async(value) => {
        console.log(value)
        let darr = []
        let a = 0
        let c = 0
        try {
            const data = await getDriverBookings(value)
            if (data.result != "No Data") {
                setRes(data.result.length)
                for (let index = 0; index < data.result.length; index++) {
                    if (data.result[index].accepted) {
                        a +=1
                    }
                    if (!data.result[index].accepted) {
                        c +=1
                    }
                    darr.push(data.result[index])

                }
                setBookings([...darr])
                setDacount(a)
                setDdcount(c)
            }
            else {
                setRes(0)
            }

        } catch (e) {
            console.log(e)
        }
    }

	const fetchData = async () => {
		let darr = []
		
		try {
			const data = await getAllBookings()
			if (data.result != "No Data") {
                const unique = [...new Set(data.result.map(item => item.driverName))];
				setRes(data.result.length)
				for (let index = 0; index < data.result.length; index++) {
					if(data.result[index].accepted){
						console.log("hello")
						setDacount(prevCount => prevCount +1)
					}
					if(!data.result[index].accepted){
						setDdcount(prevCount => prevCount +1)
					}
					//console.log(data.result[index])
					darr.push(data.result[index])

				}
				setBookings([...darr])
                setPlans([...unique])
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
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Driver</label>
                </div>
                <select onChange={(e) => searchData(e.target.value)} className="custom-select" id="inputGroupSelect01">
                    {plans.map((plan) => (
                        <option value={plan}>{plan}</option>
                    ))}

                </select>
            </div>
			{view ?
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
										</tr>
									)) : <></>}
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
export default AllDriver
