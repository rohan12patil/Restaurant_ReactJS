import { RestaurantCard } from './RestaurantCard';
import { resList } from '../utils/mockData';
import { useState } from 'react';

export const Body = () => {
  const [restaurantList, setrestaurantList] = useState(resList);

  return (
    <div className='body'>
      <div className='search-container'>Search</div>
      <button
        onClick={() => {
          let filteredList = restaurantList.filter(
            (res) => res.info.avgRating > 4
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
