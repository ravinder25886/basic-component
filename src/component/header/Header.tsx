import  { FC } from "react";
type Props = {
  title: string;
}; 
const Header:FC<Props>=({title})=>{
    return(
      <>
          <div className='App-header'>
          <p>Welcome to React! <b>{title}</b></p>
        </div>
        </>
    );
}

export default Header;