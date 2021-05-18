import React, {useState} from 'react';
import {signup} from '../../service'

function CreateDriver () {
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [age,setAge] = useState('')
    const [vType,setVtype] = useState('')
    const [carName,setCarName] = useState('')
    const [license,setLisence] = useState('')
    const [number,setNumber] = useState('')
    const [gender,setGender] = useState('')
    const [address,setAddress] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    

    const saveData = async (e) => {
        e.preventDefault()
        if (!vType.trim().length || !carName.trim().length || !license.trim().length || !number.trim().length || !fname.trim().length || !lname.trim().length || !age.trim().length || !gender.trim().length || !address.trim().length || !email.trim().length || !password.trim().length){
            console.log('Fill in all fields')
        }
        else{
            console.log(fname)
            const data = await signup({fname,lname,age,gender,vType,carName,license,number,address,email,password, type: 'driver'})
            console.log(data)
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
                                    <input type="text" onChange={(e) => setFname(e.target.value)} className="form-control" placeholder="First Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">Aarthif</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" onChange={(e) => setLname(e.target.value)} className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">Nawaz</span>
                                    </div>
                                </div>


                                <div className="input-group mb-3">
                                    <input type="num" min={1} max={150} onChange={(e) => setAge(e.target.value)} className="form-control" placeholder="Age" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">20</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
                                    </div>
                                    <select onChange={(e) => setGender(e.target.value)} className="custom-select" id="inputGroupSelect01">
                                        <option value>Choose...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Rather Not To Say">Rather Not To Say</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Vehicle Type</label>
                                    </div>
                                    <select onChange={(e) => setVtype(e.target.value)} className="custom-select" id="inputGroupSelect01">
                                        <option value>Choose...</option>
                                        <option value="Car">Car</option>
                                        <option value="Van">Van</option>
                                        <option value="Lorry">Lorry</option>
                                    </select>
                                </div>

                                <div className="input-group mb-3">
                                    <input onChange={(e) => setCarName(e.target.value)} type="text" className="form-control" placeholder="Vehicle Name" aria-label="Address" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">Ford Transit</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input onChange={(e) => setLisence(e.target.value)} type="text" className="form-control" placeholder="License Plate" aria-label="Address" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">NXY</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input onChange={(e) => setNumber(e.target.value)} type="text" className="form-control" placeholder="Vehicle Number" aria-label="Address" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">3299</span>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">123/3, Anderson Road , Dehiwela</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">aarthifnawaz@gmail.com</span>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2">*****</span>
                                    </div>
                                </div>

                                <span onClick={saveData} style={{ marginTop: 20 }} className="btn btn-sm btn-primary mr-1" title="">Create Driver</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default CreateDriver;
