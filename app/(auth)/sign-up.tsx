import logo from "@/constant/logo";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import components from "./../../constant/components";

const SignUp = () => {
	const [isPressed, setIsPressed] = useState(false);

	const handlePressed = () => {
		setIsPressed(true);
	};

	if (isPressed) {
		return <Redirect href={"/sign-in"} />;
	}
	return (
		<SafeAreaView className="h-full bg-primary">
			<ScrollView>
				<View className="flex w-full h-full justify-center items-center px-10">
					<Image className="mt-32" source={logo.EsugarLogo} />
					<Text className="-mt-6 text-white">Register free here</Text>
					<View className="gap-8 w-full pt-8 pb-10 flex-col items-center justify-center">
						<components.CustomInput inputMode="text" placeholder="UserName" />
						<components.CustomInput inputMode="email" placeholder="Email" />
						<components.CustomInput inputMode="text" placeholder="Password" />
						<components.CustomInput
							inputMode="tel"
							placeholder="Mobile Number"
						/>
					</View>
					<View className="flex-row w-full w justify-between items-center">
						<components.CustomButton
							text="LOGIN"
							style="border-2 border-yellow w-28"
							textStyle="text-white"
							onPress={handlePressed}
						/>
						<components.CustomButton
							text="REGISTER"
							style="bg-yellow w-36"
							textStyle="text-black"
							onPress={() => null}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
