import { restaurantsData } from "../utils/mockData.js";
import CardView from "./CardView.js";

const { id,
name,
cuisine,
rating,
deliveryTime,
costForTwo,
image,
offer } = restaurantsData;


const Card = () => {
    return (
        <>
            <div style={{display: "flex", flexWrap: "nowrap", gap: "16px", alignItems: "center", padding: "10px"}}>
                {
                    restaurantsData.map((cardData)=>(
                        <CardView key={cardData.id} data={cardData} />
                    ))
                }
            </div>
        </>
    )
};

export default Card;