import React from 'react'

// import { Link, useParams } from 'react-router-dom'

export default function Trailer({trailer}) {
 
    return (
        <div>
            
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailer[0].key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
            
            {/* <Link to={"/movies-react/details/" + id}><button className="back"><strong>Go Back</strong></button></Link> */}
        </div>
    )
}
