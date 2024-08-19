import { IMG_CDN_URL } from '../utils/constants';

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData;
  return (
    <div className='res-card'>
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>Delivery: {sla?.deliveryTime} minutes</h4>
      <h4>{avgRating} Stars </h4>
    </div>
  );
};
