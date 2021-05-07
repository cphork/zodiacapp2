import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {

    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo'>Zodiac POWER</div>
            </Link>

            <Link to='/signs'>
                <div className='signs'>Zodiac Signs</div>
            </Link>

            <Link to='/love-compatibility'>
                <div className='love'>Love Compatibility</div>
            </Link>

            <Link to='/tarot-card'>
                <div className='tarot'>Tarot</div>
            </Link>

        </div>
    )
}

export default Header