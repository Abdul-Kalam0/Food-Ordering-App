import logo from './logo.webp';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {

    const [BtnNameReact, setBtnNameReact] = useState("Login");
    //console.log("header called");

    // if no dependency array []=> whenever my Component is rendered useEffect is called
    // if the dependency array is empty [] => useEffect is called on initial render(just once)
    // if dependency arr[BtnNameReact] is not empty => useEffect is called everytime BtnNameReact is updated

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    //console.log(data);
    
    return (
            <div className="flex justify-between bg-pink-100 flex-wrap shadow-md mb-2 sm:bg-green-50 lg:bg-yellow-50">
                    <div className="logo-container">
                        <img className="w-24" src={logo} />    
                    </div>
                    <div className="flex items-center">
                            <ul className='flex p-4 m-4 justify-center'>
                            {/* when use react and want to go to other page do not use "anchor tag" bcoz whole page will get replaced insted of only modified component */}
                                    
                                    <li className='px-4'>Online Status: {onlineStatus ? "✅" : "🟥"}</li>
                                    <li className='px-4'><Link to="/">Home </Link></li>
                                    <li className='px-4'><Link to="/about">About Us </Link></li>
                                    <li className='px-4'><Link to="/contact">Contact Us </Link></li>
                                    <li className='px-4'><Link to="/grocery">Grocery</Link></li>
                                    <li className='px-4'>Cart</li>
                                    <div className='items-center '>
                                        <button className='' 
                                        onClick={() => {
                                            BtnNameReact === 'Login' ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                                        }}
                                        >
                                            {BtnNameReact}</button>  

                                    </div>
                                    <li className='px-4 font-bold'>{loggedInUser}</li>
                                    
                            </ul>
                    </div>
            </div>
    );
};

export default Header;