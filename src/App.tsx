import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/footer';

// Define the data to pass
const footerInfo = {
  copyRight: "theravinder.com",
  version: 1.2,
  year:new Date().getFullYear()
};

function App() {
  return (
    <>
    <div className="App">
     <Header isLoggedIn={true}/>
      <div>
        <h1>Home Page</h1>
      </div>
    <Footer footerData={footerInfo}/>
    </div>
    </>
  );
}

export default App;
