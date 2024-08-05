import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

// custom hook
const useResMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);
    // fetchdata

    useEffect(()=>{
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    return resId;
};

export default useResMenu;