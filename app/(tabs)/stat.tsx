import logo from "@/constant/logo";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const firstContainerText = ["Level of Juice Extract"];
const secondText = ["Filtered Juice"];
const thirdText = ["Muscovado Sugar Volume"];

const Stat = () => {
	const extractedJuice = 10;
	const filteredJuice = 5;
	const sugarVolume = 8;
	const maxWaterLevel = 20;

	const extractedJuiceHeight = (extractedJuice / maxWaterLevel) * 100;
	const filteredJuiceHeight = (filteredJuice / maxWaterLevel) * 100;
	const sugarVolumeHeight = (sugarVolume / maxWaterLevel) * 100;

	Array.from(firstContainerText);
	Object.assign({}, firstContainerText);

	return (
		<SafeAreaView className="h-full bg-primary py-8 px-6">
			<ScrollView>
				<View className="items-center justify-center">
					<Image resizeMode="contain" source={logo.Sugarcane} />
					<View className="rounded-3xl border -mt-[160px] border-gray-300 bg-primary3 px-2 w-full pb-10">
						<Text className="text-center py-6 text-white text-lg">
							STATISTICS AND ANALYTICS
						</Text>
						<View className="flex-row justify-evenly items-center">
							<View className="w-24 h-[216px] bg-gray-300 rounded-3xl border-8 border-gray-300 overflow-hidden relative">
								<View
									style={{ height: `${extractedJuiceHeight}%` }}
									className="absolute bottom-0 w-full bg-lightYellow"
								/>

								<Text className="absolute bottom-4 mt-6 w-full text-center text-white text-lg font-bold">
									{extractedJuice} L
								</Text>
							</View>
							<View className="items-center justify-center">
								{firstContainerText}
							</View>
							<View className="w-24 h-[216px] bg-gray-300 rounded-3xl border-8 border-gray-300 overflow-hidden relative">
								<View
									style={{ height: `${filteredJuiceHeight}%` }}
									className="absolute bottom-0 w-full bg-yellowGreen"
								/>
								<Text className="absolute bottom-4 mt-6 w-full text-center text-white text-lg font-bold">
									{filteredJuice} L
								</Text>
							</View>
							<View className="items-center justify-center">
								<Text className="text-white -rotate-90">L</Text>
							</View>
							<View className="w-24 h-[216px] bg-gray-300 rounded-3xl border-8 border-gray-300 overflow-hidden relative">
								<View
									style={{ height: `${sugarVolumeHeight}%` }}
									className="absolute bottom-0 w-full bg-brown"
								/>
								<Text className="absolute bottom-4 mt-6 w-full text-center text-white text-lg font-bold">
									{sugarVolume} L
								</Text>
							</View>
							<View className="items-center justify-center">
								<Text className="text-white -rotate-90">L</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Stat;
