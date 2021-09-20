import axios from 'axios';
import React from 'react'
import { Form } from 'react-bootstrap'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        thePlace :'',
        locationResult : [],
        show : false
    }
  }

  getDirection = async (e)=>{
   e.preventDefault()
  await this.setState({
  thePlace : e.target.place.value
})
  

   let urlRequest = `${process.env.REACT_APP_SERVER_LINK}/weather?cityName=${this.state.thePlace}`

console.log(urlRequest)
  let dirResult = await axios.get(urlRequest)
  console.log(dirResult)


this.setState({
  locationResult : dirResult.data,
  show : true
})

}



   render  (){
    return(
      <div>
        <h3>City Explorer App</h3>
        <Form onSubmit={this.getDirection}>
        <input type='text' name='place'/>
        <input type='submit' value='get direction'/>

        </Form>
        {this.state.show && 
        <>
        <p>City Name : {this.state.thePlace}</p>
  

         <img  src= { `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.locationResult[0].lat},${this.state.locationResult[0].lon}&zoom=10`} alt='img broken' />
      
      
      <p>The Date : {this.state.locationResult[0].date}</p>
      <p>The Weather Is : {this.state.locationResult[0].description}</p>
      <p>The Date : {this.state.locationResult[1].date}</p>
      <p>The Weather Is : {this.state.locationResult[1].description}</p>
      <p>The Date : {this.state.locationResult[2].date}</p>
      <p>The Weather Is : {this.state.locationResult[2].description}</p>
      
      
      
      
      
        </>
        }
      </div>
    )
  }
}
export default App