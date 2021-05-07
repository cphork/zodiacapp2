import { Link } from 'react-router-dom'

const CompatibilityInfo = ({grabRandom}) => {

    return(
        <>
        <h3 className='comp-header'>YOUR MATCH!</h3>

        <img className='random-image' src={grabRandom.image} alt='random-images'/>
        <h3 className='random-name'>{grabRandom.name}</h3>
        <h3 className='random-description'>{grabRandom.description}</h3>
        
        <button className='reset-btn'><Link to={'/love-compatibility'}>Reset</Link></button>

        </>
    )
}

export default CompatibilityInfo;