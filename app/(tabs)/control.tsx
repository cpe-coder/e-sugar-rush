import icons from "@/constant/icons";
import logo from "@/constant/logo";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Control = () => {
	return (
		<SafeAreaView className="h-full bg-primary py-8 px-6">
			<ScrollView>
				<View className="justify-center items-center">
					<Image source={logo.EsugarLogo} />
					<View className="border border-gray-300 rounded-3xl py-6 mt-10 px-8 w-full">
						<Text className="text-white text-lg text-center mb-4">
							MAIN CONTROLS
						</Text>
						<TouchableOpacity className="bg-white flex-row gap-2 items-center justify-center py-2 w-full rounded-2xl">
							<Text className="text-textColor text-2xl font-bold">Power</Text>
							<Image
								className="w-6 h-6"
								tintColor="#024f8e"
								resizeMode="contain"
								source={icons.Power}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Control;
