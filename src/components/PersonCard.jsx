import React from 'react'
import '../App.css';

const PersonCard = (props) => {
    
    const {first_name} = props
    const {last_name} = props
    const {age} = props
    const {hair_color} = props
    
    return (
        <>
        <h1>{last_name} {first_name}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hair_color}</p>
        </>
    )
}

export default PersonCard