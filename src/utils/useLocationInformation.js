import { useEffect, useState } from "react";
import { delhiDistricts } from "./mockData";

const useLocationInformation = (locationId) => {

    //fetchdata

    const [locationInfo, setLocationInfo] = useState(null);

    useEffect(()=>{

        const fetchLocationData = () => {
            const data = delhiDistricts.find(
                (district) => district.id === Number(locationId)
            );
            
            setLocationInfo(data);
        };
        fetchLocationData();
    },[locationId]);

    return locationInfo;
};

export default useLocationInformation;