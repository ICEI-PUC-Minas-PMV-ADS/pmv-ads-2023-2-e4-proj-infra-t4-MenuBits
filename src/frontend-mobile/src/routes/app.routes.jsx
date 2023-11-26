import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import PerfilUserMobile from "../pages/Perfilpages/PerfilUser";
import PerfilRestaurantMobile from "../pages/Perfilpages/PerfilRestaurant"
import EditPerfilUserMobile from "../pages/Perfilpages/EditPerfilUser"
import EditPerfilRestaurantMobile from "../pages/Perfilpages/EditPerfilRestaurant"
import MenuPage from "../pages/MenuPage";
import RestaurantPage from "../pages/RestaurantPage";
import MenuEditor from "../pages/menuEditor";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName="HomePage"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="HomePage" component={HomePage} />
			<Screen name="PerfilUserMobile" component={PerfilUserMobile} />
			<Screen name="PerfilRestaurantMobile" component={PerfilRestaurantMobile} />
			<Screen name="EditPerfilUserMobile" component={EditPerfilUserMobile} />
			<Screen name="EditPerfilRestaurantMobile" component={EditPerfilRestaurantMobile} />
			<Screen name="MenuEditor" component={MenuEditor} /> 
			<Screen name="MenuPage" component={MenuPage} />
			<Screen name="RestaurantPage" component={RestaurantPage} />

		</Navigator>
	);
}