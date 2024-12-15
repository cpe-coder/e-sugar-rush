import EsugarLogo from "@/assets/logo/esugarLogo.png";
import Sugarcane from "@/assets/logo/sugarcane.png";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
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
					className="flex items-center py-4 px-6"
					style={{
						minHeight: Dimensions.get("window").height - 100,
					}}
				>
					<Image className="w-full" resizeMode="contain" source={Sugarcane} />
					<View className="w-full border flex-col blur-md items-center  pb-8 border-gray-300 rounded-2xl -mt-12">
						<Image source={EsugarLogo} resizeMode="contain" />
						<Text className="-mt-6 mb-10 text-xl text-white">
							Hello, log in to your profile
						</Text>
						<View className="flex-col w-full px-6 gap-8 justify-center items-center">
							<TextInput
								placeholder="Email"
								className="bg-white text-gray-500 border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
							/>
							<TextInput
								placeholder="Password"
								className="bg-white text-gray-500 border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
							/>
						</View>

						<View className="flex-row w-full py-4 justify-between px-6 ">
							<View className="flex-row gap-2 items-start">
								<Checkbox
									onValueChange={setIsChecked}
									color={isChecked ? "#de9b00" : undefined}
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

						<View className="flex-row  justify-between w-full px-6 mt-8 mb-6">
							<Link
								href={"/sign-up"}
								className="rounded-xl border-2 border-yellow px-3 py-2 "
							>
								<Text className="text-white">CREATE ACCOUNT</Text>
							</Link>
							<TouchableOpacity className="rounded-xl bg-yellow p-2 text-black w-28 flex items-center justify-center">
								<Text>LOGIN</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
