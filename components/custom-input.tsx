import React from "react";
import { TextInput } from "react-native";

const CustomInput = ({
	placeholder,
	inputMode,
}: {
	placeholder: string;
	inputMode: any;
}) => {
	return (
		<TextInput
			inputMode={inputMode}
			placeholder={placeholder}
			className="bg-white text-gray-500 border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
		/>
	);
};

export default CustomInput;
