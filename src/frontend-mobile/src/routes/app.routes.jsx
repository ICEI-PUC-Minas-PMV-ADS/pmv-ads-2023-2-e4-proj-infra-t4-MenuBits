import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import MenuEditor from "../pages/MenuEditor";
//import MenuPage from "../pages/MenuPage";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* <Screen name="HomePage" component={HomePage} /> */}
			<Screen name="MenuEditor" component={MenuEditor} /> 
			{/* <Screen name="MenuPage" component={MenuPage} /> */}
		</Navigator>
	);
}