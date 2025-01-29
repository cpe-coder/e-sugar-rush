import icons from "@/constant/icons";
import logo from "@/constant/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { launchImageLibraryAsync } from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
	Style: string;
	components: React.ReactNode;
}

const ProfileModal = ({ Style, components }: Props) => {
	const [image, setImage] = useState("");

	useEffect(() => {
		const fetchImage = async () => {
			const image = await AsyncStorage.getItem("image");
			console.log("Image from async", image);
			setImage(image || "");
		};

		fetchImage();
	});

	const pickImage = async () => {
		let result = await launchImageLibraryAsync({
			mediaTypes: "livePhotos",
			allowsEditing: true,
			aspect: [4, 3],
		});

		console.log(result.assets);

		if (!result.canceled) {
			await AsyncStorage.setItem("image", result.assets[0].uri);
		}
	};

	return (
		<View className={`w-full ${Style}`}>
			<View className="absolute w-full items-center top-1 left-[175px]">
				{components}
			</View>
			<Image source={logo.Sugarcane} className="top-2" />
			<View className="absolute w-full justify-center top-[160px] z-[1000px] items-center">
				<Image
					resizeMode="contain"
					source={!image ? icons.Profile : { uri: image }}
					className={`rounded-full w-52 h-52 ${!image && "bg-gray-300"}`}
				/>
				<TouchableOpacity
					onPress={pickImage}
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
