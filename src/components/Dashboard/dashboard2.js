import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreatedPlanner from '../Form/createPlanner';
import CreateDriver from '../Form/createDriver'
import { getUsers, userDelete } from '../../service'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Dashboard2() {
	const [create, setCreate] = useState(false)
	const [drivers, setDrivers] = useState([])
	const [planners, setPlanners] = useState([])
	const history = useHistory()

	const fetchData = async () => {
		let darr = []
		let parr = []
		const data = await getUsers()
		for (let index = 0; index < data.result.length; index++) {
			if (data.result[index].type == "driver") {
				darr.push(data.result[index])
			}
			else {
				parr.push(data.result[index])
			}

		}
		setDrivers([...darr])
		setPlanners([...parr])
	}

	useEffect(() => {
		fetchData()
	}, [])

	const updateDriver = (id) => {
		history.push({
			pathname: '/update-driver',
			state: { id: id }
		})
	}


	const updatePlanner = (id) => {
		history.push({
			pathname: '/update-planner',
			state: { id: id }
		})
	}

	const deleteUser = async(_id) => {
		const data = await userDelete({ _id })
		if (data.result == "Success") {
			toast.success('Successfully Deleted User ', {
				position: toast.POSITION_TOP_RIGHT,
			});
			fetchData()
		}
	}

	const createDriver = () => {
		setCreate(true)
	}

	const CreatePlanner = () => {
		setCreate(false)
	}

	return (
		<div className="container-fluid">
			<div className="block-header">
				<div className="row clearfix">
					<div className="col-md-6 col-sm-12">
						<h1>Admin</h1>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">Booking System</Link></li>
								<li className="breadcrumb-item active" aria-current="page">Admin</li>
							</ol>
						</nav>
					</div>
					<div className="col-md-6 col-sm-12 text-right hidden-xs">
						<span onClick={createDriver} className="btn btn-sm btn-primary mr-1" title="">Driver</span>
						<span onClick={CreatePlanner} className="btn btn-sm btn-primary mr-1" title="">Planner</span>
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
									<h5 className="mb-0">{drivers.length}</h5>
									<small className="text-muted">Drivers</small>
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
									<h5 className="mb-0">{planners.length}</h5>
									<small className="text-muted">Planners</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{create ?
				<div>
					<div className="header">
						<h2> Create Driver </h2>
					</div>
					<CreateDriver />
					<div className="header">
						<h2> View Driver </h2>
					</div>
					<div className="col-12">
						<div className="table-responsive">
							<table className="table table-hover table-custom spacing8">
								<thead>
									<tr>
										<th>Firt Name</th>
										<th>Last Name</th>
										<th>Address</th>
										<th>Email</th>
										<th>Age</th>
										<th>Gender</th>
										<th>Vehicle Type</th>
										<th>Vehicle Name</th>
										<th>Vehicle Licesne Plate</th>
										<th>Vehicle Number</th>
										<th>Update</th>
										<th>Delete</th>
									</tr>
								</thead>
								<tbody>
									{drivers.map((driver) => (
										<tr>
											<td className="w60">
												{driver.firstName}
											</td>
											<td className="w60">
												{driver.lastName}
											</td>
											<td>
												{driver.address}
											</td>
											<td>
												{driver.email}
											</td>
											<td>{driver.age}</td>
											<td>{driver.gender}</td>
											<td>{driver.vType}</td>
											<td>{driver.carname}</td>
											<td>{driver.license}</td>
											<td>{driver.number}</td>
											
											<td><button onClick={() => updateDriver(driver._id)} style={{ width: 70, backgroundColor: 'green', color: 'white' }}>Update</button></td>
											<td><button onClick={() => deleteUser(driver._id)} style={{ width: 70, backgroundColor: 'green', color: 'white' }}>Delete</button></td>
										</tr>
									))}


								</tbody>
							</table>
						</div>
					</div>
				</div> :
				<div>
					<div className="header">
						<h2> Create Planner </h2>
					</div>
					<CreatedPlanner />
					<div className="header">
						<h2> View Planner </h2>
					</div>
					<div className="col-12">
						<div className="table-responsive">
							<table className="table table-hover table-custom spacing8">
								<thead>
									<tr>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Address</th>
										<th>Email</th>
										<th>Age</th>
										<th>Gender</th>
										<th>Update</th>
										<th>Delete</th>
									</tr>
								</thead>
								<tbody>
									{planners.map((planner) => (
										<tr>
											<td className="w60">
												{planner.firstName}
											</td>
											<td className="w60">
												{planner.lastName}
											</td>
											<td>
												{planner.address}
											</td>
											<td>
												{planner.email}
											</td>
											<td>{planner.age}</td>
											<td>{planner.gender}</td>
											<td><button onClick={() => updatePlanner(planner._id)} style={{ width: 70, backgroundColor: 'green', color: 'white' }}>Update</button></td>
											<td><button onClick={() => deleteUser(planner._id)} style={{ width: 70, backgroundColor: 'green', color: 'white' }}>Delete</button></td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			}
		</div>
	);

}
export default Dashboard2;
