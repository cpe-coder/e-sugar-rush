import Sugarcane from "@/assets/logo/sugarcane.png";
import components from "@/components";
import logo from "@/constant/logo";
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const handleChangeUsername = (eventValue: any) => {
		setUsername(eventValue);
	};

	const handleChangePassword = (eventValue: any) => {
		setPassword(eventValue);
	};

	useEffect(() => {
		if (username && password) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [username, password]);

	const handleLogin = () => {
		setLoading(true);
		if (username && password) {
			const data = {
				username,
				password,
			};
			if (data.username === "admin" && data.password === "admin") {
				setUsername("");
				setPassword("");
				setLoading(false);
				return <Redirect href="/home" />;
			} else {
				console.log("Invalid username or password");
			}
		}
	};

	// const handleLogin = async () => {
	// 	if (username && password) {
	// 		const data = {
	// 			username,
	// 			password,
	// 		};
	// 		try {
	// 			const response = await fetch("http://localhost:3000/api/auth/login", {
	// 				method: "POST",
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify(data),
	// 			});
	// 			const responseData = await response.json();
	// 			console.log("This is responseData", responseData);
	// 		} catch (error) {
	// 			console.log("This is error", error);
	// 		}
	// 	}
	// };

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
								value={username}
								onChange={handleChangeUsername}
								placeholder="Username"
								inputMode="text"
							/>
							<components.PasswordInput
								value={password}
								onChange={handleChangePassword}
								inputMode="text"
								placeholder="Password"
								styleProp="mx-[107px] mt-[12px]"
							/>
						</View>

						<View
							className={`first-letter:justify-center w-full px-6 mt-14 mb-6 ${
								disabled ? "opacity-50" : ""
							}`}
						>
							<components.CustomButton
								text={loading ? "Loading..." : "Login"}
								onDisabled={disabled}
								onPress={handleLogin}
								style="bg-yellow"
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
