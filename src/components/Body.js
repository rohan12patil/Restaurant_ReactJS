import { RestaurantCard } from './RestaurantCard';
import { RESTAURANT_LIST_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import Shimmer from './shimmer';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../utils/useOnlineStatus';


export const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [searchText, setsearchText] = useState('');
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const result = await data.json();
    let resData =
      result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setrestaurantList(resData);
    setfilteredRestaurantList(resData);
  };


  const isOnline = useOnlineStatus();
  if(!isOnline){
    return <h1>You are Offline !!! check your internet connection </h1>
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='search-container'>
        <input
          type='text'
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(searchText);
            let filteredList = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurantList(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          let filteredList = filteredRestaurantList.filter(
            (res) => res.info.avgRating > 4.1
          );
          setrestaurantList(filteredList);
        }}
      >
        Rating 4.x
      </button>
      <div className='restaurant-container'>
        {filteredRestaurantList.map((res) => (
          <Link to={'restaurants/' + res.info.id}>
            <RestaurantCard resData={res.info} key={res.info.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};
