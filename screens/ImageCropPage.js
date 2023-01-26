import React from "react";
import {
	View,
	TextInput,
	Text,
	StyleSheet,
	ImageBackground,
	Pressable,
} from "react-native";
import { observer } from "mobx-react-lite";
import { GlobalStyles } from "../constant/color";
import { useForm, Controller, FormProvider } from "react-hook-form";

import Input from "../components/Input";

const ImageCropPage = ({ route }) => {
	const { pictureData } = route.params;
	const [title, setTitle] = React.useState("");
	const methods = useForm({
		defaultValues: {
			title: "",
			price: "0",
			date: `${Date.now().toLocaleString()}`,
		},
	});

	const onSubmit = (data) => {
		console.log("on submit");
		console.log(data);
	};

	return (
		<View style={styles.container}>
			<View style={styles.backgroundStyle}>
				<View style={styles.titleTextBox}>
					<Text style={styles.titleText}>
						이미지의 정보를 입력해 주세요
					</Text>
				</View>
				<View style={styles.formBox}>
					<FormProvider {...methods}>
						<Input
							name="title"
							defaultValue=""
							labelText="사진 이름"
							placeholderText="사진 이름을 입력 해주세요"
							rules={{
								required: {
									value: true,
									message: "사진 제목은 필수 입니다",
								},
								maxLength: {
									value: 12,
									message: "사진 제목은 최대 12글자 입니다",
								},
								minLength: {
									value: 4,
									message: "사진 제목은 최소 4글자 입니다",
								},
								pattern: {
									value: /[A-Za-z]/,
									message:
										"사진 제목은 오직 영문만 허용 합니다",
								},
							}}
						/>
						<Input
							name="price"
							defaultValue=""
							labelText="사진 가격"
							placeholderText="사진의 가격을 입력해 주세요"
							rules={{
								required: {
									value: true,
									message: "사진 제목은 필수 입니다",
								},
								maxLength: {
									value: 8,
									message: "최대 8자리 숫자",
								},
								minLength: {
									value: 4,
									message: "최소 4자리 숫자",
								},
								pattern: {
									value: /[0-9]/,
									message: "오직 숫자만 입력 가능",
								},
							}}
							keyboardType={"numeric"}
						/>
						{/* <View style={styles.buttonBox}>
							<Pressable
								onPress={handleSubmit(onSubmit)}
								style={styles.buttonStyle}
							>
								<Text style={styles.buttonText}>
									이미지 등록
								</Text>
							</Pressable>
							<Pressable style={styles.buttonStyle}>
								<Text style={styles.buttonText}>이전 으로</Text>
							</Pressable>
						</View> */}
					</FormProvider>
				</View>
			</View>
		</View>
	);
};

export default ImageCropPage;

const styles = StyleSheet.create({
	container: { flex: 1 },
	backgroundStyle: {
		flex: 1,
		opacity: 1,
		backgroundColor: GlobalStyles.colors.white,
	},
	buttonBox: {
		alignSelf: "stretch",
		height: 45.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	buttonStyle: {
		height: 40.5,
		borderRadius: 15.5,
		width: "45%",
		backgroundColor: GlobalStyles.colors.accent500,
	},
	buttonText: {
		fontSize: 12.5,
		color: GlobalStyles.colors.white,
		textAlign: "center",
		lineHeight: 40.5,
	},
	formBox: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingHorizontal: 35.5,
	},
	imageFrameStyle: {
		flex: 1,
		height: 330,
		alignItems: "center",
		justifyContent: "center",
	},
	imageStyle: {
		flex: 1,
		height: "100%",
	},
	titleTextBox: {
		alignSelf: "stretch",
		height: 120.5,
		backgroundColor: GlobalStyles.colors.accent500,
		opacity: 0.75,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 12.5,
	},
	titleText: {
		fontSize: 35.5,
		color: GlobalStyles.colors.white,
	},
});
