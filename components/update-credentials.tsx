import logo from "@/constant/logo";
import React from "react";
import { Image, Text, View } from "react-native";

interface Props {
	Style: string;
	children: React.ReactNode;
	actions: React.ReactNode;
}

const UpdateCredentials = ({ Style, children, actions }: Props) => {
	return (
		<View
			className={`w-full top-0 self-center justify-center items-center rounded-3xl border border-gray-500 bg-white  ${Style}`}
		>
			<Image
				resizeMode="contain"
				className="w-40 h-40 top-4"
				source={logo.Sugarcane}
			/>
			<View className="w-full bg-primary3 border  border-gray-300 rounded-3xl px-8 gap-4 py-8">
				<Image
					resizeMode="contain"
					className="w-24 h-24 z-50 absolute -top-10 justify-center items-center self-center "
					source={logo.Logo}
				/>
				<Text className="text-white pt-6 pb-2 text-center w-full font-bold text-2xl">
					Update Credentials
				</Text>
				{children}

				<View className="flex-row justify-end pt-4 items-center gap-8">
					{actions}
				</View>
			</View>
		</View>
	);
};

export default UpdateCredentials;
