
import Shimmer from './shimmer';
import { IMG_CDN_URL, MENU_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { useRestaurantMenu } from '../utils/useRestaurantMenu';

export const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log('ID:::', resId);
const menu = useRestaurantMenu(resId)
console.log('MENU from HOOK :',menu);

const {resInfo, resMenu} = useRestaurantMenu(resId);
console.log('COMPONENT MENU RESULT:::',resInfo, resMenu);

  // Show Shimmer until menu is loaded
  if (resMenu === null) return <Shimmer />;

  return (
    <div>
      <div>
        <img
          src={IMG_CDN_URL + resInfo.cloudinaryImageId}
          alt={resInfo.name}
        ></img>
        <h2>{resInfo.name}</h2>
        {resInfo.labels.map((res, index) => (
          <div key={index}>
            <h4>
              {res.title}: {res.message}
            </h4>
          </div>
        ))}
      </div>
      <br />
      Menu
      <div>
        if(resMenu.dish):(
        {resMenu.map((menu, index) => (
          <div key={menu?.dish?.info?.id}>
            <p>
              {index + 1}. {menu.dish?.info.name} - ₹
              {menu.dish?.info.price / 100}
            </p>
          </div>
        ))}
        ):( )
      </div>
    </div>
  );
};
