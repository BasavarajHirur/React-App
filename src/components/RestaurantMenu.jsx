import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

export const RestraurantMenu = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const res = await fetch(MENU_API + id);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    }

    return (
        <div>
            <h1>Restaurant Menu</h1>
            <p>Here is the menu of the selected restaurant.</p>
            {
                // Render the menu items here

            }
        </div>
    );
}