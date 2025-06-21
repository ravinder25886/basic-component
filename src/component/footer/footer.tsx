import {FC} from "react"

//TODO: We will use interface in upcoming examples
export  type FooterData={
copyRight:string,
version:number,
year:number
};

type Props={
footerData:FooterData
}
//pass string,number and year 
const Footer:FC<Props>=({footerData})=>{
    return(
        <>
        <div>©{footerData.year}-{footerData.copyRight} <b>{footerData.version}</b></div>
        </>
    );
}

export default Footer;