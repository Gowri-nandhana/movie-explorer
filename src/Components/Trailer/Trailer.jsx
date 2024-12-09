import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Trailer.css'

function Trailer() {

    let [videoDetails,setVideoDetails]=useState({});
    let {id} = useParams();
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f34b861ace7ab6ee58464120939399bf`
      )
      .then((result) => {
        console.log(result);
        setVideoDetails(result.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });

  return (
    <div className='trailer-page'>
       
      
      <iframe
        src={`https://www.youtube.com/embed/${videoDetails.key}`}
        width="800px"
        height="450px"
        title="Trailer"
        allowFullScreen
      ></iframe>
    
    </div>
  )
}

export default Trailer
