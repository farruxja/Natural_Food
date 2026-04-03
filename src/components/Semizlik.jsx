import React from 'react'
import chap from "../img/chapga_qayrilgan.png"
import orta from "../img/onga_qayrilgan.png"
import qulupnay from "../img/qulupnay_asarti.png"
import chap__salat from "../img/chap_salatbargi.png"
function Semizlik() {
  return (
    <section className='semizlik'>
        <img src={chap__salat} className='chap__salat' alt="" />
        <img className='sem__chap'data-aos="fade-right" src={chap} alt="Chapga qayrilgan" />
        <img className='sem__orta' data-aos="fade-down"src={orta} alt="Onga qayrilgan" />
        <img className='sem__salat' data-aos="fade-left" src={qulupnay} alt="Qulupnay asarti" />
      <h2 data-aos="fade-right">SEMIZLIK VA SHIRINLIKLAR</h2>
      <div className="sem__p">
        <li data-aos="fade-right">O‘zbekistonda ortiqcha vazn:</li>
        <li data-aos="fade-right">25–30% (yoshlar va kattalarda)</li>
        <li data-aos="fade-right">Chips, shokolad, shirinliklar:</li>
        <li data-aos="fade-right">tez hazm bo‘ladi</li>
        <li data-aos="fade-right">qondagi shakarni tez oshiradi</li>
        <li data-aos="fade-right">yana ochlik hissini keltiradi</li>
      </div>
   <h4 data-aos="fade-right" className='sabab__h4' >Natijada</h4>
  <li data-aos="fade-right" className='sabab__li'>Ortiqcha kaloriya → semizlik → kasalliklar</li>

    </section>
  )
}

export default Semizlik
