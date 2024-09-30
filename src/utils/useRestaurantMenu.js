import { MENU_URL } from "./constants";
import { useEffect, useState } from 'react';

export const useRestaurantMenu = (resId)=>{
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  

  // fetch data 

useEffect(()=>{
  fetchMenuData();
},[])

const fetchMenuData = async()=>{
  const data = await fetch(MENU_URL+ resId);
  const json = await data.json();
  console.log('check 1:: ',json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel);
  
// setting info
 setResInfo(json.data.cards[2].card.card.info);

 //setting menu
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
}

  return {resMenu, resInfo};
}