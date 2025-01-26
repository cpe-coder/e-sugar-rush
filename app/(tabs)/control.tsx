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
					<View className="border border-gray-300 bg-primary3 rounded-3xl py-6 mt-10 px-8 w-full">
						<Text className="text-white text-lg text-center mb-4">
							MAIN CONTROLS
						</Text>
						<TouchableOpacity
							disabled={false}
							className="bg-white flex-row gap-2 items-center justify-center py-2 w-full rounded-2xl"
						>
							<Text className="text-textColor text-2xl font-bold">Power</Text>
							<Image
								className="w-6 h-6"
								tintColor="#024f8e"
								resizeMode="contain"
								source={icons.Power}
							/>
						</TouchableOpacity>
						<View className="flex-row items-center mt-2 justify-between">
							<TouchableOpacity className="rounded-2xl bg-gray  w-24 gap-1 bg-other py-2 px-4 justify-center items-center">
								<Image
									className="w-8 h-8"
									resizeMode="contain"
									tintColor="#fff"
									source={icons.Roller}
								/>
								<Text className="text-white">Extract</Text>
							</TouchableOpacity>
							<TouchableOpacity className="rounded-2xl w-24  gap-1 bg-other py-2 px-4 justify-center items-center">
								<Image
									className="w-8 h-8"
									resizeMode="contain"
									tintColor="#fff"
									source={icons.Boil}
								/>
								<Text className="text-white">Boil</Text>
							</TouchableOpacity>
							<TouchableOpacity className="rounded-2xl w-24  gap-1 bg-other py-2 px-4 justify-center items-center">
								<Image
									className="w-8 h-8"
									resizeMode="contain"
									tintColor="#fff"
									source={icons.Dry}
								/>
								<Text className="text-white">Dry</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Control;
