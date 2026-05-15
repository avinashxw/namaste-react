import { useParams } from "react-router-dom";
import { delhiDistricts } from "../utils/mockData";
import useLocationInformation from "../utils/useLocationInformation";

const Location = () => {

    const { locationId } = useParams();

    const locationInfo = useLocationInformation(locationId);
    console.log("locationInfo: ",locationInfo)

    return (
        <>
            <h1>Location: {locationInfo?.name}</h1>
            <h2>Headquaters: {locationInfo?.headquarters}</h2>
        </>
    );
};

export default Location;