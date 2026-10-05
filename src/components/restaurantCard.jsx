import { useEffect } from "react";
import { CLOUDINARY_URL } from "../utils/constant";

function RestaurantCard({ restaurant }) {
    const { name, cuisine, avgRating, sla, cloudinaryImageId } = restaurant;
    useEffect(() => {
        console.log('child useEffect');
    }, []);
    
    console.log('child render');
    return (
        <div className="restaurant-card">
            <img
                src={
                    CLOUDINARY_URL + cloudinaryImageId
                }
                alt={name}
            />
            <h3>{name}</h3>
            <p>{cuisine}</p>
            <p>⭐ {
                avgRating
            }</p>
            <p>🕒 {sla.deliveryTime}</p>

        </div>
    );
}

export default RestaurantCard;