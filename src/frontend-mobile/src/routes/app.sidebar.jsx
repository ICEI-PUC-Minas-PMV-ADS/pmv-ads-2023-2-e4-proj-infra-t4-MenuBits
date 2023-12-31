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
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import RegisterPage from '../pages/RegisterPage';
import RestaurantLogin from '../pages/RestaurantLogin';
import RestaurantRegister from '../pages/RestaurantRegister';

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
        <Drawer.Screen name="PerfilRestaurantMobile" component={PerfilRestaurantMobile} />
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
        <Drawer.Screen name="CartPage" component={CartPage} />
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

            <Drawer.Screen name="Home" component={HomeGroup} />
            <Stack.Screen name="Perfil" component={PerfilGroup} />
            <Drawer.Screen name="Meu Restaurante" component={MyRestaurant} />
            <Drawer.Screen name="Editor de cardápio" component={MenuEditor} /> 
            <Drawer.Screen name="Perfil do restaurante" component={PerfilRestaurantGroup} />
            <Drawer.Screen name="Efetuar Login" component={LoginPage} />
            <Drawer.Screen name="Efetuar Login Restaurante" component={RestaurantLogin} />
            <Drawer.Screen name="Registro Usuário" component={RegisterPage} />
            <Drawer.Screen name="Registro Restaurante" component={RestaurantRegister} />

          </Drawer.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default HeaderSidebar;