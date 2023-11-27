import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import RestaurantPage from "../pages/RestaurantPage";
import MenuEditor from "../pages/MenuEditor";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName="LoginPage"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="LoginPage" component={LoginPage}/>
			<Screen name="RegisterPage" component={RegisterPage}/>
			<Screen name="HomePage" component={HomePage} />
			<Screen name="MenuEditor" component={MenuEditor} /> 
			<Screen name="MenuPage" component={MenuPage} />
			<Screen name="RestaurantPage" component={RestaurantPage} />


		</Navigator>
	);
}