import {AppRoutes} from "./app.routes";
import HeaderSidebar from './app.sidebar';
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
  return (
    <NavigationContainer>
			<AppRoutes />
      </NavigationContainer>
  );
}
