import RestaurantCard, {withPromotedLabe} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    /*
     state varibale  - super powerful variable -> for this we will use ReactHooks(is a normal js function given by use reach only condition that function should have some logic, utility function
    2 very imp ReactHooks
        - useState() - use to generate superpowerful state variable in React
             it main the state of component
        - How to create? = const [ListOfRest]= useState();
        - useEffect()
    )

*/
/* M1 
this is destructuring of Array
const [ListOfRest, setListOfRest]= useState(resList);

                    OR

const arr = useState(resList);
const [ListOfRest, setListOfRest]= arr

*/
/*
How to call data flying OR how to fetch the data
we will write the code to fetch the data => useEffect();

syntax 
useEffect() it will take 2 arguments, (1arg) Arrow fucnt i.e callback function (2arg) dependency array

(1arg) Arrow fucnt i.e callback function => is called after the component rendering
*/

// whenever a local state variable updates, react trigger a reconsiliation cycle(re-render the component)

// local state varibale  - super powerful variable
// dont create state var is loop, function(), or in condition statement
const [ListOfRest, setListOfRest]= useState([]);
const [filteredRest, setFilteredRest] = useState([]);

const [SearchText, setSearchText] = useState("");
const {loggedInUser} = useContext(UserContext);

// const RestaurantCardPromoted = withPromotedLabe(RestaurantCard);

// console.log(ListOfRest);


useEffect(() => {
    // API Call
    fetchData();
}, []);

// fetching SWIGGY API using fetch(), async and await
// fetch() is given to us by brower which JSEngine has.

const fetchData = async () => {

const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
); 

// converting data to JASON
const json = await data.json();
// console.log(json);

// optional chaiing
setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

};

const onlineStatus = useOnlineStatus();
if(onlineStatus === false){
    return (
        <h1>Looks like you're offline!! Please check your Internet connection</h1>
    )
}

//console.log("body Rendered");
/*
conditional rendering
to show the LOading... until API gets the data
    if(ListOfRest.length === 0){
        return (
            <Shimmer/>;
        )
    }
*/

// i have to bind the value in search to local variable 
    return ListOfRest.length === 0 ? <Shimmer/> : (
            <div className="body">
                    <div className="flex items-center">
                        <div className="m-4 p-4" > 
                            <input type="text" className="border border-solid border-black rounded-lg" value={SearchText} 
                            onChange={ (e) => { 
                                setSearchText(e.target.value);
                                // console.log(SearchText);
                            }} /> 
                            <button className="bg-green-100 m-4 px-8 py-2 rounded-xl " onClick={() => {
                                
                                // filter the res based on the keyword searched and return
                                // searchText
                                // console.log(SearchText);

                                const filteredRes =  ListOfRest.filter(
                                    (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                                );
                                    setFilteredRest(filteredRes);

                            }}>
                                Search
                            </button>

                        </div>
                        <div className="m-4 p-4 items-center">
                            <button className="bg-gray-200 m-2 px-8 py-2 rounded-xl" 
                                onClick={() => {
                                    // write the filter logic for top rated
                                    // filter the res based on the rating
                                    const filteredList = ListOfRest.filter(
                                        (res) => res.info.avgRatingString > 4.4
                                    );
                                        setFilteredRest(filteredList);
                                    }}>
                                        Top Rated Restaurant
                            </button>   
                        </div>
                        {/* <div >
                            <label>UseName: </label> 1
                            <input type="text" className="border border-solid border-black rounded-lg" value={loggedInUser}/>
                        </div> */}
                        
                    </div>
                    <div className="flex flex-wrap">
                        { filteredRest.map((restaurant) => (
                            <Link style={{ textDecoration: 'none' }}
                            key = {restaurant.info.id} 
                            to={"/restaurants/" + restaurant.info.id}
                            >
                                {/* if the restaurant is promoted then add a promoted label to it */}
                                {/* {
                                    restaurant.data.promoted ? <RestaurantCardPromoted resData={restaurant}/> : 
                                } */}

                                <RestaurantCard  resData={restaurant}/> 
                            </Link>
                        ))};
                    </div>       
            </div>
    );
};

export default Body;

// whenever stateVariable (setListOfRest) changes react rerender the component


/*

without using Hooks
onClick={() => {
                            // write the filter logic
                            ListOfRest = ListOfRest.filter(
                                (res) => res.data.avgRating > 4);
                            }}>


*/