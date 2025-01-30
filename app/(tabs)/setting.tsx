import components from "@/components";
import icons from "@/constant/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import {
	Image,
	RefreshControl,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Setting = () => {
	const [redirectTo, setRedirectTo] = useState(false);
	const [visible, setVisible] = useState(false);
	const [refreshing, setRefreshing] = React.useState(false);
	const [credentialsVisible, setCredentialsVisible] = useState(false);
	const [username, setUsername] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [disable, setDisabe] = React.useState(false);
	const [userData, setUserData] = React.useState("");

	const updateFirstName = (eventValue: string) => {
		setFirstName(eventValue);
	};
	const updateLastName = (eventValue: string) => {
		setLastName(eventValue);
	};
	const updateAddress = (eventValue: string) => {
		setAddress(eventValue);
	};

	const handleUpdateButton = () => {
		console.log(firstName);
		console.log(lastName);
		console.log(address);
	};

	async function getData() {
		axios.get("http://192.168.43.4:8000/get-all-user").then((res) => {
			setUsername(res.data.data.username);
			setUserData(res.data.data);
			setFirstName(res.data.data.firstName);
			setLastName(res.data.data.lastName);
			setAddress(res.data.data.address);
		});
	}

	React.useEffect(() => {
		getData();

		if (!firstName || !lastName || !address) {
			setDisabe(true);
		} else {
			setDisabe(false);
		}
	}, []);

	const handlePress = async () => {
		await AsyncStorage.removeItem("token");
		setTimeout(() => {
			checkToken();
		}, 2000);
	};

	const handleCloseUpdateCredentials = () => {
		setCredentialsVisible(false);
		setFirstName("");
		setLastName("");
		setAddress("");
	};

	const credentiasVisibility = () => {
		setCredentialsVisible((prev) => !prev);
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
							<TouchableOpacity onPress={credentiasVisibility}>
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
				<components.UpdateCredentials
					actions={
						<>
							<TouchableOpacity
								onPress={handleCloseUpdateCredentials}
								className="bg-slate-700 rounded-lg py-2 px-4"
							>
								<Text className="text-white font-bold text-lg">Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={handleUpdateButton}
								disabled={disable}
								className={` rounded-lg py-2 px-6 ${
									disable ? "bg-red-900" : "bg-red-700"
								}`}
							>
								<Text className="text-white font-bold text-lg">Save</Text>
							</TouchableOpacity>
						</>
					}
					children={
						<>
							<TextInput
								autoCorrect={false}
								enablesReturnKeyAutomatically
								autoCapitalize="none"
								value={firstName}
								onChangeText={updateFirstName}
								inputMode="text"
								placeholder="First Name"
								className="bg-white text-gray-500  border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
								defaultValue={firstName}
							/>
							<TextInput
								autoCorrect={false}
								enablesReturnKeyAutomatically
								autoCapitalize="none"
								value={lastName}
								onChangeText={updateLastName}
								inputMode="text"
								placeholder="Last Name"
								className="bg-white text-gray-500 border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
								defaultValue={lastName}
							/>
							<TextInput
								autoCorrect={false}
								enablesReturnKeyAutomatically
								autoCapitalize="none"
								value={address}
								onChangeText={updateAddress}
								inputMode="text"
								placeholder="Address"
								className="bg-white text-gray-500 border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
								defaultValue={address}
							/>
						</>
					}
					Style={credentialsVisible ? "absolute" : " hidden"}
				/>
			</ScrollView>

			<components.ProfileModal
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
