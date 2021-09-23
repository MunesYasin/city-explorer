   
import React from 'react' 
import Form from 'react-bootstrap/Form'
import Weather from './Weather.js'

class FormM extends React.Component{
   
render(){

return(
    <>
    <Form onSubmit={this.props.detalis}>
    <input type='text' name='cityName'/>
    <input type='submit' value='Get Result !'/>

    </Form>


    {this.props.show && 

<Weather
key={2}
cityName={this.props.cityName}

weather = {this.props.weather}
        movie = {this.props.movie}





/>
}
    
    </>
)
}

}
export default  FormM