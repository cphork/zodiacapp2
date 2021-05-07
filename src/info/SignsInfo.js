import React from 'react'
import { Link } from 'react-router-dom'

const SignsInfo = (props) => {


    const loaded = () => {
        return (
            <div>
        <img className='bg-image-signs' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1620137197/IMG_1937_uwsunb.jpg' alt='zodiac' />


                  <h4>{props.horoscope.sign}</h4>
                  <h4>Today:</h4><p>{props.horoscope.current_date}</p>
                  <h4>Compatibility:</h4><p>{props.horoscope.compatibility}</p>
                  <h4>Today's life: </h4><p className='description'>{props.horoscope.description}</p>
                  <h4>DOB Range: </h4><p>{props.horoscope.date_range}</p>
                  <h4>Lucky Color:</h4><p>{props.horoscope.color}</p>
                  <h4>Lucky Number:</h4><p>{props.horoscope.lucky_number}</p>
                  <h4>Lucky Time:</h4><p> {props.horoscope.lucky_time}</p>
                  <h4>Today's Mood:</h4><p>{props.horoscope.mood}</p>
                  
                  <button className='signs-reset-btn'><Link to={'/signs'}>Reset</Link></button>
            </div>
        )
    }
  
    //     useEffect (() => {
//     getHoroscope();
// }, []) 
  
    const loading = () => {
        return <h1>Loading...</h1>;
    }
  
    return props.horoscope ? loaded() : loading();
   
}

export default SignsInfo    