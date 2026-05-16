import { restaurantsData } from "../utils/mockData.js";
import CardView, { withPromotedLabel } from "./CardView.js";

const { id,
name,
cuisine,
rating,
deliveryTime,
costForTwo,
image,
offer } = restaurantsData;

const Card = () => {
const CardViewPromoted = withPromotedLabel(CardView);
    return (
        <>
            <div className="card-container">
                {
                    restaurantsData.map((cardData)=>(
                        (
                            cardData.promoted ? (
                                <CardViewPromoted key={cardData.id} data={cardData} />
                            ) : (
                                <CardView key={cardData.id} data={cardData} />
                            )
                        )                      
                    ))
                }
            </div>
        </>
    )
};

export default Card;