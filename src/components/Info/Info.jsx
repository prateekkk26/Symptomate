import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import styles from'./info.module.css'
const Info = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col col-2">
                    <Form.Label>Select Gender:</Form.Label>
                </div>
                <div className="col ml-4">
                    <div>
                        <Form.Check type="radio" inline checked={props.gender === "male"} onChange={props.onSexChanged} name="gender" value="male" label="Male" />
                    </div>
                    <div>
                        <Form.Check type="radio" inline className="my-2" checked={props.gender === "female"} onChange={props.onSexChanged} name="gender" value="female" label="Female" />
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col col-2">
                    <Form.Label>Enter Age:</Form.Label>
                </div>
                <div className="col ml-4">
                    <Form.Control type="number" onChange={props.onAgeChanged} placeholder="Enter Age" value={props.age} size="lg" />
                </div>
            </div>
            <div className="row my-2 justify-content-around">
                <Button onClick={()=>{props.submit()}} variant="outline-primary" className={`${styles.full} btn-lg mx-3 my-4`}>Submit</Button>
                <Button onClick={()=>{props.reset()}} variant="outline-primary" className={`${styles.full} btn-lg mx-3 my-4`}>Reset</Button>
            </div>
        </div>
    )
}

export default Info