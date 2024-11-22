import { Stack } from "expo-router";
import { ref, set } from "firebase/database";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import database from "../firebase.config";

export default function Home() {
	const [isClick, setIsClick] = useState(false);

	const handleClick = async () => {
		const valueRef = ref(database, "Button/on");
		await set(valueRef, isClick ? true : false);
		setIsClick((prev) => !prev);
		console.log(valueRef, isClick);
	};

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
			<Button onPress={handleClick} style={styles.button} mode="contained">
				Click me!
			</Button>
			<Text>{isClick ? "1" : "0"}</Text>
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
	button: {
		backgroundColor: "#f2f",
	},
});
