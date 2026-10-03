import RestaurantCard from "./restaurantCard";

function Body() {
  const restaurants = [
    {
      id: 1,
      name: "Empire Restaurant",
      cuisine: "Biryani, North Indian",
      rating: 4.3,
      deliveryTime: "30 mins",
      image: "https://via.placeholder.com/250x150"
    },
    {
      id: 2,
      name: "Udupi Garden",
      cuisine: "South Indian, Dosa",
      rating: 4.5,
      deliveryTime: "25 mins",
      image: "https://via.placeholder.com/250x150"
    },
    {
      id: 3,
      name: "Pizza Corner",
      cuisine: "Pizza, Italian",
      rating: 4.1,
      deliveryTime: "35 mins",
      image: "https://via.placeholder.com/250x150"
    }
  ];

  return (
    <main className="body">
      <h2>Restaurants Near You</h2>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </main>
  );
}

export default Body;