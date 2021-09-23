
import React from 'react'



class Movie extends React.Component{
   

      render(){
       
         
          return(
          
<>


     {this.props.movie.map(item =>{


        return <>


           <p>😃The movie's title is : {item.title}</p>
          <p> ⭐The movie's averageVote is : {item.averageVotes}</p>
          <p> 📅 The movie's releasedOn is : {item.releasedOn}</p>



        <img src={`${item.imageUrl}`} alt='😭THERE IS NO COVER FOR THIS BOOK😭'/>

</>
     }
      )}


        
        

</>
)
    }

    }
    export default Movie