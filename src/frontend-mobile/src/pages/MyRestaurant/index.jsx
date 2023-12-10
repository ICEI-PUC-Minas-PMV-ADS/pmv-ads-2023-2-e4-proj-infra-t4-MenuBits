import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuCards from "./components/MenuCards";
import MyItensCard from "./components/MyItensCard";
import StatisticsCard from "./components/StatisticsCard";
import PagerView from "react-native-pager-view";
import { View } from "react-native";
import PaginaIndicador from "./PaginaIndicador";

const RestaurantHomePage = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [menus, setMenus] = useState([]);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (evt) => {
    setCurrentPage(evt.nativeEvent.position);
  }

  useEffect(() => {
    axios
      .get(`https://menu-bits-backend.onrender.com/api/restaurante/28`)
      .then((response) => {
        setRestaurantData(response.data.restaurant);
      });

    axios
      .get(`https://menu-bits-backend.onrender.com/api/menus/restaurant/28`)
      .then(async (response) => {
        setMenus((menus) => [...menus, ...response.data.menu]);

        for (const menu of response.data.menu) {
          const itemsResponse = await axios.get(
            `https://menu-bits-backend.onrender.com/api/items/menus/${menu.id}`
          );
          setItems((prevItems) => [...prevItems, ...itemsResponse.data.data]);
        }
      });
  }, []);

  return (
    <View style={{ flex: 1, maxHeight: '90%' }}>
      <PagerView style={{ flex: 1 }} initialPage={0} onPageSelected={handlePageChange}>
        <View key="1">
          <StatisticsCard
            restaurantData={restaurantData}
            menus={menus}
            items={items}
          />
        </View>
        <View key="2">
          <MenuCards menus={menus} />
        </View>
        <View key="3">
          <MyItensCard items={items} />
        </View>
      </PagerView>
      <PaginaIndicador currentPage={currentPage} />
    </View>
  );
};

export default RestaurantHomePage;
