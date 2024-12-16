import icons from "@/constant/icons";
import React from "react";
import { Image, View } from "react-native";

const VisibleEye = () => {
	return (
		<View className="absolute p-0 m-0 mx-28 mt-[8px]">
			<Image
				className="w-10"
				resizeMode="contain"
				tintColor="#024f8e"
				source={icons.Eye}
			/>
		</View>
	);
};
export default VisibleEye;
