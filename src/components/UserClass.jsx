import React from "react";
// Hooks is introduced in Functional component
//for Class component we will use previous method loading the class based component i.e instance of the class

/*
// LIFE CYCLE OF CLASS BASED COMPONENT
HOW IT IS MOUNTED IN THE WEBPAGE
    PARENT IS called
    CONST IS CALLED THEN RENDER IS CALLED THEN IF ANY COMPONENT IS THERE IT IS CALLED THEN IN THAT COMPONENT CONST CALLED AND THEN RENDER IS CALLED

    IF componentDidMount() is present is the component than first const is called than render() is called and after that componentDidMount is called
*/

class UserClass extends React.Component { 

    // CONSTRUCTOR 
    constructor(props){
        super(props);
        // this state is a big object it contain all the state variable
        this.state = {
            userInfo: {
                name: "Dummy",
                login: "123456",
                location: "Default",
                avatar_url: "https://avatars.githubusercontent.com/u/111004293?v=4",
            }
        };
        console.log("CHILD CONSTRUCTOR ");
    }
     // component Did Mount is used to make API call make it inside(render as fast as possible then make an API call and fill the data and rerender)
    async componentDidMount(){
        //console.log("child componentDidMount");

        // API call
        const data = await fetch("https://api.github.com/users/ABDUL897930");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }
    
    componentDidUpdate(){
        //console.log("component did update");
    }

    componentWillUnmount(){
        //console.log("component will unmount");
    }

    render() {
       
        const {name, location, login, avatar_url} = this.state.userInfo;
    
        //console.log("CHILD RENDER ");
        return (
            <div className="user-card">
                {/* // Never update state var directally 
                // this.state.count = this.state.count++;
                // this is how we will update the count in Class Component */}
                <img src={avatar_url} alt="" />
                <h2>Name : {name}</h2>
                <h3>Login : {login}</h3>
                <h4>Contact : @abdulkalamiit</h4>
                <h4>Location : {location}</h4>
            </div>
        );
    }
}

export default UserClass;

//const called
//render happen with default values(DOM with dummy data) page loaded with dummy data
//componentDidMount()=>API call made=>setState()=><this.setState()>update the state variable=>render again=>sate variable update the new values(Dom update)
//component did update ()=>called last after data is updated