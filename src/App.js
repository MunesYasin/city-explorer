import axios from 'axios';
import React from 'react'

import FormM from './component/FormM.js'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false ,
      thePlace :'',
      weatherResult:[],
      movieResult:[],
      
    }
    }
  

    getDetails = async (e)=>{
      e.preventDefault()
     await this.setState({
     thePlace : e.target.cityName.value,

   })
   

  

let getData=  `${process.env.REACT_APP_SERVER_LINK}/weather?cityName=${this.state.thePlace}`

let result =await axios.get(getData)

console.log(result)


  
 let movieUrl =`${process.env.REACT_APP_SERVER_LINK}/movie?cityName=${this.state.thePlace}`

let movResult = await axios.get(movieUrl)
 console.log(movResult)


  this.setState({

    weatherResult :result.data,
   movieResult : movResult.data,
show : true
 
 })

}


  
  
  
  render(){
    return(
      <div>
        <h3>City Explorer App</h3>
        <FormM 
        key={1}
        detalis={this.getDetails} 
        getWeather = {this.getWeather}
        getMovie = {this.getMovie}
        cityName={this.state.thePlace} 
        show={this.state.show}
        weather = {this.state.weatherResult}
        movie = {this.state.movieResult}
        
        
        
        
        />
        </div>


  )}
  
    
  
  
  }
  export default App