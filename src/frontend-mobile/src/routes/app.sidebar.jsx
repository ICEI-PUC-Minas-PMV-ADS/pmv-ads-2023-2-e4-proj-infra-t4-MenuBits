import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import RestaurantPage from "../pages/RestaurantPage";
import MenuEditor from "../pages/MenuEditor";
import MyRestaurant from "../pages/MyRestaurant";
import PerfilUserMobile from "../pages/Perfilpages/PerfilUser";
import PerfilRestaurantMobile from "../pages/Perfilpages/PerfilRestaurant"
import EditPerfilUserMobile from '../pages/Perfilpages/EditPerfilUser';
import EditPerfilRestaurantMobile from '../pages/Perfilpages/EditPerfilRestaurant';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const HeaderSidebar = () => {

  function PerfilGroup() {
    return (
      <Stack.Navigator screenOptions={{headerLeft: () => null}}>
        <Drawer.Screen name="Perfil" component={PerfilUserMobile} />
        <Drawer.Screen name="EditPerfilUserMobile" component={EditPerfilUserMobile} />
      </Stack.Navigator>
    );
  }

  function PerfilRestaurantGroup() {
    return (
      <Stack.Navigator screenOptions={{headerLeft: () => null}}>
        <Drawer.Screen name="Perfil do Restaurante" component={PerfilRestaurantMobile} />
        <Drawer.Screen name="EditPerfilRestaurantMobile" component={EditPerfilRestaurantMobile} />
      </Stack.Navigator>
    );
  }

  function HomeGroup() {
    return (
      <Stack.Navigator screenOptions={{headerLeft: () => null}}>
        <Drawer.Screen name="HomePage" component={HomePage} />
        <Drawer.Screen name="RestaurantPage" component={RestaurantPage} />
        <Drawer.Screen name="MenuPage" component={MenuPage} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home">
        {() => (
          <Drawer.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#930000',
            },
            headerTintColor: '#ffffff',
            drawerStyle:{
              backgroundColor:'#F39D54',
              width:230   
            },
            headerTitleStyle: {
              fontWeight: 'bold',
          },
          }}
          >

            {/* telas do cliente */}

              <Drawer.Screen name="Home" component={HomeGroup} />
              <Stack.Screen name="Perfil" component={PerfilGroup} />


            {/* telas do restaurante */}

              <Drawer.Screen name="Meu Restaurante" component={MyRestaurant} />
              <Drawer.Screen name="Editor de cardápio" component={MenuEditor} /> 


            <Drawer.Screen name="Perfil do restaurante" component={PerfilRestaurantGroup} />

          </Drawer.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default HeaderSidebar;