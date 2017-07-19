import React, { Component } from 'react';
import './styles/App.css';

//component import
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import Section from './components/Section.js'
import Form from './components/Form.js'
import Footer from './components/Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
