import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../common/dropdown';
import Datepicker from '../common/datepicker';
import { saveBooking, getUsers } from '../../service'
import TimePicker from 'react-time-picker';
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function FormsBasic() {
    const [time, onTimeChange] = useState('10:00');
    const [drivers, setDrivers] = useState([])
    const [driver, setDriver] = useState('')
    const [client, setClient] = useState('')
    const [fromAddress, setFromAddress] = useState('')
    const [toAddress, settoAddress] = useState('')
    const [date, setDate] = useState(new Date())
    const [message, setMessage] = useState('')

    const history = useHistory()

    const fetchData = async () => {

        let darr = []
        const data = await getUsers()
        for (let index = 0; index < data.result.length; index++) {
            if (data.result[index].type == "driver") {
                darr.push(data.result[index])
            }


        }
        setDrivers([...darr])

    }


    useEffect(() => {
        fetchData()
    }, [])

    const save = async () => {
        const response = await saveBooking({ email: localStorage.getItem('email'), driver, time, client, fromAddress, toAddress, date, message })
        if (response['result'] == "success") {
            toast.success("Saved Bookings Successfully", {
                position: toast.POSITION_TOP_RIGHT,
            });
        }
    }


    return (
        <>
            <div className="container-fluid">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2> Create Booking </h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-12">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-custom spacing5">
                                            <thead>
                                                <tr>
                                                    <th>Driver Name</th>
                                                    <th>Driver Age</th>
                                                    <th>Driver Gender</th>
                                                    <th>Driver Vehicle Type</th>
                                                    <th>Driver Car Name</th>
                                                    <th>Driver License</th>
                                                    <th>Driver Number Plate</th>
                                                    <th>Driver Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {drivers.map((driver) => (
                                                    <tr>
                                                        <td>{driver.firstName + " " + driver.lastName}</td>
                                                        <td>{driver.age}</td>
                                                        <td>{driver.gender}</td>
                                                        <td>{driver.vType}</td>
                                                        <td>{driver.carname}</td>
                                                        <td>{driver.license}</td>
                                                        <td>{driver.number}</td>
                                                        <td>{driver.address}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Driver</label>
                                    </div>
                                    <select onChange={(e) => setDriver(e.target.value)} className="custom-select" id="inputGroupSelect01">
                                        <option value>Choose...</option>
                                        {drivers.map((driver) => (
                                            <option value={driver.email}>{driver.email}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <input onChange={(e) => setClient(e.target.value)} type="text" className="form-control" placeholder="Full Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">Aarthif Nawaz</span>
                                    </div>
                                </div>


                                <div className="input-group mb-3">
                                    <input onChange={(e) => setFromAddress(e.target.value)} type="text" className="form-control" placeholder="From Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">123/3, Anderson Road, Dehiwela</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input onChange={(e) => settoAddress(e.target.value)} type="text" className="form-control" placeholder="To Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">123/3, Pokuna Road, Dehiwela</span>
                                    </div>
                                </div>

                                <div>
                                    <label>Booking Date (dd/mm/yyyy)</label>
                                    <div className="input-group mb-3">
                                        <Datepicker selected={date} onChange={date => setDate(date)} className="form-control" />
                                    </div>
                                    <label>Booking Time (HH:MM:SS)</label>
                                    <div className="input-group mb-3">
                                        <TimePicker clearIcon={"Clear"} clockIcon={"Clock"} format={"h:m:s a"} onChange={onTimeChange} value={time} />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Message</span>
                                    </div>
                                    <textarea onChange={(e) => setMessage(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
                                </div>

                                <span style={{ marginTop: 20 }} onClick={save} className="btn btn-sm btn-primary mr-1" title="">Save Booking</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default FormsBasic