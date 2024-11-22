import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: "Details",
				}}
			/>
			<Text>Update the title</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
