import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
	return (
		<SafeAreaView className="h-full bg-primary">
			<ScrollView>
				<View>
					<Text>Home</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
