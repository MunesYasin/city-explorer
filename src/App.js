import axios from 'axios';
import React from 'react'
import { Form } from 'react-bootstrap'
import FormM from './component/FormM.js'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false ,
      thePlace :'',
      
    }
    }
  

    getDetails = async (e)=>{
      e.preventDefault()
     await this.setState({
     thePlace : e.target.cityName.value,

     
     show : true
   })
   }
  
  
  
  render(){
    return(
      <div>
        <h3>City Explorer App</h3>
        <FormM detalis={this.getDetails} cityName={this.state.thePlace} show={this.state.show}/>
        </div>


  )}
  
    
  
  
  }
  export default App