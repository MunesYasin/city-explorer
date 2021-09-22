import axios from 'axios';
import React from 'react'
import { Form } from 'react-bootstrap'


class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          cityName :'',
          movieResult:[]
        }
      
 


  
        
         this.setState({
            
          cityName : this.props.cityName
  })
         
        let movieUrl =`${process.env.REACT_APP_SERVER_LINK}/movie?cityName=${this.state.cityName}`
      console.log(movieUrl)
        axios.get(movieUrl).then((movResult)=>{
        console.log(movResult)
      
      
         this.setState({
      
         
          movieResult : movResult.data,
        
        })
      }
        )
         }
      
      


      render(){
       
        for (let i =0 ;i<this.state.movieResult.length;i++){
        return(
          
<>


          <p>{this.state.movieResult.title}</p>
        <img src={`${this.state.movieResult.imageUrl}`}/>
        







</>


        )
      }



    }

    }
    export default Movie