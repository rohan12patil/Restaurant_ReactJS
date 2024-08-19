import { RestaurantCard } from './RestaurantCard';
import { resList } from '../utils/mockData';

export const Body = () => {
  return (
    <div className='body'>
      <div className='search-container'>Search</div>
      <div className='restaurant-container'>
        {resList.map((res) => (
          <RestaurantCard resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
