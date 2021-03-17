import React, {useContext, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import fire from '../../config/firebase'
import { AuthContext } from "../Auth";
import { signInWithGoogle} from '../../config/firebase';
import styles from './login.module.css'
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap'
import ReactGA from 'react-ga'

import Layout from '../Layout/Layout'

const Login = () => {
	// useEffect(() => {
	//     ReactGA.pageview(window.location.pathname + window.location.search);
	// }, [])

	const handleSubmit = (e) => {
	    e.preventDefault();
	    const { email, password } = e.target.elements;
	    try {
	      fire.auth().signInWithEmailAndPassword(email.value, password.value);
	    } catch (err) {
	      alert(err);
	    }
	};
	const { currentUser } = useContext(AuthContext);
	if (currentUser) {
		return <Redirect to="/" />;
	}

	return (
		<Layout>
			<div className={`p-5 ${styles.login}`}>
				<div className={`${styles.container} p-5`}>
					<div>
						<img 
							src="https://cdn.pixabay.com/photo/2013/07/18/10/55/dna-163466__340.jpg" 
							alt="login-background"
							className={`${styles.image} rounded-lg `} 
						/>
					</div>
					<div className="h2 text-center my-4 text-dark font-weight-bold">Welcome to Symptomate</div>
					<div className="border border-primary container my-4 w-25"></div>
					<div className="p-5 rounded-lg">
						<Form onSubmit={handleSubmit}>
						  <Form.Group controlId="formBasicEmail" className="mb-4">
						    <Form.Label>Email address</Form.Label>
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
						    <Form.Text className="text-info">
						      We'll never share your email with anyone else.
						    </Form.Text>
						  </Form.Group>

						  <Form.Group controlId="formBasicPassword" className="mb-4">
						    <Form.Label>Password</Form.Label>
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
						  	<Button type="submit" variant="outline-success" size="lg" className="mr-4 mt-4 font-weight-bold">
							    Log In
							</Button>
							<Button variant="outline-danger" size="lg" onClick={signInWithGoogle} className="mt-4 font-weight-bold">
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

export default Login