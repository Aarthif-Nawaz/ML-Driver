import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormsBasic from '../Form/formsBasic'
import { getAllBookings, searchPlannerBookings } from '../../service'
import { Card, Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function AllPlans() {
    const [view, setView] = useState(true)
    const [bookings, setBookings] = useState([])
    const [acount, setDacount] = useState(0);
    const [dcount, setDdcount] = useState(0);
    const [res, setRes] = useState(0)
    const [plans, setPlans] = useState([])
    const [search, setSearch] = useState('')
    const [type, setType] = useState('_id')

    const history = useHistory()

    const viewData = (type,email) => {
        if (type == "Calender"){
            history.push({
                pathname: '/plan-calender',
                state: {email: email}
            })
        }
        else{
            history.push({
                pathname: '/planner-inbox',
                state: {email: email}
            })
        }
    }

    const searchData = async (type, value) => {
        console.log(value)
        let darr = []
        let a = 0
        let c = 0
        if (type == "all"){
            fetchData()
        }
        else{
            try {
                const data = await searchPlannerBookings(type,value)
                if (data.result != "No Data") {
                    console.log(data.result)
                    setRes(data.result.length)
                    for (let index = 0; index < data.result.length; index++) {
                        if (data.result[index].accepted) {
                            a += 1
                        }
                        if (!data.result[index].accepted) {
                            c += 1
                        }
                        darr.push(data.result[index])
    
                    }
                    setBookings([...darr])
                    setDacount(a)
                    setDdcount(c)
                }
                else {
                    setRes(0)
                    setBookings([])
                    setDacount(0)
                    setDdcount(0)
                }
    
            } catch (e) {
                console.log(e)
            }
        }
        
    }

    const fetchData = async () => {
        let darr = []
        try {
            const data = await getAllBookings()
            if (data.result != "No Data") {
                const unique = [...new Set(data.result.map(item => item.email))];
                setRes(data.result.length)
                for (let index = 0; index < data.result.length; index++) {
                    if (data.result[index].accepted) {
                        setDacount(prevCount => prevCount + 1)
                    }
                    if (!data.result[index].accepted) {
                        setDdcount(prevCount => prevCount + 1)
                    }
                    darr.push(data.result[index])

                }
                setBookings([...darr])
                setPlans([...unique])
            }
            else {
                setRes(0)
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

            <div className="input-group mb-3">
                <input style={{width: 200}} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Value" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                
                <select style={{width: 200, marginLeft: 25}} value={type} onChange={(e) => setType(e.target.value)} id="inputGroupSelect01">
                    <option value={"all"}>All Planners</option>
                    <option value={"_id"}>Ref No</option>
                    <option value={"firstName"}>Planner First Name</option>
                    <option value={"email"}>Planner Email</option>
                </select>
                <Button style={{marginLeft: 25}} variant="primary" onClick={() => searchData(type, search)}>Seacrch</Button>
            </div>

            {view ?
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                        {bookings.map((booking) => (
                            <Card style={{ fontSize: 16 }} key={booking._id} >
                                <Card.Header className="text-center">Client Name : {booking.client}</Card.Header>
                                <Card.Header className="text-center">Refernce No : {booking._id}</Card.Header>
                                <Card.Body className="text-center">
                                    <Card.Title>Booking Date : {booking.date.split("T")[0]}    Delivery Date : {booking.DelDate.split("T")[0]}</Card.Title>
                                    <Card.Text className="text-left">
                                        Planner Email : {booking.email}
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Driver Email : {booking.driverName}
                                    </Card.Text>
                                    <Card.Text className="text-left">
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
                                    <Card.Text style={{ display: 'inline-block', marginTop: '-320px' }} className="text-right">
                                        <b><u>Items to Be Moved</u></b> {booking.items.map((item) => (
                                            <Card.Text>
                                                {item}
                                            </Card.Text>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer><Button style={{margin:25}} variant="primary" onClick={() => viewData("Calender",booking.email)}>View Planner Calender</Button><Button style={{margin:25}} onClick={() => viewData("Email",booking.email)} variant="primary">View Planner Email</Button></Card.Footer>
                            </Card>
                        ))}
                    </div>
                </div> :
                <FormsBasic />
            }
        </div>
    );

}
export default AllPlans
