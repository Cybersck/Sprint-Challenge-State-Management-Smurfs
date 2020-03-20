import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  Card, CardText, CardBody,
  CardTitle, Input
} from 'reactstrap';

import {connect} from 'react-redux';
import {getData, setForm, submitForm, deleteData} from '../smurfActions';

const App = (props) => {

  if (props.requiresUpdate) props.getData();
  
  let handleChange = (e) => {
    props.setForm(e.target.id, e.target.value);
  }
  let submit = (e) => {
    props.submitForm(props.form);
    console.log(props.form);
    e.preventDefault();
    e.target.reset();

  }
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form className='smurf-form' onSubmit={submit}>
        <Input placeholder='Name' id='name' required={true} type='text' onChange={handleChange}/>
        <br/>
        <Input placeholder='Age in Years' id='age' required={true} type='number' onChange={handleChange}/>
        <br/>
        <Input placeholder='Height in CM' id='height' required={true} type='number' onChange={handleChange}/>
        <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
{props.smurfs !== null && props.smurfs.map(s => (
        <Card key={s.id} className='card'>
        <CardBody>
          <CardTitle>{s.name}</CardTitle>
          <CardText>Age: {s.age} <br/> Height: {s.height}</CardText>
        </CardBody>
        <button className='btn btn-danger del' onClick={()=> props.deleteData(s.id)}>Delete</button>
      </Card>
))}
      </div>
    );
  
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {getData, setForm, submitForm, deleteData})(App);
