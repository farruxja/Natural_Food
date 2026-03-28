import React from 'react'
import chap from "../img/chapga_qayrilgan.png"
import ong from "../img/onga_qayrilgan.png"
import ong_salat from "../img/hero_ong_taraf.png"
import hero from "../img/hero.png"

function Hero() {
  return (
    <section className='home__hero' id='hero'>
      
      <img className='orta' src={ong} alt="Onga qayrilgan" />
      <img className='salat' src={ong_salat} alt="Hero" />

      <div className="hero__wrapper">
        <div className="hero__content">
            <img className='chap' src={chap} alt="Chapga qayrilgan" />
            <h1>NATURAL
FOOD
INDUSTRY</h1>
<p>“Natural Food” g’oyasi asosidagi prezentatsiya</p>
<a href="https://t.me/"><button>BERDIYEVA E’ZOZA</button></a>
        </div>
        <div className="hero__img">
      <img className='ong' src={chap} alt="Ong salat" />

            <img src={hero} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero
