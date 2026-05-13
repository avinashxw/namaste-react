import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
      <div key={id} style={{ margin: "auto", border: "2px white solid"}}>
        <img src={logoUrl} width="100px" height="auto" />
        <span>{name}</span>
        <span>{rating}</span>
      </div>
    </>
  );
};

export default CardView;
