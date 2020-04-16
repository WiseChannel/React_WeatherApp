import React from 'react'

const Weather = props => {

    const { city } = props
    return(
        <>
            {city ?
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{ props.city ? <p>City: { props.city }</p> : '' }</li>
                <li className="list-group-item">{ props.country ? <p>Country: { props.country }</p> : '' }</li>
                <li className="list-group-item">{ props.temperature ? <p>Temperature: { props.temperature }</p> : '' }</li>
                <li className="list-group-item">{ props.humidity ? <p>Humidity: { props.humidity }</p> : '' }</li>
                <li className="list-group-item">{ props.description ? <p>Description: { props.description }</p> : '' }</li>
            </ul>
            : ''}
        </>
    )
}
export default Weather
