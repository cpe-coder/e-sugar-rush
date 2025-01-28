import logo from "@/constant/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";

export default function Index() {
	const [redirectTo, setRedirectTo] = useState<string | null>(null); // State to determine where to redirect

	useEffect(() => {
		const fetchToken = async () => {
			try {
				const token = await AsyncStorage.getItem("token");
				console.log("Token:", token);

				// Set the redirection based on token existence
				if (token) {
					setRedirectTo("/home");
				} else {
					setRedirectTo("/sign-in");
				}
			} catch (error) {
				console.error("Error fetching token:", error);
				setRedirectTo("/sign-in"); // Fallback in case of error
			}
		};

		setTimeout(() => {
			fetchToken();
		}, 3000);
	}, []);

	if (redirectTo) {
		return <Redirect href={redirectTo as any} />;
	}

	return (
		<View className="flex items-center justify-center h-full w-full bg-primary">
			<Image resizeMode="contain" source={logo.EsugarLogo} alt="EsugarLogo" />
		</View>
	);
}
