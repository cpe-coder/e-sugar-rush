import icons from "@/constant/icons";
import logo from "@/constant/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

const HeaderTitle = () => {
	return (
		<View className="flex-row justify-start">
			<Image
				resizeMode="contain"
				className="w-32  h-16"
				source={logo.HeaderLogo}
			/>
		</View>
	);
};

const HeaderRight = () => {
	const [image, setImage] = useState("");

	useEffect(() => {
		const fetchImage = async () => {
			const result = await AsyncStorage.getItem("image");
			console.log("Image from header", result);
			setImage(result || "");
		};

		fetchImage();
	});
	return (
		<View className="flex-row justify-center gap-4 items-center">
			<Image
				resizeMode="contain"
				tintColor="#fff"
				className="w-5 h-5"
				source={icons.Bell}
			/>
			<TouchableOpacity>
				<Image
					resizeMode="contain"
					className="w-12 border border-gray-400 rounded-full p-2 h-12"
					source={image == "" ? icons.Profile : image}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default { HeaderTitle, HeaderRight };
