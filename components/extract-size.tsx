import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
	{ label: "1 Litter", value: "1" },
	{ label: "2 Litters", value: "2" },
	{ label: "3 Litters", value: "3" },
	{ label: "4 Litters", value: "4" },
	{ label: "5 Litters", value: "5" },
	{ label: "6 Litters", value: "6" },
	{ label: "7 Litters", value: "7" },
	{ label: "8 Litters", value: "8" },
	{ label: "9 Litters", value: "9" },
	{ label: "10 Litters", value: "10" },
];

const ExtractionSize = () => {
	const [value, setValue] = React.useState(null);
	const [isFocus, setIsFocus] = React.useState(false);

	return (
		<View className="w-full pt-2 mt-4 px-8 gap-4 border-t-2 border-gray-300">
			<Text className="text-center text-white font-bold text-2xl">
				Extractin of SugarCane Juice
			</Text>
			<Dropdown
				style={[styles.dropdown, isFocus && { borderColor: "white" }]}
				placeholderStyle={styles.placeholderStyle}
				selectedTextStyle={styles.selectedTextStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={data}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder={!isFocus ? "Select Size" : "..."}
				searchPlaceholder="Search..."
				value={value}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				onChange={(item) => {
					setValue(item.value);
					setIsFocus(false);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={styles.icon}
						color={isFocus ? "white" : "white"}
						name="Safety"
						size={20}
					/>
				)}
			/>
		</View>
	);
};

export default ExtractionSize;

const styles = StyleSheet.create({
	dropdown: {
		height: 50,
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 8,
		width: "100%",
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
		borderRadius: 8,
	},
	placeholderStyle: {
		fontSize: 16,
		color: "white",
	},
	selectedTextStyle: {
		fontSize: 16,
		color: "white",
	},
	iconStyle: {
		width: 25,
		height: 25,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
		borderRadius: 8,
	},
});
