import EsugarLogo from "@/assets/logo/esugarLogo.png";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";

export default function Index() {
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setRedirect(true);
		}, 3000);
	});

	return redirect ? (
		<Redirect href={"/sign-in"} />
	) : (
		<View className="flex items-center justify-center h-full w-full bg-primary">
			<Image resizeMode="contain" source={EsugarLogo} alt="EsugarLogo" />
		</View>
	);
}
