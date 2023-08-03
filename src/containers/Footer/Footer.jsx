import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_links'>
        <div className='footer_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='footer_links_about'>
          <h4>Rólunk</h4> <br></br>
          <p>Küldetésünk</p>
          <p>Történetünk</p>
          <p>A Csapat</p>
        </div>
        <div className='footer_links_about'>
          <h4>Tudj meg többet!</h4> <br></br>
          <p>Blog</p>
          <p>Hogy működik az RPA?</p>
          <p>GY.I.K.</p>
        </div>
        {/*<div className='footer_links_about'>
          <h4>Stories</h4>
          <p>Blog</p>
          <p>Tech Stories</p>
        </div>
        <div className='footer_links_about'>
          <h4>Hire</h4>
          <p>Career</p>
          <p>Freelancers</p>
          <p>Trainee</p>
  </div>*/}
      </div>
      <div className='footer_copyright'>
          <p>© 2023 BlueBot Company, Minden jog fenntartva.</p>
      </div>
    </div>
  )
}

export default Footer