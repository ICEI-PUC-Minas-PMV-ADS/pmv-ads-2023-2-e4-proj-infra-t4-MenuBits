export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="HomePage" component={HomePage} />
		</Navigator>
	);
}