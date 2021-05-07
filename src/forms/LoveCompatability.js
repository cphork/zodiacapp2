import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory} from 'react-router'




const LoveCompatibility = ({setGrabRandom}) => {
const history = useHistory()

    const loveMatch = [

        {image: 'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_186,w_191/v1620231779/b9dc227bf91b5bffc46d606a0fc77017_miz4vk.jpg', 
        name: 'Aries',  
        description: 'Aries is a very intense personality, and the way they love is with a lot of passion and energy. When Aries finds someone that they really loves, they tend to latch on and not let go until they gets what they want. Aries is also a fire sign, which is where a lot of his passion and fire for life and love come from.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_239,w_191/v1620231667/61d512e00cfd6cec8e12724d6992b1d5_q1lcti.jpg', 
        name: 'Taurus', 
        description: 'Taurus romance is sensual, so expect to be spoiled in ways that delight all your senses! The Taurus personality is tranquil and peace-loving, which means the likelihood of unnecessary relationship chaos is low.'},
        
        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_190,w_191/v1620231326/Geminis-Like-A-Lot-But-Rarely-Love-Gemini-Meme_guq0hn.png', 
        name: 'Gemini', 
        description: 'They are extremely passionate and fun, which makes them exciting mates. They will plan romantic getaways and take you on adventures. However, due to their indecisiveness, they can be scared or wary of commitment.'},
        
        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_188,w_191/v1620231702/images_ohtynb.png', 
        name: 'Cancer', 
        description: 'As the most sensitive sign of the zodiac, a Cancer does everything with love in mind and in heart. Because of this, they are the most tender lovers. Having a lover like a Cancer is important, as the crab will care for you in ways many others do not know how.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_193,w_191/v1620231266/FunnyLeoQuotes12_0_lx79xv.jpg', 
        name: 'Leo', 
        description: 'A Leo in love is very bold and will leave no doubt to their loved one of their feelings. Extremely forward and self assured in nature they can come across as aggressive in personal relationships. The positive in this is that there are no head games played by this Lion, what you see is what you get, and Leos tell you exactly what they want and like. When Leos fall in love, the fire of love in their relationship burns bright and hot.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_179,w_191/v1620231625/download_xprzvn.jpg', 
        name: 'Virgo', 
        description: 'Virgos thrive on deep and intellectual connections. They are supportive and loyal romantic partners, and take a deep interest in their loved one interests and life.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_222,w_191/v1620231584/libra-september-23-october-22-zodiacmind-com-when-a-libra-loves-you-35305370_z4dg14.png', 
        name: 'Libra', 
        description: 'Once everything is just right, Libra is a very caring and gentle partner. They look at lovemaking as the act of two becoming one, and they want to create a sincere connection. While you are involved in a physical relationship with a Libra, you can expect to feel like they only have eyes for you.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_178,w_191/v1620231743/download-1_y9dhhu.jpg', 
        name: 'Scorpio', 
        description: 'They love intimate sex. They are considered by many to be the most passionate and sexual sign of the zodiac. ... They love in a profoundly deep way that makes them think, you are rightfully theirs. If you are married to a Scorpio you will never find a more loyal partner to share your life with.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/v1620231811/download_crmzkm.png', 
        name: 'Sagittarius', 
        description: 'Love is always an adventure when it comes to Sagittarius men. This feisty fire sign is classified as mutable, meaning they creative, expressive, adventurous, resourceful, and always on the go.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_166,w_191/v1620232495/download_ypyzng.png', 
        name: 'Capricorn', 
        description: 'Capricorns are attracted to qualities like dignity, and even something as seemingly old-fashioned as "good breeding." They look for substance over style, and some are acutely aware of social standing. Many opt for the radical path of tradition, rather than the modern style of YOLO (You only live once) debauchery.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_190,w_191/v1620231538/when-in-love-aquarius-loves-to-tease-their-partner-theaquariuslife-com-22278161_buacgt.png', 
        name: 'Aquarius', 
        description: 'Aquarians long for relationships that value not only a mental connection, but also honesty and independence. ... When it comes to love, Aquarians are generally committed for life and willing to make sacrifices for the sake of their relationship.'},

        {image:'https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,h_239,w_191/v1620231475/pisces-february-19-march-20-z-o-d-i-a-22726846_a34d9h.png', 
        name: 'Pisces', 
        description: 'Pisces are true romantics and will go out of their way to think of thoughtful surprises and gifts to show how much they care. Because they are so attuned to the emotions of others, Pisces are incredibly caring partners and will do practically anything to make sure the person they love feels cared about and supported'},
    ]


    const handleOnClick = () => {
        setGrabRandom(loveMatch[Math.floor(Math.random() * (loveMatch.length))])
        history.push('/compatibility-info')
  
    }
 
    return (
       
       <>

 <h1 className='love-comp-header'>Love Compatibility</h1>

 {/* HEART IMAGE */}
<img className='hearts' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1620137191/IMG_1940_k0ajih.jpg' alt='hearts'/>

        <div className='love-comp-btn'>
            <button className='love-btn'onClick={() => handleOnClick()}>CLICK ME</button>
        </div>

       


{/* LINK TO COMPATIBILITY */}
<Link to={'/compatibility-info'}></Link>


{/* BACKROUND IMAGE */}
<img className='love-bg' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1620398359/800wm_qpensg.jpg' />

<h2 className='comp-btn-header'>More Fun for You</h2>
{/* LINKS BUTTON */}
    <div className='comp-pg-links'>

<button className='links'>
  <Link to={'/'}>Main Page</Link>
</button>

<button className='links'>
  <Link to={'/signs'}>Zodiac Signs</Link>
</button>

    {/* <button className='links'><Link to={'/love-compatibility'}>Compatibility</Link></button> */}

    <button className='links'>
  <Link to={'/tarot-card'}>Tarot</Link>
</button>



    </div>



       </>

                
    )
    
}



export default LoveCompatibility
