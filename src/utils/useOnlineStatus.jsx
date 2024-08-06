import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // check if online return onlineStatus
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
        window.addEventListener("online", () => { 
            setOnlineStatus(true);
        })
    }, [])

    return onlineStatus; 
};

export default useOnlineStatus;