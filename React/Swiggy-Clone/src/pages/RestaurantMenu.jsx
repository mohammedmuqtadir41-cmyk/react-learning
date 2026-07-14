import { MenuURL } from "../mockData/constants";
import { useEffect, useState } from "react";

export const RestaurantMenu = () => {
  const [menu, setMenu] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(MenuURL);
    const data = await response.json();
    console.log(data.data.cards.cards.cards.cards.info);
    setMenu(data);
    
  };

  return(
    <div>
        <h1>Restaurant Menu</h1>
    </div>
  )
};
