import React from 'react'
import './studies.css'
import '../../components/Button/button.css';
import studies from '../../assets/studies.png'
import ceo from '../../assets/ceo.png'

const Studies = () => {
  return (
    <div>
      {/* First section */}
      <div className='st_container'>
        <div className='st_sec_one'>
          <div className='st_left'>
            <h1>Spórolj meg tengernyi időt, velünk!</h1>
            <h2>A folyamatok felmérését és a robotok fejlesztését bízd ránk, hogy azzal foglalkozhass, ami igazán számít.</h2>
            <div className='button'>
              <button type="button">Kapcsolatfelvétel</button>
            </div>
          </div>
          <div className='st_right'>
            <img src={studies} alt='Studies' />
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className='st_container'>
        <div className='st_sec_two'>
          <div className='st_right'>
            <img src={ceo} alt='Ceo' />
          </div>
          <div className='st_left'>
            <h1>Minden együttműködés egy jó beszélgetéssel kezdődik.</h1>
            <h2>Foglalj időpontot és beszéljünk a problémáid megoldásáról.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studies;
