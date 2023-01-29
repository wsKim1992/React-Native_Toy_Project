import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { useFormContext, Controller } from "react-hook-form";
import { GlobalStyles } from "../../constant/color";

const Input = ({
	name,
	rules,
	defaultValue,
	labelText,
	placeholderText,
	keyboardType,
}) => {
	const { control, formState: { errors } } = useFormContext();
	const [isFocus, setIsFocus] = React.useState(false);
	return (
		<View style={styles.inputContainer}>
			<Controller
				control={control}
				name={name}
				rules={{
					required: { value: true, message: '필수 항목 입니다' }
				}}
				render={({
					field: { onChange, value, onBlur, isTouched },
				}) => {
					return (
						<View style={styles.textBox}>
							<View style={styles.labelTextBox}>
								<Text style={styles.labelText}>
									{labelText}
								</Text>
								{errors[name] && (
									<Text
										style={
											(styles.labelText, { color: "red" })
										}
									>
										{errors[name].message}
									</Text>
								)}
							</View>
							<TextInput
								editable
								value={value}
								multiline={false}
								cursorColor={GlobalStyles.colors.accent500}
								placeholder={placeholderText}
								style={[styles.textInputStyles, isFocus && styles.textInputFocusedStyles]}
								onChangeText={onChange}
								onBlur={() => { setIsFocus(false); onBlur(); }}
								onFocus={() => setIsFocus(true)}
								keyboardType={
									keyboardType ? keyboardType : "default"
								}
								selectionColor={GlobalStyles.colors.primary100}
							/>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		alignSelf: "stretch",
	},
	textBox: {
		width: "100%",
		alignSelf: "stretch",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	labelTextBox: {
		alignSelf: "stretch",
		height: 35.5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 12.5,
		marginBottom: 10.5,
		backgroundColor: GlobalStyles.colors.accent500,
		padding: 5.5,
	},
	labelText: {
		fontSize: 15.5,
		textAlign: "left",
		color: GlobalStyles.colors.white,
		fontWeight: "bold",
	},
	textInputStyles: {
		width: "100%",
		height: 45.5,
		borderRadius: 12.5,
		paddingTop: 5.5,
		color: GlobalStyles.colors.accent500,
		borderWidth: 1,
		borderColor: GlobalStyles.colors.accent500,
	},
	textInputFocusedStyles: {
		borderColor: GlobalStyles.colors.primary100,
	}
});
