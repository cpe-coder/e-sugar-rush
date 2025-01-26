import components from "@/components";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync();
	}, [loaded]);

	if (!loaded) return null;

	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			<Stack.Screen
				name="(tabs)"
				options={{
					headerTitle: () => {
						return <components.TabsHeader.HeaderTitle />;
					},
					headerRight: () => {
						return <components.TabsHeader.HeaderRight />;
					},
					headerTintColor: "#000",
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: "#024f8e",
					},
				}}
			/>
		</Stack>
	);
}
