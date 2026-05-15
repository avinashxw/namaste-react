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
            <div className="card-container">
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