import React from 'react'

const MovieDescription=(props) =>(
        <div>
            <h1>some movie description for: {props.match.params.title}</h1>
        </div>
)
export default MovieDescription;
