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
										<th>Name</th>
										<th>Address</th>
										<th>Email</th>
										<th>Age</th>
										<th>Gender</th>
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
											<td>
												{driver.address}
											</td>
											<td>
												{driver.email}
											</td>
											<td>{driver.age}</td>
											<td>{driver.gender}</td>
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
										<th>Name</th>
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
