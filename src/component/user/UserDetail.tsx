import {FC} from "react"
import UserList from "./UserList"
export type User={
    name:string,
    emailAddress:string,
    moobileNumber:string
}

type Props={
    user:User
}

//Pass json object
const UserDetail:FC<Props>=({user})=>{
    return(
        <>
            <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.emailAddress}</p>
                <p>Mobile:{user.moobileNumber}</p>
            </div>
            <div>
                <UserList/>
            </div>
        </>
    );
}

export default UserDetail;