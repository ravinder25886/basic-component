import {FC} from "react"

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
                <h1>User Detail</h1>
            </div>
            <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.emailAddress}</p>
                <p>Mobile:{user.moobileNumber}</p>
            </div>
        </>
    );
}

export default UserDetail;