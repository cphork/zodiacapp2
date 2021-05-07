import React, { useState } from 'react'
import { Route, Switch  } from 'react-router-dom'
import Header from  './components/Header'
import MainPage from './components/MainPage'
import LoveCompatibility from './forms/LoveCompatability'
import Signs from './forms/Signs'
import CompatibilityInfo from './info/CompatabilityInfo'
import SignsInfo from './info/SignsInfo'
import RandomTarot from './random/RandomTarot'
import RandomTarotInfo from './info/RandomTarotInfo'
import "./App.css"





function App() {

  const [horoscope, setHoroscope] = useState([])
  const [grabRandom, setGrabRandom] = useState([])
  const [randomImage, setRandomImage] = useState([])


  return (

    <>
    <div className="App">

<Header />

<Switch>

<Route exact path='/'>
  <MainPage />
</Route>

<Route path='/love-compatibility'>
  <LoveCompatibility setGrabRandom={setGrabRandom}/>
</Route>

<Route path='/signs'>
  <Signs setHoroscope={setHoroscope}/>
</Route>

<Route path='/compatibility-info'>
<CompatibilityInfo  grabRandom={grabRandom}/>
</Route>

<Route path='/signs-info'>
  <SignsInfo horoscope={horoscope}/>
</Route>

<Route path='/tarot-card'>
  <RandomTarot  setRandomImage={setRandomImage}/>
</Route>

<Route path='/random-tarot-info'>
<RandomTarotInfo  randomImage={randomImage}/>
</Route>

</Switch>

</div>

    </>
  );
  
}

export default App;
