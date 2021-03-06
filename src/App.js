import React, { Component } from 'react';

//import components
import Titles from "./components/elements/Titles";
import Form from "./components/elements/Form";
import Weather from "./components/elements/Weather";
import { API_KEY } from "./components/config/config";
import Axios from "axios";
import './components/style/index.css'

export class App extends Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: false,

    }

    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        const api_call = await Axios(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        const data = await api_call.data
        console.log(data)

        if (city) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
            })
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Enter the values'
            })
        }

    }

    render() {
        return(
            <div className='App'>
                <Titles
                    city={this.state.city}
                    country={this.state.country}
                />
                <Form getWeather={this.getWeather}/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        )
    }
}

export default App;
