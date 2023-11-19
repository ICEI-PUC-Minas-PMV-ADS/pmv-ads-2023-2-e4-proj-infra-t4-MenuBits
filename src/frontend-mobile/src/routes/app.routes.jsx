import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import PerfilUserMobile from "../pages/Perfilpages/PerfilUser/Index";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="HomePage" component={HomePage} />
			<Screen name="PerfilUserMobile" component={PerfilUserMobile} />
		</Navigator>
	);
}