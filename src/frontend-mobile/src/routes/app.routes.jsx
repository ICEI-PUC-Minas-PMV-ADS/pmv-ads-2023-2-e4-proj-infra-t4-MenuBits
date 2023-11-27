import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import PerfilUserMobile from "../pages/Perfilpages/PerfilUser";
import PerfilRestaurantMobile from "../pages/Perfilpages/PerfilRestaurant"
import EditPerfilUserMobile from "../pages/Perfilpages/EditPerfilUser"
import EditPerfilRestaurantMobile from "../pages/Perfilpages/EditPerfilRestaurant"
import MenuPage from "../pages/MenuPage";
import RestaurantPage from "../pages/RestaurantPage";
import MenuEditor from "../pages/MenuEditor";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import MyRestaurant from "../pages/MyRestaurant"
import RestaurantRegister from "../pages/RestaurantRegister";
import RestaurantLogin from "../pages/RestaurantLogin";



const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName="LoginPage"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="RestaurantRegister" component={RestaurantRegister}/>
			<Screen name="RestaurantLogin" component={RestaurantLogin} />
			<Screen name="LoginPage" component={LoginPage}/>
			<Screen name="RegisterPage" component={RegisterPage}/>
			<Screen name="HomePage" component={HomePage} />
			<Screen name="PerfilUserMobile" component={PerfilUserMobile} />
			<Screen name="PerfilRestaurantMobile" component={PerfilRestaurantMobile} />
			<Screen name="EditPerfilUserMobile" component={EditPerfilUserMobile} />
			<Screen name="EditPerfilRestaurantMobile" component={EditPerfilRestaurantMobile} />
			<Screen name="MenuEditor" component={MenuEditor} /> 
			<Screen name="MenuPage" component={MenuPage} />
			<Screen name="RestaurantPage" component={RestaurantPage} />
			<Screen name="CartPage" component={CartPage} />
			<Screen name="Meu Restaurante" component={MyRestaurant} />
		</Navigator>
	);
}