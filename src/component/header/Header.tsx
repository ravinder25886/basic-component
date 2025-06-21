import  { FC } from "react";
type Props = {
  isLoggedIn: boolean;
}; 
//Passing a Boolean
const Header:FC<Props>=({isLoggedIn})=>{
    return(
      <>
          <div className='App-header'>
          <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
        </div>
        </>
    );
}

export default Header;