import React from 'react'
import chap from "../img/chapga_qayrilgan.png"
import orta from "../img/onga_qayrilgan.png"
import qulupnay from "../img/qulupnay_asarti.png"
import chap__salat from "../img/chap_salatbargi.png"
function Semizlik() {
  return (
    <section className='semizlik'>
        <img src={chap__salat} className='chap__salat' alt="" />
        <img className='sem__chap' src={chap} alt="Chapga qayrilgan" />
        <img className='sem__orta' src={orta} alt="Onga qayrilgan" />
        <img className='sem__salat' src={qulupnay} alt="Qulupnay asarti" />
      <h2>SEMIZLIK VA SHIRINLIKLAR</h2>
      <div className="sem__p">
        <li>O‘zbekiston kattalar va yoshlar orasida
ortiqcha vazn ~25–30 %</li>
      </div>
      <li className='semizlik__li'>
        Chipslar, krekerslar va shokoladlar tez hazm
bo‘ladi, qon shakarini tez oshiradi → ortiqcha
kaloriyaga olib keladi
      </li>
    </section>
  )
}

export default Semizlik
