import React from 'react'
import axios from 'axios';
import Modal from 'react-modal'
// import env from './environment';
import styles from './dashboard.module.css'
import Layout from '../Layout/Layout.js'
import Conditions from '../Conditions/Conditions.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Info from '../Info/Info.jsx'
import Popup from '../Popup/Popup.jsx'
import UI from '../UI/UI.jsx'

Modal.setAppElement('#root')

class Dashboard extends React.Component {

	customStyles = {
      overlay: {
        backgroundColor: 'rgba(0,0,0,.8)'
      },
	    content : {
	      backgroundColor : 'rgba(240, 240, 240, .95)',
	      minHeight : '90%',
	      minWidth: '90%',
	      top: '50%',
	      left: '50%',
	      transform: 'translate(-50%, -50%)',
        borderRadius: "5px",
        boxShadow: `0 0 5px var(--mainWhite)`,
    	}
  	};

	// api_data = env()
	constructor(){
		super()
		this.state = {
		  gender: 'male',
		  age: 18,
		  symptoms: [],
		  evidence: [],
      conditions: [],
		  modalIsOpen: false,
		  modalData: undefined,
		}
	}

  getSymptoms = ()=>{
    let header = {
      "Accept": "application/json",
      "App-Key": "aaf3a83db076165d87a716e94f12fc1b",
      "App-Id" : '04584af7',
      "Dev-Mode" : "true"
    };
    axios.get('https://api.infermedica.com/v2/symptoms', {headers: header}).then(res=>{
      this.setState({
        symptoms: res.data
      })
    });
  }
  symptomSelected = (item, index)=>{
    this.state.symptoms.splice(index, 1)
    this.setState({symptoms: this.state.symptoms})
    let local_evidence = {"id": item.id, "choice_id": "present"}
    this.state.evidence.push(local_evidence)
    this.state.conditions.push(item);
  }
  submit = ()=>{
    if(this.state.age === 0) alert('Please Fill the required fields.');
    else if(this.state.evidence.length === 0) alert('Please select atleast one symptom!')
    else{
      let header = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "App-Id": "04584af7",
        "App-Key": "aaf3a83db076165d87a716e94f12fc1b",
        "Dev-Mode" : "true"
      }
      axios.post('https://api.infermedica.com/v2/diagnosis', {
        "sex": this.state.gender,
        "age": this.state.age,
        "evidence": this.state.evidence
      }, {
        headers: header
      }).then(res=>{
        this.setState({
          modalData: res.data,
          modalIsOpen: true
        })
      })
    }
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  click = (choice_id, id)=>{
    this.state.evidence.push({"id": id, "choice_id": choice_id})
    this.setState({modalIsOpen: false})
    let header = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "App-Id": "04584af7",
      "App-Key": "aaf3a83db076165d87a716e94f12fc1b",
      "Dev-Mode" : "true"
    }
    axios.post('https://api.infermedica.com/v2/diagnosis', {
      "sex": this.state.gender,
      "age": this.state.age,
      "evidence": this.state.evidence
    }, {
      headers: header
    }).then(res=>{
      this.setState({
        modalData: res.data,
        modalIsOpen: true
      })
    })
  }
  reset = () =>{
    this.setState({
      evidence: [],
      conditions: [],
    })
  }
  onSexChanged = (event) => {
    this.setState({
      gender: event.target.value
    })
  }
  onAgeChanged = (event) => {
    this.setState({
      age: event.target.value
    })
  }


  render(){
    return (
        <Layout>
          <div className={`${styles.dashboard}`}>
            <h1 className={styles.title}>{"analyze".toUpperCase()}</h1>
            <div className={`${styles.dashboardContainer} p-5`}>
              <Info sex={this.state.gender} reset={this.reset} gender={this.state.gender} age={this.state.age} onAgeChanged={this.onAgeChanged} onSexChanged={this.onSexChanged} submit={this.submit} />
              <SearchBar symptoms={this.state.symptoms} selected={this.symptomSelected} />
              {
                this.state.evidence.length !== 0 ? <Conditions symptoms={this.state.symptoms} conditions={this.state.conditions} /> : null
              }
              
              <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={this.customStyles}
                  contentLabel="Example Modal" >
                      <Popup closeModal={this.closeModal} click={this.click} data={this.state.modalData} className="modal"/>
              </Modal>
            </div>
          </div>
        </Layout>
    );
  }
}

export default Dashboard