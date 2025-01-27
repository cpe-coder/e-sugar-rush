import logo from "@/constant/logo";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Stat = () => {
	const juiceStorage = 1;
	const mainStorage = 12;
	const maxMainStorage = 15;
	const maxJuiceStorage = 5;

	const juiceStorageHeight = (juiceStorage / maxJuiceStorage) * 100;
	const mainStorageHeight = (mainStorage / maxMainStorage) * 100;

	return (
		<SafeAreaView className="h-full bg-primary py-8 px-6">
			<ScrollView>
				<View className="items-center justify-center">
					<Image resizeMode="contain" source={logo.Sugarcane} />
					<View className="rounded-3xl border -mt-[160px] border-gray-300 bg-primary3 px-2 w-full pb-10">
						<Text className="text-center pt-6 pb-4 text-white text-lg">
							STATISTICS AND ANALYTICS
						</Text>
						<Text className="text-slate-200 font-normal pb-2 text-center">
							Filtered Juice
						</Text>
						<View className="flex-row justify-evenly items-center">
							<View className="w-52 h-[216px] bg-gray-300 rounded-3xl border-8 border-gray-300 overflow-hidden relative">
								<View
									style={{ height: `${mainStorageHeight}%` }}
									className="absolute bottom-0 w-full bg-lightYellow"
								/>

								<Text className="absolute bottom-4 mt-6 w-full text-center text-white text-lg font-bold">
									{mainStorage} L
								</Text>
							</View>
							<View className="items-center justify-center backdrop-blur-sm">
								<Text className="text-white absolute -rotate-90">
									Main Juice Storage
								</Text>
							</View>
							<View className="w-28 h-[216px] bg-gray-300 rounded-3xl border-8 border-gray-300 overflow-hidden relative">
								<View
									style={{ height: `${juiceStorageHeight}%` }}
									className="absolute bottom-0 w-full bg-yellowGreen"
								/>
								<Text className="absolute bottom-4 mt-6 w-full text-center text-white text-lg font-bold">
									{juiceStorage} L
								</Text>
							</View>
							<View className="items-center justify-center">
								<Text className="text-white absolute -rotate-90">
									Juice Storage
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Stat;
