import React from "react";
import {
	useWindowDimensions,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Pressable,
} from "react-native";
import { GlobalStyles } from "../constant/color";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { variables } from "../constant/variables";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const UploadPicture = () => {
	const { width } = useWindowDimensions();
	const [loadPictureMethod, setLoadPictureMethod] = React.useState("");
	const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions({
		writeOnly: true,
	});
	const navigation = useNavigation();

	const [_, requestCameraPermission] = ImagePicker.useCameraPermissions();

	const onPressButton = (loadPictureMethodValue) => {
		setLoadPictureMethod(loadPictureMethodValue);
	};

	const loadCameraButton = async () => {
		setLoadPictureMethod("");
		const permission = await requestCameraPermission();
		if (!permission.granted) {
			return null;
		}
		try {
			const cameraPictureData = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: false,
				quality: 1,
			});
			if (cameraPictureData.cancelled) {
				return null;
			}
			navigation.navigate("ImageCropPage", {
				pictureData: cameraPictureData,
			});
		} catch (err) {
			console.error(err);
		}
	};

	const loadGalleryButton = async () => {
		setLoadPictureMethod("");
		if (!status?.granted) {
			const permission = await requestPermission();
			if (!permission.granted) {
				return null;
			}
		}
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Image,
				allowsEditing: false,
				quality: 1,
				aspect: [1, 1],
			});
			if (result.canceled) {
				return null;
			}
			navigation.push("ImageCropPage", {
				pictureData: result,
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Pressable
				onPressIn={onPressButton.bind(
					this,
					variables.loadPictureMethod.byGallery
				)}
				onPressOut={loadGalleryButton.bind(this)}
				style={({ pressed }) => [
					styles.buttonBox,
					pressed && styles.buttonPressedStyle,
					{ width: width / 2, height: width / 2 },
				]}
			>
				<View style={styles.buttonStyle}>
					<AntDesign
						size={styles.buttonIconStyle.width}
						color={
							loadPictureMethod ===
							variables.loadPictureMethod.byGallery
								? styles.buttonIconPressedStyle.color
								: styles.buttonIconStyle.color
						}
						name="picture"
					/>
					<Text
						style={[
							styles.textStyle,
							loadPictureMethod ===
								variables.loadPictureMethod.byGallery &&
								styles.textPressedStyle,
						]}
					>
						Gallery
					</Text>
				</View>
			</Pressable>
			<Pressable
				onPressIn={onPressButton.bind(
					this,
					variables.loadPictureMethod.byCamera
				)}
				onPressOut={loadCameraButton.bind(this)}
				style={({ pressed }) => [
					styles.buttonBox,
					pressed && styles.buttonPressedStyle,
					{ width: width / 2, height: width / 2 },
				]}
			>
				<View style={styles.buttonStyle}>
					<Ionicons
						size={styles.buttonIconStyle.width}
						color={
							loadPictureMethod ===
							variables.loadPictureMethod.byCamera
								? styles.buttonIconPressedStyle.color
								: styles.buttonIconStyle.color
						}
						name="camera"
					/>
					<Text
						style={[
							styles.textStyle,
							loadPictureMethod ===
								variables.loadPictureMethod.byCamera &&
								styles.textPressedStyle,
						]}
					>
						Camera
					</Text>
				</View>
			</Pressable>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	buttonBox: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		borderRadius: 5.5,
		borderColor: GlobalStyles.colors.primary200,
		borderWidth: 1,
		overflow: "hidden",
	},
	buttonStyle: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonPressedStyle: {
		backgroundColor: GlobalStyles.colors.primary200,
	},
	buttonIconStyle: {
		width: 35,
		color: GlobalStyles.colors.primary200,
	},
	buttonIconPressedStyle: {
		color: GlobalStyles.colors.white,
	},
	textStyle: {
		fontSize: 15.5,
		color: GlobalStyles.colors.primary200,
	},
	textPressedStyle: {
		color: GlobalStyles.colors.white,
	},
});

export default UploadPicture;
