//Step 1: Add use state hook
import {FC,use,useState} from "react"
//What is useState
//useSate is a react fundtion which helps to manage state in React app. It called a Hook, mena you can hook these types of function in your react app.
//Note: Hooks are a new addition in React 16.8.

//Step2: Define the user type/class
export type User={
    id:number,
    name:string,
    emailAddress:string,
    moobileNumber:string
}

const UserList:FC=()=>{
//Step 3: Create useState variable for user list
const[users,setUsers]=useState<User[]>([]);// Not we cannot declare useState hook outside function

//Step 4: Create a add user function for adding a new user into useState hook
const addUser=()=>{
        //Step 5: create dumm user data  
        const newUser:User={
            id:users.length+1,
            name:`User ${users.length+1}`,
            emailAddress:`user${users.length+1}@theravinder.com`,
            moobileNumber:`+44-779945881${users.length}`//
        };
        //Step 6: update users list in useState hook
        setUsers([...users,newUser]);
    }
    return (
        <>
        <div><h1>User List</h1></div>
        {/*Step 7: Add button with onClick button and call addUser function*/}
        <div><button onClick={addUser}>Add</button></div>
        {/*Step 8:Bind user list in a table*/}
        {
           users.length>0?(
           <div>
            <table  border={1} cellPadding={8} style={{ marginTop: '20px', width: '100%' }}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                            /*Why we are using key? we will learn this in upcoming blogs :) */
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.emailAddress}</td>
                                <td>{user.moobileNumber}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
           </div>
        ):(
            <p>No users added yet.</p>
        )}
        </>
    );
}
export default UserList;