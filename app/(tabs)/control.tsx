import components from "@/components";
import icons from "@/constant/icons";
import logo from "@/constant/logo";
import { get, onValue, ref, set } from "firebase/database";
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
	const [isPower, setIsPower] = React.useState(false);
	const [extract, setExtract] = React.useState(false);
	const [isExtract, setIsExtract] = React.useState(false);
	const [boil, setBoil] = React.useState(false);
	const [isBoil, setIsBoil] = React.useState(false);
	const [dry, setDry] = React.useState(false);
	const [isDry, setIsDry] = React.useState(false);
	const [temperature, setTemperature] = React.useState(0);

	React.useEffect(() => {
		fetchTemperature();
		getPowerValue();
		getExtractValue();
		getBoilValue();
		getDryValue();
	});

	const fetchTemperature = () => {
		const valueRef = ref(database, "Sensors/temperature");
		const subscribe = onValue(valueRef, (snapshot) => {
			const value = snapshot.val();
			setTemperature(value);
		});

		return () => subscribe();
	};

	const getPowerValue = async () => {
		const valueRef = ref(database, "Controls/power");
		const value = await get(valueRef);
		setIsPower(value.val());
	};
	const getExtractValue = async () => {
		const valueRef = ref(database, "Controls/extract");
		const value = await get(valueRef);
		setIsExtract(value.val());
	};
	const getBoilValue = async () => {
		const valueRef = ref(database, "Controls/boil");
		const value = await get(valueRef);
		setIsBoil(value.val());
	};
	const getDryValue = async () => {
		const valueRef = ref(database, "Controls/dry");
		const value = await get(valueRef);
		setIsDry(value.val());
	};

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
		setIsPower(power);
	};

	const activeExtract = async () => {
		const valueRef = ref(database, "Controls/extract");
		await set(valueRef, extract ? true : false);
		setExtract((prev) => !prev);
		setIsExtract(extract);
	};

	const activeBoil = async () => {
		const valueRef = ref(database, "Controls/boil");
		await set(valueRef, boil ? true : false);
		setBoil((prev) => !prev);
		setIsBoil(boil);
	};

	const activeDry = async () => {
		const valueRef = ref(database, "Controls/dry");
		await set(valueRef, dry ? true : false);
		setDry((prev) => !prev);
		setIsDry(dry);
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
						<View className="absolute left-4  -top-5 flex-row justify-start items-center gap-1">
							<View
								className={`w-4 h-4 mr-2 border-[1px] border-gray-300 rounded-full ${
									isPower && "bg-red-500"
								}`}
							></View>
							<View
								className={`w-4 h-4 border-[1px] border-gray-300 rounded-full ${
									isExtract && "bg-yellow"
								}`}
							></View>
							<View
								className={`w-4 h-4 border-[1px] border-gray-300 rounded-full ${
									isBoil && "bg-yellow"
								}`}
							></View>
							<View
								className={`w-4 h-4 border-[1px] border-gray-300 rounded-full ${
									isDry && "bg-yellow"
								}`}
							></View>
						</View>
						<Text className="text-white text-lg text-center mb-4">
							MAIN CONTROLS
						</Text>
						<TouchableOpacity
							onPress={activePower}
							disabled={false}
							className="flex-row gap-2 items-center justify-center py-2 w-full rounded-2xl bg-white "
						>
							<Text className="text-2xl font-bold text-textColor ">Power</Text>
							<Image
								className="w-6 h-6"
								tintColor="#024f8e"
								resizeMode="contain"
								source={icons.Power}
							/>
						</TouchableOpacity>
						<View className="flex-row items-center mt-2 justify-between">
							<TouchableOpacity
								onPress={activeExtract}
								className="rounded-2xl  w-24 gap-1 py-2 px-4 justify-center items-center bg-primary"
							>
								<Image
									className="w-8 h-8"
									resizeMode="contain"
									tintColor="#fff"
									source={icons.Roller}
								/>
								<Text className="text-white">Extract</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={activeBoil}
								className="rounded-2xl  w-24 gap-1 py-2 px-4 justify-center items-center bg-primary"
							>
								<Image
									className="w-8 h-8"
									resizeMode="contain"
									tintColor="#fff"
									source={icons.Boil}
								/>
								<Text className="text-white">Boil</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={activeDry}
								className="rounded-2xl  w-24 gap-1 py-2 px-4 justify-center items-center bg-primary"
							>
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
								{temperature}&#8451;
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
