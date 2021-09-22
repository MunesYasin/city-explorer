import axios from 'axios';
import React from 'react' 
import Movie from './Movie.js'

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          cityName :'',
          weatherResult:[]
        }
    


    
      this.setState({
        cityName : this.props.cityName
})
let getData=  `${process.env.REACT_APP_SERVER_LINK}/weather?cityName=${this.state.cityName}`
axios.get(getData).then(result=>{
console.log(result)




 this.setState({
  weatherResult : result.data
})
 console.log(weatherResult)
}


    
)
   

}

render(){
  return(
<>

<p>{this.state.cityName}</p>
<p>The lat of {this.state.cityName} is : {this.state.weatherResult[0].lat}</p>
<p>The lon of {this.state.cityName} is : {this.state.weatherResult[0].lon}</p>
      <img  src= { `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.weatherResult[0].lat},${this.state.weatherResult[0].lon}&zoom=10`} alt='img broken' />

<p>The Date : {this.state.weatherResult[0].date}</p>
      <p>The Weather Is : {this.state.weatherResult[0].description}</p>
      <p>The Date : {this.state.weatherResult[1].date}</p>
      <p>The Weather Is : {this.state.weatherResult[1].description}</p>
      <p>The Date : {this.state.weatherResult[2].date}</p>
      <p>The Weather Is : {this.state.weatherResult[2].description}</p>




      <Movie cityName={this.state.cityName}/>


</>

  )
}







}


export default Weather 