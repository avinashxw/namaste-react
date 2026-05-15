import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CardView = (data) => {
  const {
    id,
    name,
    cuisine,
    rating,
    deliveryTime,
    costForTwo,
    image,
    offer,
  } = data.data;

  const [logoUrl,setLogoUrl] = useState(LOGO_URL);

  const checkImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => resolve(true);

      img.onerror = () => resolve(false);

      img.src = url;
    });
  }

  checkImage(image).then((isValid) => {
    console.log(isValid)

    if(isValid) {
      setLogoUrl(image)
    }
  })

  return (
    <>
      <div key={id} className="restaurant-card">
      <img
        className="restaurant-image"
        src={logoUrl} 
      />

      <div className="card-content">
        <h2>{name}</h2>

        <div className="card-info">
          <span className="rating">⭐ {rating}</span>
          <span className="delivery-time">{deliveryTime}</span>
        </div>

        <p className="cuisine">{cuisine.toString()}</p>

        <Link to={"/restaurants/"+id}>
          <button className="order-btn">Order Now</button>
        </Link>
        
      </div>
    </div>
    </>
  );
};

export default CardView;
