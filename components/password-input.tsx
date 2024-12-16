import React, { useState } from "react";
import {
	NativeSyntheticEvent,
	Pressable,
	TextInput,
	TextInputChangeEventData,
} from "react-native";
import HiddenEye from "./hidden-eye";
import VisibleEye from "./visible-eye";

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

	const handleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			<TextInput
				autoCorrect={false}
				secureTextEntry={isVisible ? false : true}
				enablesReturnKeyAutomatically
				autoCapitalize="none"
				value={value}
				onChange={onChange}
				inputMode={inputMode}
				placeholder={placeholder}
				className="bg-white text-gray-500 relative border-gray-300 border-2 w-full px-4 py-4 rounded-xl"
			/>

			<Pressable className="absolute" onPress={handleVisibility}>
				{isVisible ? <VisibleEye /> : <HiddenEye />}
			</Pressable>
		</>
	);
};

export default PasswordInput;
