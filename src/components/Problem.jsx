import React from 'react'
import muammo from "../img/muammo_zarar.png"
import chap from "../img/chapga_qayrilgan.png"
import ong from "../img/onga_qayrilgan.png"
import salat from "../img/problem.png"
function Problem() {
  return (
    <section className='problem' id='problem'>
       <div className="problem__content" data-aos="fade-up">
         <img className='muammo' data-aos="fade-up-right" src={muammo} alt="Muammo" />
        <img className='pr__chap' data-aos="fade-right" src={chap} alt="Chapga qayrilgan" />
        <img className='pr__orta' data-aos="fade-down" src={ong} alt="Ongga qayrilgan" />
        <img className='pr__salat' data-aos="fade-left" src={salat} alt="Salat" />
        <img className='pr__ong'data-aos="fade-left" src={chap} alt="Chapga qayrilgan" />
      <h2 data-aos="fade-up">MUAMMO VA SABABLAR</h2>
      <li className="problem__p">O‘zbekiston, 2025 yilda jami 177 104
nafar odam vafot etgan.</li>
<ul>
  <li>O‘zbekiston, 2025 yilda jami 177 104 nafar odam vafo</li>
  <li>Asosiy o‘lim sabablari:</li>
  <div className="omillar">
    <li>Qon aylanish tizimi kasalliklari: 58,7 %</li>
    <li>Saraton: 9 %</li>
    <li>Nafas olish kasalliklari: 13 %</li>
    <li>Hazm qilish tizimi kasalliklari: 10 %</li>
  </div>
  <li>Bu kasalliklarning aksariyati turmush tarzi va ovqatlanish bilan bog‘liq</li>
</ul>
       </div>
    </section>
  )
}

export default Problem
