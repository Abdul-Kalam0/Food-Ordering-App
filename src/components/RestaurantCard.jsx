import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
            <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-200 hover:bg-gray-400">
                    <img className="rounded-lg h-52 w-[300px]" src={CDN_URL+ cloudinaryImageId}></img>

                    <h3 className="font-bold py-4 text-xl">{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h5>{avgRating} star</h5>
                    <h6>{costForTwo}</h6>
                    <h6>{sla?.slaString}</h6> 
                    <h6> User: {loggedInUser}</h6> 
            </div>
    );
};

/*
// Higher Order Component 

// take input=> RestaurantCard Output => Enhanced RestaurantCard

export const withPromotedLabe = (RestaurantCard) => {
        return (props) => {
                return (
                        <div>
                                <label>Promoted</label>
                                <RestaurantCard {...props}/>
                        </div>
                        
                )
        }
};
*/
export default RestaurantCard;