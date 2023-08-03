import React from 'react'
import './services.css'

const Services = () => {
  return (
    <div className='s_container'>
      <div className='s_left'>
        <div className='s_card'>
          <div className='s_card_img card_1'></div>
          <h1>Folyamatfelmérés és konzultáció</h1> <br></br>
          <p>Folyamatok átvilágítása és optimalizációs tanácsadás.</p>
        </div>
        <div className='s_card'>
          <div className='s_card_img card_2'></div>
          <h1>Szoftverrobot-fejlesztés</h1> <br></br>
          <p>A digitális munkatársak soha nem fáradnak el.</p>
        </div>
        <div className='s_card'>
          <div className='s_card_img card_3'></div>
          <h1>Oktatás</h1> <br></br>
          <p>Egyetemi kurzusunk megtalálható a BGE-n.</p>
        </div>
        <div className='s_card'>
          <div className='s_card_img card_4'></div>
          <h1>Üzemeltetés és támogatás</h1> <br></br>
          <p>Projektjeink nem a kifizetéssel záródnak.</p>
        </div>
      </div>


      <div className='s_right'>
        <h1>Miben segíthetünk?</h1>
        <h2>RPA fejlesztőink tűkön ülve várják a legnagyobb kihívásokat! <br></br> <br></br>Más megoldásra van szükséged?</h2>
        <button type="button">További szolgáltatásaink</button>
      </div>
    </div>
  )
}

export default Services