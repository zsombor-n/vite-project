import React from 'react'
import './app.css';
import {Hero, Services, Studies, FAQ, Footer } from "./containers/index"
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Studies/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App