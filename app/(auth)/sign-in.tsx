import Sugarcane from "@/assets/logo/sugarcane.png";
import components from "@/components";
import logo from "@/constant/logo";
import Checkbox from "expo-checkbox";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SignIn = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [isPressed, setIsPressed] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChangeEmail = (e: any) => {
		e.nativeEvent.text;

		const value = e.target.value;

		setEmail(value);
	};
	const handleChangePassword = (e: any) => {
		e.nativeEvent.text;

		const value = e.target.value;

		setPassword(value);
	};

	const handlePressed = () => {
		setIsPressed(true);
	};

	const handleLogin = () => {
		console.log(email);
	};

	if (isPressed) {
		return <Redirect href={"/sign-up"} />;
	}

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View
					className="flex items-center py-4 px-6"
					style={{
						minHeight: Dimensions.get("window").height - 100,
					}}
				>
					<Image className="w-full" resizeMode="contain" source={Sugarcane} />
					<View className="w-full border flex-col blur-md items-center backdrop-blur-sm  pb-8 border-gray-300 bg-backdrop rounded-3xl -mt-12">
						<Image source={logo.EsugarLogo} resizeMode="contain" />
						<Text className="-mt-5 mb-10 text-xl text-white">
							Hello, log in to your profile
						</Text>
						<View className="flex-col w-full px-6 gap-8 justify-center items-center">
							<components.CustomInput
								value={email}
								onChange={handleChangeEmail}
								placeholder="Email"
								inputMode="email"
							/>
							<components.PasswordInput
								value={password}
								onChange={handleChangePassword}
								inputMode="text"
								placeholder="Password"
								styleProp="mx-[107px] mt-[12px]"
							/>
						</View>

						<View className="flex-row w-full py-4 justify-between px-6 ">
							<View className="flex-row gap-2 items-start">
								<Checkbox
									onValueChange={setIsChecked}
									color={isChecked ? "#de9b00" : undefined}
									value={isChecked}
								/>

								<Text className="text-white">Remember Me</Text>
							</View>
							<View>
								<TouchableOpacity>
									<Text className="italic text-white ">Forgot Password?</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View className="flex-row  justify-between w-full px-6 mt-8 mb-6">
							<components.CustomButton
								text="CREATE ACCOUNT"
								onPress={handlePressed}
								style="border-2 px-4 border-yellow "
								textStyle="text-white"
							/>
							<components.CustomButton
								text="LOGIN"
								onPress={handleLogin}
								style="bg-yellow w-28"
								textStyle="text-black"
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
