import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import '../Button/button.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav">
      <div className="nav_links">
        <div className="nav_logo">
          <img src={logo} />
        </div>
        <div className="nav_links_container">
          {/*<p><a href="#home">Home</a></p>*/}
          <p><a href="#services">Szolgáltatásaink</a></p>
          <p><a href="#wrpa">Mi az RPA?</a></p>
          <p><a href="#features">Esettanulmányok</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="button">
        <button type="button">Kapcsolat</button>
      </div>
      <div className="toggle_menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="menu_container">
          <div className="menu_container-links">
          {/*<p><a href="#home">Home</a></p>*/}
          <p><a href="#services">Szolgáltatásaink</a></p>
          <p><a href="#wrpa">Mi az RPA?</a></p>
          <p><a href="#features">Esettanulmányok</a></p>
          <p><a href="#blog">Blog</a></p>
          </div>
          <div className="button">
            <button type="button">Kapcsolat</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
