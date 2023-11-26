import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import RestaurantPage from "../pages/RestaurantPage";
import MenuEditor from "../pages/MenuEditor";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName="MenuEditor"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="HomePage" component={HomePage} />
			<Screen name="MenuEditor" component={MenuEditor} /> 
			<Screen name="MenuPage" component={MenuPage} />
			<Screen name="RestaurantPage" component={RestaurantPage} />


		</Navigator>
	);
}