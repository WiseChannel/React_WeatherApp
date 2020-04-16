import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = props => {
    return (
        <form onSubmit={props.getWeather}>
            <input className='form-control input' type="text" name='city' placeholder='City'/>
            <input className='form-control input' type="text" name='country' placeholder='Country'/>
            <button className='btn btn-primary button'>Get Weather</button>
        </form>
    )
}

export default Form
