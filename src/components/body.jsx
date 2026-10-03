import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from "react";

function Body() {

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const data = await res.json();
            setRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    }

    const getFilterRestaurants = () => {
        console.log(searchText);
        const filtered = restaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }

    const topRestaurants = () => {
        const filtered = restaurants.filter((restaurant) => restaurant.info.avgRating > 4.5);
        setFilteredRestaurants(filtered);
    }

    return restaurants.length === 0 && filteredRestaurants === 0 ?
        <h1>Loading...</h1>
        :
        (<main className="body">
            <div className="search-container">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchText}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setSearchText(e.target.value);
                        }}
                    />
                    <button onClick={getFilterRestaurants}>Search</button>
                </div>
                <div className="top-rated-btn">
                    <button onClick={topRestaurants}>Top Rated</button>
                </div>
            </div>
            <h2>Restaurants Near You</h2>

            <div className="restaurant-list">
                {filteredRestaurants.map((filteredRestaurant) => (
                    <RestaurantCard
                        key={filteredRestaurant.info.id}
                        restaurant={filteredRestaurant.info}
                    />
                ))}
            </div>
        </main>)
}

export default Body;