//rafce => snippet to write the code
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import React from "react";

// this is class componen
class About extends React.Component{
    constructor(props){
        super(props);



        //console.log("PARENT Constructor");

    }
    // component Did Mount is used to make API call make it inside
    componentDidMount(){
       // console.log("PARENT componentDidMount");
    }

    render(){
       // console.log("PARENT RENDER");
        return (
                    <div>
                        <h1 className="text-2xl">About</h1>
                        <h2>This is my Food Ordering App</h2>
                        <UserClass name={"Abdul kalam (Class)"} location={"Bareilly Classes"}/> 
                    </div>
                )

    };
};


// functional component => to class component
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is my Food Ordering App</h2>
//             {/* <User name={"abdul kalam (functional)"} /> */}
//             <UserClass name={"Abdul kalam (Class)"} location={"Bareilly Classes"}/>
//         </div>
//     )
// }



export default About;

/*
when parent have more than 1 child
Parent const
Parent Render
    c1- child const
    c1- chile render

    c2-child const
    c2-parent render
    
    <DOM UPDATED - IN SINGLE BATCH>

    c1-child componentDidMount
    c2-child componentDidMount
Parent componentDidMount
*/
