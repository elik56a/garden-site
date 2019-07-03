import React, { Component } from 'react';
import Header from './components/Header'
import ShowCase from './components/ShowCase'
import MainInfo from './components/MainInfo';
import LawyerPhoto from './components/LawyerPhoto';
import Subjects from './components/Subjects';
import Video from './components/Video';
import Contact from './components/Contact';
import Offices from './components/Offices'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
        <Header />
        <ShowCase />
        <LawyerPhoto />
        <MainInfo />
        <Subjects />
        <Video />
        <Pricing />
        <Contact />
        <Offices />
        <Footer />
        <div className='footer-c'>
          This site made by Eliyahu Kriel
            </div>
      </React.Fragment>
    );
  }
}

export default App;
