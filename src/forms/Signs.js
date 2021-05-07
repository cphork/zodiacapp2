import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'




const Signs = (props) => {
let history = useHistory()
    const getHoroscope = async (sign) => {

        const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
            method: "post"})
            
        const data = await response.json()

        props.setHoroscope(data);
        // console.log(data)
    }

   


    const [signsData, setSignsData] = useState ({
        sign: ''
    })

    const handleChange = (event) => {
        
        setSignsData({...signsData, [event.target.name]: event.target.value})
    }

    

    const handleSubmit = async (event) => {
        event.preventDefault()
        // console.log(props.horoscope)
      getHoroscope(signsData.sign)
      setSignsData({
          sign: ''
      })
        history.push('/signs-info')

    }

    return (

        <>
        <div>
        <h1 className='zodiac-header' >Enter Your Sign</h1>
     

        <form className='zodiac-form' onSubmit = {handleSubmit}>
            <input placeholder='your sign' type = 'text' value={signsData.sign} name='sign' onChange={handleChange} />
            <input className='zodiac-submit' type ='submit' value='submit' />
        </form>

      

        </div>

        <img className='bg-image-zodiac-signs' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1620398359/800wm_qpensg.jpg' />


        <h2 className='signs-btn-header'>More Fun for You</h2>

    {/* LINKS BUTTON */}
    <div className='signs-pg-links'>

<button className='links'>
  <Link to={'/'}>Main Page</Link>
</button>

{/* <button className='links'>
  <Link to={'/signs'}>Zodiac Signs</Link>
</button> */}

    <button className='links'><Link to={'/love-compatibility'}>Compatibility</Link></button>

    <button className='links'>
  <Link to={'/tarot-card'}>Tarot</Link>
</button>



    </div>



        </>
        
        
    )

    
}



export default Signs
