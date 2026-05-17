import { useState } from "react";
import FamousFor from "./FamousFor";
import MetroConnectivity from "./MetroConnectivity";

const Accordian = ({locationInfo}) => {    
    
    const [ showFamousAccordian, setShowFamousAccordian] = useState(false);
    const [ showMetroAccordian, setShowMetroAccordian ]  = useState(false);
    
    const handleFamousClick = () => {
        setShowFamousAccordian(!showFamousAccordian);
    }

    const handleMetroClick = () => {
        setShowMetroAccordian(!showMetroAccordian);
    }

    return (
        <>
            <div>
                <div className="mt-4 w-6/12 m-auto bg-amber-200 ">
                    <div className="text-2xl flex justify-between p-2">
                        <span>Famous for</span>
                        <span onClick={handleFamousClick}>+</span>
                    </div>
                    <div>
                        { showFamousAccordian && <FamousFor places={locationInfo?.famousFor} />}
                    </div>
                </div>
                
                <div className="mt-4 w-6/12 m-auto bg-gray-200 p-2">
                    <div className="text-2xl flex justify-between p-2">
                        <span>Metro Connectivity</span>
                        <span onClick={handleMetroClick}>+</span>             
                    </div>
                    <div>
                        { showMetroAccordian && <MetroConnectivity metrolines={locationInfo?.metroLines} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordian;