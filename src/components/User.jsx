import { useEffect, useState } from "react";

const User = ({name}) =>{

const [count, setCount] = useState(0);
const [count2, setCount2] = useState(1);

useEffect(()=>{
    // API call

}, []);



    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : Bareilly</h3>
            <h4>Contact : @abdulkalamiit</h4> 
        </div>
    );
};
export default User;