import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.73826769999999&lng=77.0822151&str=North%20Indian&trackingId=undefined&submitAction=DEFAULT_SUGGESTION&queryUniqueId=51792441-557d-8f4e-66d5-e1169442a47a");

        const jsonData = await data.json();
        setResInfo(jsonData.data);
        console.log("Data: ",jsonData.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT.cards);
    }

    //const { name } = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;

    return resInfo === null ? "Loading..." :  (
        <div>
            <h1>RestaurantPage: {resId}</h1>
            <h2>Menu</h2>
        </div>
    );
};

export default RestaurantPage;