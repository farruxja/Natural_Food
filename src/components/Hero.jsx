import React from 'react'
import chap from "../img/chapga_qayrilgan.png"
import ong from "../img/onga_qayrilgan.png"
import ong_salat from "../img/hero_ong_taraf.png"
import hero from "../img/hero.png"

function Hero() {
  return (
    <section className='home__hero' id='hero'>
      
      <img className='orta' data-aos="fade-up" src={ong} alt="Onga qayrilgan" />
      <img className='salat' data-aos="fade-left" src={ong_salat} alt="Hero" />

      <div className="hero__wrapper">
        <div className="hero__content"data-aos="fade-right">
            <img className='chap'data-aos="fade-right" src={chap} alt="Chapga qayrilgan" />
            <h1>NATURAL
FOOD
INDUSTRY</h1>
<p>“Natural Food” g’oyasi asosidagi prezentatsiya</p>
<a href="https://t.me/basic555555"><button>BERDIYEVA E’ZOZA</button></a>
        </div>
        <div className="hero__img" data-aos="fade-left">
      <img className='ong'data-aos="fade-left" src={chap} alt="Ong salat" />

            <img src={hero} alt="Hero"  />
        </div>
      </div>
    </section>
  )
}

export default Hero
