import React from 'react'
import { Link } from 'react-router-dom'


const MainPage = (props) => {

    return (
        <>
        <h3 className='welcome'>Welcome to My App!</h3>

        <img className='zodiac-sign' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1620312896/360_F_303325594_4yAkrKWx2ZNEZh9LBRa0x1dSdrdX3Icx_vcym4l.jpg' alt='zodiac'/>

      

        <h2 className='links-header'>More Fun for You</h2> 

{/* {/* LINKS ON MAIN PAGE */}
    <div className='main-pg-links'>

{/* <button className='links'>
  <Link exact to={'/'}>Main Page</Link>
</button> */}

<button className='links'>
  <Link to={'/signs'}>Zodiac Signs</Link>
</button>

    <button className='links'><Link to={'/love-compatibility'}>Compatibility</Link></button>

    <button className='links'>
  <Link to={'/tarot-card'}>Tarot</Link>
</button>



    </div>

          </>
    )
}

export default MainPage