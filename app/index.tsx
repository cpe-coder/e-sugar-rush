import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#f4511e" },

					headerTitleStyle: {
						fontWeight: "bold",
					},

					headerTitle: "Home",
				}}
			/>
			<Text>Home Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	image: {
		width: 50,
		height: 50,
	},
});
