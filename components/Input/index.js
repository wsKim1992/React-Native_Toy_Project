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
	const { control, formState } = useFormContext();
	console.log(rules);
	return (
		<View style={styles.inputContainer}>
			<Controller
				control={control}
				name={name}
				rules={{ ...rules }}
				defaultValue={defaultValue}
				render={({
					field: { onChange, value, onBlur },
					formState: { errors },
				}) => {
					console.log(errors);
					return (
						<View style={styles.textBox}>
							<View style={styles.labelTextBox}>
								<Text style={styles.labelText}>
									{labelText}
								</Text>
								{errors && (
									<Text
										style={
											(styles.labelText, { color: "red" })
										}
									>
										{errors.message}
									</Text>
								)}
							</View>
							<TextInput
								editable
								value={value}
								multiline={false}
								cursorColor={GlobalStyles.colors.accent500}
								placeholder={placeholderText}
								style={styles.textInputStyles}
								onChangeText={onChange}
								onBlur={onBlur}
								keyboardType={
									keyboardType ? keyboardType : "default"
								}
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
});
