import { useEffect, useState } from 'react';
import Shimmer from './shimmer';
import { IMG_CDN_URL } from '../utils/constants';

export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=508883&catalog_qa=undefined&submitAction=ENTER'
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .categories[0].itemCards
    );
    setResInfo(json.data.cards[2].card.card.info);
    setResMenu(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.categories[0]?.itemCards
    );
  };

  // Show Shimmer until menu is loaded
  if (resMenu === null) return <Shimmer />;

  return (
    <div>
      {/* Uncomment and use resInfo to display restaurant details */}
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

      <div>
        {resMenu.map((menu, index) => (
          <div key={menu?.card?.info?.id}>
            <p>
              {index + 1}. {menu.card.info.name} - ₹{menu.card.info.price / 100}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
