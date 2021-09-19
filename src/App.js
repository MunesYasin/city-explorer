import axios from 'axios';
import React from 'react'
import { Form } from 'react-bootstrap'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        thePlace :'',
        locationResult : {},
        show : false
    }
  }

  getDirection = async (e)=>{
    e.preventDefault()
  await this.setState({
  thePlace : e.target.place.value
})
  

   let urlRequest = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.thePlace}&format=json`

console.log(urlRequest)
  let dirResult = await axios.get(urlRequest)
  console.log(dirResult)


this.setState({
  locationResult : dirResult [0],
  show : true
})

}



  render(){
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
        <p>Latitude : {this.state.locationResult.lat}</p>
        <p>longititude : {this.state.locationResult.lon}</p>

        <img  src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.locationResult.lat},this.state.locationResult.lon&zoom=10`}/>
        </>
        }
      </div>
    )
  }
}
export default App