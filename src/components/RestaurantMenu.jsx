import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () =>{

    const [resInfo, SetResInfo] = useState(null);

    const {resId} = useParams();

    const[showIndex, setShowIndex] = useState(0);

// custom hook line fro fetching the data
    //const resInfo = useResMenu(resId);

   
    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async () =>{
        const data = await fetch( MENU_API + resId );
        const json = await data.json();
        //console.log(json);
        SetResInfo(json.data);
    };

   if( resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
// log all the itemCategory present
    //console.log( "Hii", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.card?.["@type"]===
    'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
);
// log all the category of a particular restaurant
    //console.log(categories);

    
    return (
        <div className="text-center ">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {/* caterory accordions */}
            {
                categories.map((category, index) =>
                     (
                        //constrolled component
                     <RestaurantCategory 
                        key={category.card.card.title} 
                        data ={category?.card?.card}
                        showItems = {index === showIndex ? true : false} // {true} 
                        setShowIndex = {() => setShowIndex(index)}
                    />
                    ))}
        </div>

    );
};

export default RestaurantMenu; 