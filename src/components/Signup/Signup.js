import React, {useState} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap'
import fire from '../../config/firebase'
import { signInWithGoogle} from '../../config/firebase';
import styles from './signup.module.css'

import Layout from '../Layout/Layout'


const Signup = () => {
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
						<img src="https://cdn.pixabay.com/photo/2016/11/30/12/17/cells-1872666__340.jpg" className={`${styles.image} rounded-lg `} />
					</div>
					<div className="h2 text-center my-4 text-dark">Please register yourself</div>
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
						  	<Button type="submit" variant="outline-success" size="lg" className="mr-4 mt-4">
							    Sign Up
							</Button>
							<Button variant="outline-danger" size="lg" onClick={signInWithGoogle} className="mt-4">
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