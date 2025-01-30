import ProfileModal from "@/components/profile-modal";
import icons from "@/constant/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import {
	Image,
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Setting = () => {
	const [redirectTo, setRedirectTo] = useState(false);
	const [visible, setVisible] = useState(false);
	const [refreshing, setRefreshing] = React.useState(false);
	const handlePress = async () => {
		await AsyncStorage.removeItem("token");
		setTimeout(() => {
			checkToken();
		}, 2000);
	};

	const handleModalClose = () => {
		setVisible(false);
	};

	const handleModalOpen = () => {
		setVisible(true);
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			checkToken();
		}, 2000);
		setTimeout(() => {
			setRefreshing(false);
			setVisible(false);
		}, 2000);
	}, []);

	const checkToken = async () => {
		await AsyncStorage.getItem("token").then((res) => {
			if (res === null) {
				setRedirectTo(true);
			}
		});
	};

	if (redirectTo) {
		return <Redirect href={"/sign-in"} />;
	}
	return (
		<SafeAreaView className="h-full bg-primary py-8 px-6">
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View className="justify-center items-center">
					<Text className="text-start mb-4 text-white font-medium w-full text-xl">
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
							<TouchableOpacity onPress={handleModalOpen}>
								<Text className="text-xl font-medium text-white">Profile</Text>
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
									Update Credentials
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<Text className="text-start mt-10 mb-4 text-white font-medium w-full text-xl">
						Action
					</Text>
					<View className="flex-row w-full justify-start items-center gap-10 bg-primary3 border border-gray-300 rounded-3xl py-8 px-10">
						<Image
							className="w-8 h-8"
							tintColor="#fff"
							resizeMode="contain"
							source={icons.Exit}
						/>
						<TouchableOpacity onPress={handlePress}>
							<Text className="text-xl font-medium text-white">Log out</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>

			<ProfileModal
				components={
					<TouchableOpacity
						onPress={handleModalClose}
						className="bg-primary3 border border-gray-300 font-bold px self-center py-2 px-5 rounded-xl mt-6 justify-center items-center text-center"
					>
						<Text className="text-white text-center font-bold text-2xl">
							Close
						</Text>
					</TouchableOpacity>
				}
				Style={`${visible ? "absolute" : "hidden"}`}
			/>
		</SafeAreaView>
	);
};

export default Setting;
