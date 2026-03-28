import React from 'react'
import muammo from "../img/muammo_zarar.png"
import chap from "../img/chapga_qayrilgan.png"
import ong from "../img/onga_qayrilgan.png"
import salat from "../img/problem.png"
function Problem() {
  return (
    <section className='problem' id='problem'>
       <div className="problem__content">
         <img className='muammo' src={muammo} alt="Muammo" />
        <img className='pr__chap' src={chap} alt="Chapga qayrilgan" />
        <img className='pr__orta' src={ong} alt="Ongga qayrilgan" />
        <img className='pr__salat' src={salat} alt="Salat" />
        <img className='pr__ong' src={chap} alt="Chapga qayrilgan" />
      <h2>MUAMMO VA SABABLAR</h2>
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
  <li>Bog‘liqlik: ortiqcha shakar va semizlik yurak, qon aylanish tizimi va boshqa
kasalliklarga olib keladi</li>
</ul>
       </div>
    </section>
  )
}

export default Problem
