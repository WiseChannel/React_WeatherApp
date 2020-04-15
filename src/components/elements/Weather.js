import React from 'react'

const Weather = props => {
    return(
        <>
            { props.city ? <p>City: { props.city }</p> : '' }
            { props.country ? <p>Country: { props.country }</p> : '' }
            { props.temperature ? <p>Temperature: { props.temperature }</p> : '' }
            { props.humidity ? <p>Humidity: { props.humidity }</p> : '' }
            { props.description ? <p>Description: { props.description }</p> : '' }
        </>
    )
}
export default Weather
