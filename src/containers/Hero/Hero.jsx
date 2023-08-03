import React from 'react'
import './hero.css'
import hero from '../../assets/hero.svg'
import '../../components/Button/button.css'

const Hero = () => {
  return (
    <div className='h_container'>
      <div className='h_left'>
        <h1>Emeljük újabb szintre az automatizációt!</h1>
        <h2>A jövő technológiája. <br></br>
            Ma. <br></br>
            A vállalkozásodban.</h2>
        <div className="button">
            <button type="button">Dolgozzunk együtt</button>
          </div>
        <p> <i class="fa-solid fa-play"></i> Bemutatkozó videó</p>
      </div>
      <div className='h_right'>
        <img src={hero} />
      </div>
    </div>
  )
}

export default Hero