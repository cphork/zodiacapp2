import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'




const RandomTarot = ({setRandomImage}) => {
const history = useHistory()

    const shuffleTarot = [

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270214/Screen_Shot_2021-05-05_at_12.36.56_PM_hbdqqd.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270214/Screen_Shot_2021-05-05_at_12.37.51_PM_iu8adm.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270214/Screen_Shot_2021-05-05_at_12.38.25_PM_cs41nz.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270213/Screen_Shot_2021-05-05_at_12.35.32_PM_kiw3gm.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270212/Screen_Shot_2021-05-05_at_12.37.30_PM_dwm0fz.png'},

        {image: 'https:///res-console.cloudinary.com/dejg3dz16/thumbnails/transform/v1/image/upload/v1620270623/https:///res-console.cloudinary.com/dejg3dz16/thumbnails/transform/v1/image/upload//v1620270623/U2NyZWVuX1Nob3RfMjAyMS0wNS0wNV9hdF8xMi4zNi4zOF9QTV96dWRxNzQ=/drilldown'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270211/Screen_Shot_2021-05-05_at_12.35.49_PM_kz6fgi.png'},

        {image: 'https:///res-console.cloudinary.com/dejg3dz16/thumbnails/transform/v1/image/upload/v1620270676/https:///res-console.cloudinary.com/dejg3dz16/thumbnails/transform/v1/image/upload//v1620270676/U2NyZWVuX1Nob3RfMjAyMS0wNS0wNV9hdF8xMi4zNi4xMV9QTV9obm13ZnY=/drilldown'},

        {image: 'https:///res-console.cloudinary.com/dejg3dz16/thumbnails/transform/v1/image/upload/v1620270719/https:///res-console.cloudinary.com/dejg3dz16/thumbnails/transform/v1/image/upload//v1620270719/U2NyZWVuX1Nob3RfMjAyMS0wNS0wNV9hdF8xMi4zNS4xNV9QTV90N2p4aDQ=/drilldown'},

        {image: 'https:///res-console.cloudinary.com/dejg3dz16/thumbnails/transform/v1/image/upload/v1620270757/https:///res-console.cloudinary.com/dejg3dz16/thumbnails/transform/v1/image/upload//v1620270757/U2NyZWVuX1Nob3RfMjAyMS0wNS0wNV9hdF8xMi4zNC4zN19QTV9pdTk3Zmk=/drilldown'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270209/Screen_Shot_2021-05-05_at_12.32.26_PM_c1wybo.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270209/Screen_Shot_2021-05-05_at_12.34.20_PM_g36c0v.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270207/Screen_Shot_2021-05-05_at_12.34.54_PM_jzs3a9.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270207/Screen_Shot_2021-05-05_at_12.33.30_PM_iaiuwj.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270207/Screen_Shot_2021-05-05_at_12.33.55_PM_s1h9fu.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270206/Screen_Shot_2021-05-05_at_12.32.49_PM_djhxqe.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270205/Screen_Shot_2021-05-05_at_12.31.28_PM_zwiaod.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270205/Screen_Shot_2021-05-05_at_12.30.53_PM_kkhqio.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270205/Screen_Shot_2021-05-05_at_12.31.53_PM_bfruu3.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270204/Screen_Shot_2021-05-05_at_12.31.10_PM_mpfcb3.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270204/Screen_Shot_2021-05-05_at_12.32.07_PM_v18pc4.png'},

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/v1620270203/Screen_Shot_2021-05-05_at_12.30.30_PM_jiv9co.png'},
    ]

    const handleOnClick = () => {
        setRandomImage(shuffleTarot[Math.floor(Math.random() * (shuffleTarot.length))])
        history.push('/random-tarot-info')
    }

return (

    <>
    <h1 className='tarot-header' >Today's Tarot</h1>

<div className='random-tarot-btn'>
<button className='tarot-btn' onClick={() => handleOnClick()}>CLICK ME</button>
</div>


{/* LINK TO COMPATIBILITY */}
<Link to={'/random-tarot-info'}></Link>



{/* BACKROUND IMAGE */}
<img className='tarot-bg-image' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1620398359/800wm_qpensg.jpg' />


<h2 className='tarot-btn-header'>More Fun for You</h2>
{/* LINKS BUTTON */}
    <div className='tarot-pg-links'>

<button className='links'>
  <Link to={'/'}>Main Page</Link>
</button>

<button className='links'>
  <Link to={'/signs'}>Zodiac Signs</Link>
</button>

    <button className='links'><Link to={'/love-compatibility'}>Compatibility</Link></button>

    {/* <button className='links'>
  <Link to={'/tarot-card'}>Tarot</Link>
</button> */}



    </div>



    </>


)
}


export default RandomTarot