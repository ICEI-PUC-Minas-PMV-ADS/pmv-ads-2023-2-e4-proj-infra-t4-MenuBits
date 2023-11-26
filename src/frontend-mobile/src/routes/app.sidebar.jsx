import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import RestaurantPage from "../pages/RestaurantPage";
import MenuEditor from "../pages/MenuEditor";
import MyRestaurant from "../pages/MyRestaurant";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const HeaderSidebar = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home">
        {() => (
          <Drawer.Navigator 
          screenOptions={{
            drawerStyle:{
              backgroundColor:'#F39D54',
              width:230   
            }
          }}
          >
            <Drawer.Screen name="HomePage" component={HomePage} />
            <Drawer.Screen name="MenuEditor" component={MenuEditor} /> 
            <Drawer.Screen name="MenuPage" component={MenuPage} />
            <Drawer.Screen name="RestaurantPage" component={RestaurantPage} />
            <Drawer.Screen name="Meu Restaurante" component={MyRestaurant} />
          </Drawer.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default HeaderSidebar;