import icons from "@/constant/icons";
import logo from "@/constant/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { launchImageLibraryAsync } from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
	Style: string;
	components: React.ReactNode;
}

const ProfileModal = ({ Style, components }: Props) => {
	const [image, setImage] = useState("");
	const [data, setData] = useState([{}]);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios.get("http://192.168.43.4:8000/get-all-user").then((res) => {
					if (res.status == 200) {
						setData(res.data.data);
						console.log(res.data.data);
					}
				});
			} catch (error) {
				console.log(error);
			}
		};

		const fetchImage = async () => {
			const result = await AsyncStorage.getItem("image");
			console.log("Image from async", result);
			setImage(result || "");
		};

		getUserDetails();

		fetchImage();
	});

	const pickImage = async () => {
		let result = await launchImageLibraryAsync({
			mediaTypes: "livePhotos",
			allowsEditing: true,
			aspect: [5, 5],
		});

		if (!result.canceled) {
			await AsyncStorage.setItem("image", result.assets[0].uri);
		}
		setVisible(false);
	};

	const removeImage = async () => {
		await AsyncStorage.removeItem("image");
		setVisible(false);
	};

	const visibility = () => {
		setVisible((prev) => !prev);
	};

	return (
		<View className={`w-full ${Style}`}>
			<View className="absolute w-full items-center top-1 left-[175px]">
				{components}
			</View>
			<Image source={logo.Sugarcane} className="top-2" />
			<View className="absolute w-full justify-center top-[160px] z-[1000px] items-center">
				<View className="rounded-full w-52 h-52 bg-gray-300">
					<Image
						resizeMode="contain"
						source={!image ? icons.Profile : { uri: image }}
						className="rounded-full w-52 h-52"
					/>
				</View>
				<TouchableOpacity
					onPress={visibility}
					className="absolute flex-row rounded-md border px-2 py-1 top-40 right-28 bg-primary3 border-gray-300 justify-center items-center gap-1"
				>
					<Image
						resizeMode="contain"
						tintColor={"#fff"}
						className="  w-4 h-4"
						source={icons.Pen}
					/>
					<Text className="text-white text-base">Edit</Text>
				</TouchableOpacity>
				<View
					className={`right-[90px] top-52 ${visible ? "absolute" : "hidden"}`}
				>
					<View className="h-4 absolute z-50 rounded-sm -top-[6px] left-[135px] border-t border-l w-4 border-white bg-primary rotate-45"></View>
					<View className="bg-primary border border-gray-300 flex rounded-xl items-start gap-3 py-4 px-6 w-48">
						<TouchableOpacity onPress={pickImage}>
							<Text className="text-white w-full text-left text-base">
								Upload a photo...
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={removeImage}>
							<Text className="text-white w-full text-left text-base">
								Remove a photo
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View className="py-14 px-8 bg-primary3 rounded-3xl border border-gray-300 absolute w-full top-[305px]">
				<View className="flex-row justify-center mb-4 items-center gap-3">
					<Text className="text-2xl font-bold text-white">ANNE</Text>
					<Text className="text-2xl text-white">BATUMBAKAL</Text>
				</View>
				<View className="flex-row w-full  mb-1 items-center gap-3">
					<Text className="text-lg text-right text-white w-32">Username:</Text>
					<Text className="text-lg text-left text-white">owner</Text>
				</View>
				<View className="flex-row w-full items-center gap-3">
					<Text className="text-lg text-right text-white w-32">Address:</Text>
					<Text className="text-lg text-left text-white">
						Bongabong, Or. Mdo.
					</Text>
				</View>
			</View>
		</View>
	);
};

export default ProfileModal;
