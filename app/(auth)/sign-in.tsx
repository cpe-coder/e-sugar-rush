import EsugarLogo from "@/assets/logo/esugarLogo.png";
import Sugarcane from "@/assets/logo/sugarcane.png";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View
					className="flex items-center py-4 px-4"
					style={{
						minHeight: Dimensions.get("window").height - 100,
					}}
				>
					<Image className="w-full" resizeMode="contain" source={Sugarcane} />
					<View className="w-full border flex-col blur-md items-center  pb-8 border-gray-300 rounded-2xl -mt-16">
						<Image source={EsugarLogo} resizeMode="contain" />
						<Text className="-mt-8 mb-8 text-xl text-white">
							Hello, log in to your profile
						</Text>
						<View className="flex-col w-full px-4 gap-8 justify-center items-center">
							<TextInput
								placeholder="Email"
								className="bg-white text-gray-500 border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
							/>
							<TextInput
								placeholder="Password"
								className="bg-white text-gray-500 border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
							/>
						</View>

						<View className="flex-row w-full py-4 justify-between px-4 ">
							<View className="flex-row gap-2 items-start">
								<Checkbox
									onValueChange={setIsChecked}
									color={isChecked ? "#4630EB" : undefined}
									value={isChecked}
								/>

								<Text className="text-white">Remember Me</Text>
							</View>
							<View>
								<TouchableOpacity>
									<Text className="italic text-white ">Forgot Password?</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
