import icons from "@/constant/icons";
import logo from "@/constant/logo";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

const HeaderTitle = () => {
	const [visible, setVisible] = useState(false);

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
					source={icons.Boy}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default { HeaderTitle, HeaderRight };
