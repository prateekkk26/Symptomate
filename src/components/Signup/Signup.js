import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap'
import fire from '../../config/firebase'
import { signInWithGoogle} from '../../config/firebase';
import styles from './signup.module.css'
import ReactGA from 'react-ga'
import Layout from '../Layout/Layout'
import img from '../../img/signup.webp'


const Signup = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const [currentUser, setCurrentUser] = useState(null)
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		try {
			fire.auth().createUserWithEmailAndPassword(email.value, password.value);
			setCurrentUser(true);
		} catch(err) {
			alert(err);
		}
	}

	if (currentUser) {
		return <Redirect to="/" />
	}

	return (
		<Layout>
			<div className={`p-5 ${styles.signup}`}>
				<div className={`${styles.container} p-5`}>
					<div>
						<img 
							src={img}
							alt="signup-background"
							className={`${styles.image} rounded-lg `} 
						/>
					</div>
					<div className="h2 text-center my-4 text-dark font-weight-bold">Please register yourself</div>
					<div className="border border-primary container my-4 w-25"></div>
					<div className="p-5 rounded-lg">
						<Form onSubmit={handleSubmit}>
						  <Form.Group controlId="formBasicEmail" className="mb-4">
						    <Form.Label className="h4">Email address</Form.Label>
						    <InputGroup className="mb-3" size="lg">
							    <InputGroup.Prepend>
							      <InputGroup.Text id="basic-addon1" className="bg-primary">
							      	<ion-icon name="mail-open"></ion-icon>
							      </InputGroup.Text>
							    </InputGroup.Prepend>
							    <FormControl
							      className={styles.removeFocus}
							      type="text"
							      name="email"
							      placeholder="Enter your email"
							      aria-label="Enter your email"
							      aria-describedby="basic-addon1"
							    />
							</InputGroup>
						    <Form.Text className="text-info h5">
						      We'll never share your email with anyone else.
						    </Form.Text>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword" className="mb-4">
						    <Form.Label className="h4">Password</Form.Label>
						    <InputGroup className="mb-3" size="lg">
							    <InputGroup.Prepend>
							      <InputGroup.Text id="basic-addon1" className="bg-primary">
							      	<ion-icon name="key"></ion-icon>
							      </InputGroup.Text>
							    </InputGroup.Prepend>
							    <FormControl
							      className={styles.removeFocus}
							      type="password"
							      name="password"
							      placeholder="Enter password"
							      aria-label="Enter password"
							      aria-describedby="basic-addon1"
							    />
							</InputGroup>
						  </Form.Group>
						  <div>
						  	<Button 
						  		type="submit" 
						  		variant="outline-success" 
						  		size="lg" 
						  		className="mr-4 mt-4  font-weight-bold"
						  		style={{width: "100%"}}
						  	>
							    Sign Up
							</Button>
							<Button 
								variant="outline-danger" 
								size="lg" 
								onClick={signInWithGoogle} 
								className="mt-4 font-weight-bold"
								style={{width: "100%"}}
							>
							    Log In with Google
							</Button>
						  </div>
						</Form>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Signup