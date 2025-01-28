import icons from "@/constant/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Setting = () => {
	const handleOnPress = async () => {
		await AsyncStorage.removeItem("token");
		console.log("Token removed");
	};

	const [redirectTo, setRedirectTo] = useState(false); // State to determine where to redirect

	useEffect(() => {
		const fetchToken = async () => {
			try {
				const token = await AsyncStorage.getItem("token");
				console.log("Token:", token);
				if (!token) {
					setRedirectTo(true);
				}
			} catch (error) {
				console.error("Error fetching token:", error);
			}
		};

		setTimeout(() => {
			fetchToken();
		}, 3000);
	}, []);

	if (redirectTo) {
		return <Redirect href={"/sign-in"} />;
	}
	return (
		<SafeAreaView className="h-full bg-primary py-8 px-6">
			<ScrollView>
				<View className="justify-center items-start">
					<Text className="text-start mb-4 text-white font-medium text-xl">
						Account
					</Text>
					<View className=" w-full justify-center items-center bg-primary3 border gap-5 border-gray-300 rounded-3xl py-8 px-10">
						<View className="flex-row w-full justify-start items-center gap-10">
							<Image
								className="w-8 h-8"
								tintColor="#fff"
								resizeMode="contain"
								source={icons.User}
							/>
							<TouchableOpacity>
								<Text className="text-xl font-medium text-white">
									Edit Profile
								</Text>
							</TouchableOpacity>
						</View>
						<View className="flex-row w-full justify-start items-center gap-10">
							<Image
								className="w-8 h-8"
								tintColor="#fff"
								resizeMode="contain"
								source={icons.Security}
							/>
							<TouchableOpacity>
								<Text className="text-xl font-medium text-white">
									Change Credentials
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<Text className="text-start mt-10 mb-4 text-white font-medium text-xl">
						Action
					</Text>
					<View className="flex-row w-full justify-start items-center gap-10 bg-primary3 border border-gray-300 rounded-3xl py-8 px-10">
						<Image
							className="w-8 h-8"
							tintColor="#fff"
							resizeMode="contain"
							source={icons.Exit}
						/>
						<TouchableOpacity onPress={handleOnPress}>
							<Text className="text-xl font-medium text-white">Log out</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Setting;
