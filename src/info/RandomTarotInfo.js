import { Link } from 'react-router-dom'

const RandomTarotInfo = ({randomImage}) => {

return (
    <>

    <h1 className='random-tarot-header'>Your Daily Tarot</h1>
        <img className ='random-tarot-image' src={randomImage.image} alt='tarot-cards' />

    <button className='tarot-display-btn'>
        <Link to={'/tarot-card'}>Reset</Link>
    </button>
   
    </>
    )
}


export default RandomTarotInfo