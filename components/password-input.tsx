import React, { useState } from "react";
import {
	NativeSyntheticEvent,
	Pressable,
	TextInput,
	TextInputChangeEventData,
} from "react-native";

const PasswordInput = ({
	placeholder,
	inputMode,
	value,
	onChange,
}: {
	placeholder: string;
	inputMode: any;
	value: string;
	onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<TextInput
				autoCorrect={false}
				secureTextEntry={true}
				enablesReturnKeyAutomatically
				autoCapitalize="none"
				value={value}
				onChange={onChange}
				inputMode={inputMode}
				placeholder={placeholder}
				className="bg-white text-gray-500 border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
			/>
			<Pressable></Pressable>
		</>
	);
};

export default PasswordInput;
