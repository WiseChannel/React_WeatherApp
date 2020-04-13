import React, { Component } from 'react';

//import components
import Titles from "./components/elements/Titles";
import Form from "./components/elements/Form";
import Weather from "./components/elements/Weather";
import { API_KEY } from "./components/config/config";



export class App extends Component {

    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        const data = api_call.json()
        console.log(data)
    }

    render() {
        return(
            <div className='App'>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather />
            </div>
        )
    }
}

export default App;
