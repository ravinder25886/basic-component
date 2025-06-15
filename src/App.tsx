import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/footer';
import UserDetail from './component/user/UserDetail';

// Define the data to pass
const footerInfo = {
  copyRight: "theravinder.com",
  version: 1.2,
  year:new Date().getFullYear()
};
//Create user data object
//Note: We must pass the same property names and data types as defined in the type or interface. Otherwise, TypeScript will throw a type error.
const userInof={
name:"Ravinder Singh",
emailAddress:"info@theravinder.com",
moobileNumber:"0123456789"
};
function App() {
  return (
    <>
    <div className="App">
     <Header isLoggedIn={true}/>
      <div>
        <h1>Home Page</h1>
        <UserDetail user={userInof}/>
      </div>
    <Footer footerData={footerInfo}/>
    </div>
    </>
  );
}

export default App;
