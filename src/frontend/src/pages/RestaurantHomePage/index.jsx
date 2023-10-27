import MenusCard from "./MenusCard";
import MyItensCard from "./MyItensCard";
import StatisticsCard from "./StatisticsCard";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RestaurantHomePage() {
  const [restaurantData, setRestaurantData] = useState({});
  const [menus, setMenus] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/restaurante/23`)
      .then((response) => {
        setRestaurantData(response.data.restaurant);
      });

    axios
      .get(`${import.meta.env.VITE_API_URL}/menus/restaurant/23`)
      .then((response) => {
        setMenus((menus) => [...menus, ...response.data.menu]);
        console.log(menus);
        response.data.menu.forEach(async (menu) => {
          axios
            .get(`${import.meta.env.VITE_API_URL}/items/menus/${menu.id}`)
            .then((response) => {
              setItems((items) => [...items, ...response.data.data]);
            });
        });
      });
  }, []);

  return (
    <div className="flex flex-row flex-wrap w-full max-h-screen justify-center">
      <MenusCard menus={menus} />
      <StatisticsCard
        restaurantData={restaurantData}
        menus={menus}
        items={items}
      />
      <MyItensCard items={items} />
    </div>
  );
}

