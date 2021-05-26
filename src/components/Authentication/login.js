import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {login} from '../../service'

function Login(){
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const history = useHistory();

	const redirectTo = async (e) => {
		e.preventDefault();
		if (!email.trim().length || !password.trim().length){
			console.log("Fill Values")
		}
		else if (email === "Admin" && password == "1234"){
			localStorage.setItem('type','admin')
			history.push('/dashboard2')
		}
		else{
			const response = await login({email,password})
			if (response.result == "planner"){
				localStorage.setItem('type','planner')
				localStorage.setItem('email', email)
				history.push('/dashboard')
			}
			else if(response.result == "driver"){
				localStorage.setItem('type','driver')
				localStorage.setItem('email', email)
				history.push('/dashboard3')
			}
			else if(response.result == "Wrong Password"){
				console.log('Wrong password')
			}
			else if(response.result == "No Such Email Exists") {
				console.log("no")
			}
			
		}

		
	}
	return (
		<>
			<div class="pattern">
				<span class="red"></span>
				<span class="indigo"></span>
				<span class="blue"></span>
				<span class="green"></span>
				<span class="orange"></span>
			</div>
			<div className="auth-main particles_js">
				<div className="auth_div vivify popIn">
					<div className="auth_brand">
						<Link className="navbar-brand" to="/">
							<img src="../assets/images/icon.svg" width="30" height="30" className="d-inline-block align-top mr-2" color={"black"} alt="Oculux logo" /><p style={{color: 'black'}}>Booking System</p></Link>
					</div>
					<div className="card">
						<div className="body">
							<p className="lead">Login to your account</p>
							<form className="form-auth-small m-t-20" action="/">
								<div className="form-group">
									<label htmlFor="signin-email" className="control-label sr-only">Email</label>
									<input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control round" id="signin-email"  placeholder="Email" />
								</div>
								<div className="form-group">
									<label htmlFor="signin-password" className="control-label sr-only">Password</label>
									<input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control round" id="signin-password"  placeholder="Password" />
								</div>
								
								<button onClick={redirectTo} type="submit" className="btn btn-primary btn-round btn-block">LOGIN</button>
								
							</form>
						</div>
					</div>
				</div>
				
				<div id="particles-js"></div>
			</div>
		</>
	);
}
export default Login;