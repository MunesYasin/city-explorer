   
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

<Weather cityName={this.props.cityName}/>
}
    
    </>
)
}

}
export default  FormM