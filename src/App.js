import React from 'react'
import './App.css'
import {Footer, Blog, Possibillity, Features, WhatGPT3, Header} from './containers';
import {Cta, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibillity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;