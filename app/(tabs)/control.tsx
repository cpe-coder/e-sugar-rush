import components from "@/components";
import icons from "@/constant/icons";
import logo from "@/constant/logo";
import { ref, set } from "firebase/database";
import React from "react";
import {
	Image,
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import database from "../../lib/firebase.config";

const Control = () => {
	const [refreshing, setRefreshing] = React.useState(false);
	const [visibile, setVisible] = React.useState(false);
	const [power, setPower] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	const extractionSizeVisibility = () => {
		setVisible((prev) => !prev);
	};

	const activePower = async () => {
		const valueRef = ref(database, "Controls/power");
		await set(valueRef, power ? true : false);
		setPower((prev) => !prev);
		console.log("This is power", power);
	};

	return (
		<SafeAreaView className="h-full bg-primary py-8 px-6">
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View className="justify-center items-center">
					<Image source={logo.EsugarLogo} />
					<View className="border border-gray-300 bg-primary3 rounded-3xl py-6 mt-10 px-8 w-full">
						<Text className="text-white text-lg text-center mb-4">
							MAIN CONTROLS
						</Text>
						<TouchableOpacity
							onPress={activePower}
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
						<View className="w-full py-3 mt-7 bg-yellowGreen rounded-2xl justify-center items-center flex-row gap-3">
							<Text className="text-white text-3xl font-semibold">
								50&#8451;
							</Text>
							<Text className="text-white text-3xl font-semibold">
								Temperature
							</Text>
						</View>
						<components.ExtractionSize />
						<View className="items-center justify-between mb-3 mt-5 flex-row">
							<Text className="text-white text-xl p-2">TIMER</Text>
							<TouchableOpacity
								onPress={extractionSizeVisibility}
								className="p-2 px-4 bg-white rounded-xl"
							>
								<Text className="text-primary font-semibold">Extract</Text>
							</TouchableOpacity>
						</View>

						<View className="w-full py-3 px-4 bg-lightYellow rounded-2xl justify-around items-center flex-row">
							<Text className="text-white text-xl font-semibold">Cooking</Text>
							<Text className="text-white text-3xl font-semibold">
								01:23:30
							</Text>
						</View>
						<View className="w-full py-3 px-4 mt-4 mb-4 bg-lightYellow rounded-2xl justify-around items-center flex-row">
							<Text className="text-white text-xl font-semibold">Drying</Text>
							<Text className="text-white text-3xl font-semibold">
								01:23:30
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Control;
