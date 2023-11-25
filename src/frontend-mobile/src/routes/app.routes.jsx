import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import RestaurantPage from "../pages/RestaurantPage";
import MenuEditor from "../pages/MenuEditor";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName="HomePage"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="MenuEditor" component={MenuEditor} /> 
			<Screen name="HomePage" component={HomePage} />
			<Screen name="RestaurantPage" component={RestaurantPage} />
			<Screen name="MenuPage" component={MenuPage} />


		</Navigator>
	);
}