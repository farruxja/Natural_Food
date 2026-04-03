import React from 'react'
import muammo from "../img/muammo_zarar.png"
import chap from "../img/chapga_qayrilgan.png"
import ong from "../img/onga_qayrilgan.png"
import salat from "../img/chap_salatbargi.png"
import "../styles/sabab.css"
function Sabab() {
  return (
    <section className='sabab'>
 <div className="sabab__content" data-aos="fade-up">
         <img className='sabab__muammo' data-aos="fade-up-right" src={muammo} alt="Muammo" />
        <img className='sabab__chap'data-aos="fade-right" src={chap} alt="Chapga qayrilgan" />
        <img className='sabab__orta'data-aos="fade-down" src={ong} alt="Ongga qayrilgan" />
        <img className='sabab__salat' data-aos="fade-right" src={salat} alt="Salat" />
        <img className='sabab__ong' data-aos="fade-left"src={chap} alt="Chapga qayrilgan" />
      <h2 data-aos="fade-up">NIMA UCHUN BU MUAMMO KATTALASHYAPTI?</h2>
     
<ul>
  <li data-aos="fade-right">Fast food va qayta ishlangan mahsulotlar ko‘paydi</li>
  <li data-aos="fade-right">Asosiy o‘lim sabablari:</li>
  <div className="sabab__omillar">
    <li data-aos="fade-right">Qon aylanish tizimi kasalliklari: 58,7 %</li>
    <li data-aos="fade-right">Shakar va tuz ortiqcha iste’mol qilinmoqda</li>
    <li data-aos="fade-right">Jismoniy faollik past (kam harakat)</li>
    <li data-aos="fade-right">Stress va noto‘g‘ri uyqu rejimi</li>
  </div>
  <h4  className='sabab__h4' data-aos="fade-up">Natijada</h4>
  <li className='sabab__li' data-aos="fade-up">Semizlik</li>
  <li className='sabab__li' data-aos="fade-up">Diabet</li>
  <li className='sabab__li' data-aos="fade-up">Yurak kasalliklari keskin oshmoqda</li>

</ul>
       </div>
    </section>
  )
}

export default Sabab
