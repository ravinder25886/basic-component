import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/footer';

function App() {
  return (
    <>
    <div className="App">
     <Header title="I am from App!"/>
      <div>
        <h1>Home Page</h1>
      </div>
    <Footer/>
    </div>
    </>
  );
}

export default App;
