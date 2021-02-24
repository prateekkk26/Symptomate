import React from 'react'
import {Button, Alert, Badge} from 'react-bootstrap'
import styles from './popup.module.css'
import Visualize from '../Visualize/Visualize.jsx'


function Popup(props) {
    {/*let buttons = props.data.question.items[0].choices.map((data, index)=>
            <Button variant="outline-info" onClick={()=>{props.click(data.id, props.data.question.items[0].id)}} key={data.id} className={`mx-3 my-2 btn-lg ${styles.choice}`}>
                {data.label}
            </Button>
        )*/}
    let buttons = props.data.question.items.map((data, index) =>
            <div className={`mt-3`}>
                <div className={`h4 text-primary`}>{data.name}</div>
                {
                    props.data.question.items[index].choices.map((option, i) =>
                        <Button variant="outline-info" onClick={() => {props.click(option.id, props.data.question.items[index].id)}} key={option.id} className={`mr-3 my-2 btn-lg ${styles.choice}`}>
                            {option.label}
                        </Button>
                  )
                }
            </div>
    )
    // let conditions = props.data.conditions.map((data, index)=>
    //     <Badge className="my-3 mr-4 p-2" variant="danger" key={data.id}>{data.common_name} | {parseFloat(data.probability*100).toFixed(1)}%</Badge>
    // )

    return (
        <div className="container">
            <div className="row justify-content-end">
                <button className="btn btn-outline-danger ml-auto" onClick={props.closeModal}>X</button>
            </div>
            <div>
                {/*<div className="h2">You are diagnosed with:</div>*/}
                <Visualize diseases={props.data.conditions} />
            </div>
            <div className="h2 mt-5">
                {props.data.question.text}
            </div>
            <div className="justify-content-left">
                {buttons}
            </div>
        </div>
    )
}

export default Popup