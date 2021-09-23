
import React from 'react' 
import Movie from './Movie.js'

class Weather extends React.Component{
   


  
    

render(){
 console.log(this.props.weather)
  return(
<>

<p>{this.props.cityName}</p>
<p>The lat of {this.props.cityName} is : {this.props.weather[0].lat}</p>
<p>The lon of {this.props.cityName} is : {this.props.weather[0].lon}</p>
      <img  src= { `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.props.weather[0].lat},${this.props.weather[0].lon}&zoom=10`} alt='img broken' />

<p>The Date : {this.props.weather[0].date}</p>
      <p>The Weather Is : {this.props.weather[0].description}</p>
      <p>The Date : {this.props.weather[1].date}</p>
      <p>The Weather Is : {this.props.weather[1].description}</p>
      <p>The Date : {this.props.weather[2].date}</p>
      <p>The Weather Is : {this.props.weather[2].description}</p>



   
      <Movie 
      key={3}
      cityName={this.props.cityName}
      movie = {this.props.movie}
      />


</>

  )
}







}


export default Weather 