import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../common/dropdown';
import Datepicker from '../common/datepicker';
import { saveBooking, getUsers, getPlansById, plannerUpdateDetails } from '../../service'
import TimePicker from 'react-time-picker';
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectItems from './selectItems'

toast.configure();

function FormsBasic(props) {
    const [special, setSpecial] = useState('')
    const [time, onTimeChange] = useState('10:00');
    const [endtime, onEndTimeChange] = useState('12:00');
    const [drivers, setDrivers] = useState([])
    const [driver, setDriver] = useState('')
    const [client, setClient] = useState('')
    const [people, setPeople] = useState('')
    const [fromAddress, setFromAddress] = useState('')
    const [toAddress, settoAddress] = useState('')
    const [date, setDate] = useState(new Date())
    const [deldate, setDelDate] = useState(new Date())
    const [message, setMessage] = useState('')
    const [update, setUpdate] = useState(false)
    const [items, setItems] = useState([])
    const [data, setData] = useState({
        armChair: {
            type: "Arm Chair",
            count: 0,
            action: "",
        },
        Bags: {
            type: "Bags",
            count: 0,
            action: "",
        },
        BookCase: {
            type: "BookCase",
            count: 0,
            action: "",
        },
        DiningChair: {
            type: "Dining Chair",
            count: 0,
            action: "",
        },
        DiningTable: {
            type: "Dining Table",
            count: 0,
            action: "",
        },
        Cabinet: {
            type: "Cabinet",
            count: 0,
            action: "",
        },
        Mirror: {
            type: "Mirror",
            count: 0,
            action: "",
        },
        SideBoard: {
            type: "Side Board",
            count: 0,
            action: "",
        },
        Piano: {
            type: "Piano",
            count: 0,
            action: "",
        },
        Table: {
            type: "Table",
            count: 0,
            action: "",
        },
        Sofa: {
            type: "Sofa",
            count: 0,
            action: "",
        },
        TV: {
            type: "TV",
            count: 0,
            action: "",
        },
        Bureu: {
            type: "Bureu",
            count: 0,
            action: "",
        },
        cdTower: {
            type: "Cd Tower",
            count: 0,
            action: "",
        },
        Speaker: {
            type: "Speaker",
            count: 0,
            action: "",
        },
        Rug: {
            type: "Rug",
            count: 0,
            action: "",
        },
        VaccumCleaner: {
            type: "Vaccum Cleaner",
            count: 0,
            action: "",
        },
        Lamp: {
            type: "Lamp",
            count: 0,
            action: "",
        },
        WelshDresser: {
            type: "Welsh Dresser",
            count: 0,
            action: "",
        },
        Bed: {
            type: "Bed",
            count: 0,
            action: "",
        },
        BedBunk: {
            type: "Bed Bunk",
            count: 0,
            action: "",
        },
        BedFrame: {
            type: "Bed Frame",
            count: 0,
            action: "",
        },
        BoxedAlready: {
            type: "Boxed Already",
            count: 0,
            action: "",
        },
        Drawers: {
            type: "Drawers",
            count: 0,
            action: "",
        },
        BedMirror: {
            type: "Bed Mirror",
            count: 0,
            action: "",
        },
        DressingTable: {
            type: "Dressing Table",
            count: 0,
            action: "",
        },
        Wardrobe: {
            type: "Wardrobe",
            count: 0,
            action: "",
        },
        ClothesBasket: {
            type: "Clothes Basket",
            count: 0,
            action: "",
        },
        SuitCases: {
            type: "SuitCases",
            count: 0,
            action: "",
        },
        BedSideTable: {
            type: "Bed SideTable",
            count: 0,
            action: "",
        },
        Shelf: {
            type: "Shelf",
            count: 0,
            action: "",
        },
        Ottoman: {
            type: "Ottoman",
            count: 0,
            action: "",
        },
        Chest: {
            type: "Chest",
            count: 0,
            action: "",
        },
        Desk: {
            type: "Desk",
            count: 0,
            action: "",
        },
        OfficeChair: {
            type: "Office Chair",
            count: 0,
            action: "",
        },
        Stand: {
            type: "TV Stand",
            count: 0,
            action: "",
        },
        Bin: {
            type: "Bin",
            count: 0,
            action: "",
        },
        DishWasher: {
            type: "Dish Washer",
            count: 0,
            action: "",
        },
        FrideFreezer: {
            type: "Fride Freezer",
            count: 0,
            action: "",
        }
    })

    const history = useHistory()



    const fetchData = async () => {
        var action = props.location.state.action
        let darr = []
        if (action == "Update") {
            const id = props.location.state.id
            const data = await getPlansById(id)
            setUpdate(true)
            setDriver(data.result.driverName)
            setClient(data.result.client)
            setFromAddress(data.result.fromAddress)
            setItems(data.result.items)
            setData(data.result.data)
            setPeople(data.result.peopleReq)
            setDelDate(new Date(data.result.DelDate))
            setSpecial(data.result.specialReq)
            settoAddress(data.result.toAddress)
            setDate(new Date(data.result.date))
            setMessage(data.result.message)

        }
        const data = await getUsers()
        for (let index = 0; index < data.result.length; index++) {
            if (data.result[index].type == "driver") {
                darr.push(data.result[index])
            }
        }
        setDrivers([...darr])

    }


    useEffect(() => {
        setDate(props.location.state.date)
        setDelDate(props.location.state.date)
        fetchData()
    }, [])

    const save = async () => {
        if (update) {
            let arr = []
            const id = props.location.state.id
            if (data) {
                for (var key in data) {
                    if (data[key].count > 0) {
                        arr.push(data[key].count + " X " + key)
                    }
                }
                const response = await plannerUpdateDetails({ _id: id, DelDate: deldate, endTime: endtime, peopleReq: people, specialReq: special, items: arr, data, driver, time, client, fromAddress, toAddress, date, message })
                if (response['result'] == "Success") {
                    setItems([])
                    history.push('/plan-calender')
                }
            }
            else {
                toast.warn('Plese Add Items', {
                    position: toast.POSITION_TOP_RIGHT,
                });
            }
        } else {
            let arr = []
            if (data) {
                for (var key in data) {
                    if (data[key].count > 0) {
                        arr.push(data[key].count + " X " + key)
                    }
                }
                console.log(arr)
                const response = await saveBooking({ email: localStorage.getItem('email'), DelDate: deldate, endTime: endtime, peopleReq: people, specialReq: special, items: arr, data, driver, time, client, fromAddress, toAddress, date, message })
                if (response['result'] == "success") {
                    setItems([])
                    history.push('/plan-calender')
                }

            }
            else {
                toast.warn('Plese Add Items', {
                    position: toast.POSITION_TOP_RIGHT,
                });
            }

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
                                    <select value={driver} onChange={(e) => setDriver(e.target.value)} className="custom-select" id="inputGroupSelect01">
                                        <option value>Choose...</option>
                                        {drivers.map((driver) => (
                                            <option value={driver.email}>{driver.firstName}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <input value={client} onChange={(e) => setClient(e.target.value)} type="text" className="form-control" placeholder="Full Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">John DOe</span>
                                    </div>
                                </div>


                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Current Address</span>
                                    </div>
                                    <textarea rows={8} value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Destination Address</span>
                                    </div>
                                    <textarea rows={8} value={toAddress} onChange={(e) => settoAddress(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
                                </div>

                                <div>
                                    <label>Booking Date (dd/mm/yyyy)</label>
                                    <div className="input-group mb-3">
                                        <Datepicker selected={date} onChange={date => setDate(date)} className="form-control" />
                                    </div>
                                    <label>Delivery Date (dd/mm/yyyy)</label>
                                    <div className="input-group mb-3">
                                        <Datepicker selected={deldate} onChange={date => setDelDate(date)} className="form-control" />
                                    </div>
                                    <label>Booking Start Time (HH:MM:SS)</label>
                                    <div className="input-group mb-3">
                                        <TimePicker clearIcon={"Clear"} clockIcon={"Clock"} format={"h:m:s a"} onChange={onTimeChange} value={time} />
                                    </div>
                                    <label>Booking End Time (HH:MM:SS)</label>
                                    <div className="input-group mb-3">
                                        <TimePicker clearIcon={"Clear"} clockIcon={"Clock"} format={"h:m:s a"} onChange={onEndTimeChange} value={endtime} />
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input value={people} onChange={(e) => setPeople(e.target.value)} type="num" className="form-control" placeholder="People Required" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">2</span>
                                    </div>
                                </div>

                                <div className="input-group mb-4">
                                    {/* <SelectItems saveItems={saveItems} /> */}
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>  <input value={data.armChair.count} onChange={e => setData({ ...data, armChair: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Arm Chair</span>
                                                    </td>
                                                    <td> <input value={data.Bags.count} onChange={e => setData({ ...data, Bags: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Bags</span></td>
                                                    <td><input value={data.BookCase.count} onChange={e => setData({ ...data, BookCase: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>BookCase</span></td>
                                                    <td><input value={data.DiningChair.count} onChange={e => setData({ ...data, DiningChair: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Dining Chair</span></td>

                                                    <td><input value={data.DiningTable.count} onChange={e => setData({ ...data, DiningTable: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Dining Table</span></td>
                                                </tr>
                                                <tr>
                                                    <td><input value={data.Cabinet.count} onChange={e => setData({ ...data, Cabinet: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Cabinet</span></td>
                                                    <td><input value={data.Mirror.count} onChange={e => setData({ ...data, Mirror: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Mirror</span></td>
                                                    <td><input value={data.SideBoard.count} onChange={e => setData({ ...data, SideBoard: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Side Board</span></td>
                                                    <td><input value={data.Piano.count} onChange={e => setData({ ...data, Piano: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Piano</span></td>
                                                    <td><input value={data.Table.count} onChange={e => setData({ ...data, Table: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Table</span></td>
                                                </tr>
                                                <tr>
                                                    <td><input value={data.Sofa.count} onChange={e => setData({ ...data, Sofa: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Sofa</span></td>
                                                    <td><input value={data.TV.count} onChange={e => setData({ ...data, TV: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>TV</span>
                                                    </td>
                                                    <td><input value={data.Bureu.count} onChange={e => setData({ ...data, Bureu: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Bureu</span></td>
                                                    <td><input value={data.cdTower.count} onChange={e => setData({ ...data, cdTower: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>CD TOWER</span></td>
                                                    <td><input value={data.Speaker.count} onChange={e => setData({ ...data, Speaker: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Speaker</span></td>
                                                </tr>
                                                <tr>
                                                    <td><input value={data.Rug.count} onChange={e => setData({ ...data, Rug: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Rug</span>
                                                    </td>
                                                    <td><input value={data.VaccumCleaner.count} onChange={e => setData({ ...data, VaccumCleaner: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Vac Cleaner</span></td>
                                                    <td><input value={data.Lamp.count} onChange={e => setData({ ...data, Lamp: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Lamp</span></td>
                                                    <td><input value={data.WelshDresser.count} onChange={e => setData({ ...data, WelshDresser: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Wel Dress</span></td>
                                                    <td><input value={data.Bed.count} onChange={e => setData({ ...data, Bed: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Bed</span></td>
                                                </tr>
                                                <tr>
                                                    <td><input value={data.BedBunk.count} onChange={e => setData({ ...data, BedBunk: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Bed Bunk</span></td>
                                                    <td><input value={data.BedFrame.count} onChange={e => setData({ ...data, BedFrame: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Bed Frame</span>
                                                    </td>
                                                    <td><input value={data.BoxedAlready.count} onChange={e => setData({ ...data, BoxedAlready: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Boxed Aldy</span></td>
                                                    <td><input value={data.Drawers.count} onChange={e => setData({ ...data, Drawers: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Drawers</span>
                                                    </td>
                                                    <td><input value={data.BedMirror.count} onChange={e => setData({ ...data, BedMirror: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Bed Mirror</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input value={data.DressingTable.count} onChange={e => setData({ ...data, DressingTable: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Dressing Table</span>
                                                    </td>
                                                    <td><input value={data.Wardrobe.count} onChange={e => setData({ ...data, Wardrobe: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Wardrobe</span></td>
                                                    <td><input value={data.ClothesBasket.count} onChange={e => setData({ ...data, ClothesBasket: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 3, fontWeight: 'bold' }}>Cloth Basket</span></td>
                                                    <td><input value={data.SuitCases.count} onChange={e => setData({ ...data, SuitCases: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>SuitCases</span></td>
                                                    <td><input value={data.BedSideTable.count} onChange={e => setData({ ...data, BedSideTable: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Bed Side Table</span></td>
                                                </tr>
                                                <tr>
                                                    <td> <input value={data.Shelf.count} onChange={e => setData({ ...data, Shelf: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Shelf</span></td>
                                                    <td><input value={data.Ottoman.count} onChange={e => setData({ ...data, Ottoman: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Ottoman</span></td>
                                                    <td><input value={data.Chest.count} onChange={e => setData({ ...data, Chest: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Chest</span></td>
                                                    <td> <input value={data.Desk.count} onChange={e => setData({ ...data, Desk: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Desk</span></td>
                                                    <td><input value={data.OfficeChair.count} onChange={e => setData({ ...data, OfficeChair: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Office Chair</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><input value={data.Stand.count} onChange={e => setData({ ...data, Stand: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Stand</span></td>
                                                    <td><input value={data.Bin.count} onChange={e => setData({ ...data, Bin: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Bin</span></td>
                                                    <td> <input value={data.DishWasher.count} onChange={e => setData({ ...data, DishWasher: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 3, fontWeight: 'bold' }}>Dish Washer</span></td>
                                                    <td><input value={data.FrideFreezer.count} onChange={e => setData({ ...data, FrideFreezer: { count: e.target.value } })} style={{ marginLeft: 10, height: 40, width: 60 }} type="num" placeholder="Count" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        <span style={{ marginTop: 10, fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>Fridge Freezer</span></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Special Requirements</span>
                                    </div>
                                    <textarea value={special} onChange={(e) => setSpecial(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Message</span>
                                    </div>
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" aria-label="With textarea"></textarea>
                                </div>

                                <span style={{ marginTop: 20 }} onClick={save} className="btn btn-sm btn-primary mr-1" title="">{update ? "Update Booking" : "Save Booking"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default FormsBasic
