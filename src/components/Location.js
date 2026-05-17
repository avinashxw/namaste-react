import { useParams } from "react-router-dom";
import { delhiDistricts } from "../utils/mockData";
import useLocationInformation from "../utils/useLocationInformation";
import { useState } from "react";
import Accordian from "./Accordian";

const Location = () => {

    const { locationId } = useParams();

    const locationInfo = useLocationInformation(locationId);

    return (
        <>
            <div className="">
                <div className="text-center">
                    <p className="text-5xl font-bold text-white">{locationInfo?.name}</p>
                    <p className="text-4xl mt-4">Headquaters: {locationInfo?.headquarters}</p>
                </div>
                
                <Accordian locationInfo={locationInfo} />
            </div>
        </>
    );
};

export default Location;