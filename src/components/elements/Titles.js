import React from 'react'

//import components
import '../style/index.css'

const Titles = props => {

    const { city, country } = props
    return (
        <div>
            {city && country
                ?
                <div className='Titles'>
                    <h2>City:{city}</h2>
                    <h2>Country:{country}</h2>
                </div>
                : ''
            }
        </div>
    )
}

export default Titles
