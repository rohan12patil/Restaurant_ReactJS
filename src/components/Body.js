import { RestaurantCard } from './RestaurantCard';
import { RESTAURANT_LIST_URL } from '../utils/constants';
import { useEffect, useState } from 'react';

export const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const result = await data.json();
    console.log(
      result.data.success.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setrestaurantList(
      result?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restaurantList.length === 0) {
    return <h1>Loading .....</h1>;
  }

  return (
    <div className='body'>
      <div className='search-container'>Search</div>
      <button
        onClick={() => {
          let filteredList = restaurantList.filter(
            (res) => res.info.avgRating > 4.3
          );
          setrestaurantList(filteredList);
        }}
      >
        Rating 4.x
      </button>
      <div className='restaurant-container'>
        {restaurantList.map((res) => (
          <RestaurantCard resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
