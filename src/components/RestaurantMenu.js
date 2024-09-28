import { useEffect, useState } from 'react';
import Shimmer from './shimmer';
import { IMG_CDN_URL, MENU_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';

export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  console.log('ID:::', resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(
      'check 1:: ',
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    );
    console.log(
      'check 2 :: ',
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .carousel
    );

    setResInfo(json.data.cards[2].card.card.info);
    json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel
      ? setResMenu(
          json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.carousel
        )
      : setResMenu(
          json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
            .itemCards
        );
  };

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
