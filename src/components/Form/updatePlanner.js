import React, {useState, useEffect} from 'react';
import {plannerUpdate, getUserById} from '../../service'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function UpdatePlanner (props) {
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [age,setAge] = useState('')
    const [gender,setGender] = useState('')
    const [address,setAddress] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const id = props.location.state.id
    
    useEffect( async () => {
        const data  = await getUserById(id)
        setFname(data['result'].firstName)
        setLname(data['result'].lastName)
        setAge(data['result'].age)
        setGender(data['result'].gender)
        setAddress(data['result'].address)
        setEmail(data['result'].email)
        setPassword(data['result'].password)
    },[])

    const saveData = async (e) => {
        e.preventDefault()
        if (!fname.trim().length || !lname.trim().length || !age.trim().length || !gender.trim().length || !address.trim().length || !email.trim().length || !password.trim().length){
            console.log('Fill in all fields')
        }
        else{
            console.log(fname)
            const data = await plannerUpdate({ _id: id,fname,lname,age,gender,address,email,password})
            console.log(data)
            toast.success(`Saved Updated Planner ${fname + " " + lname}`, {
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
                            <div className="body">
                                <div className="input-group mb-3">
                                    <input value={fname} type="text" onChange={(e) => setFname(e.target.value)} className="form-control" placeholder="First Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">John</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input value={lname} type="text" onChange={(e) => setLname(e.target.value)} className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">Doe</span>
                                    </div>
                                </div>


                                <div className="input-group mb-3">
                                    <input value={age} type="num" min={1} max={150} onChange={(e) => setAge(e.target.value)} className="form-control" placeholder="Age" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">20</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
                                    </div>
                                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="custom-select" id="inputGroupSelect01">
                                        <option value>Choose...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Rather Not To Say">Rather Not To Say</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">123/3, Anderson Road , Cambridge</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">johndoe@gmail.com</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">*****</span>
                                    </div>
                                </div>

                                <span onClick={saveData} style={{ marginTop: 20 }} className="btn btn-sm btn-primary mr-1" title="">Update Planner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default UpdatePlanner;
