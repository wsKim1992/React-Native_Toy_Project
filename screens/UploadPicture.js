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

const UploadPicture = () => {
  const { width } = useWindowDimensions();
  const [loadPictureMethod, setLoadPictureMethod] = React.useState("");

  const onPressButton = (loadPictureMethodValue) => {
    console.log(loadPictureMethodValue);
    setLoadPictureMethod(loadPictureMethodValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPressIn={onPressButton.bind(
          this,
          variables.loadPictureMethod.byGallery
        )}
        onPressOut={onPressButton.bind(this, "")}
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
              loadPictureMethod === variables.loadPictureMethod.byGallery
                ? styles.buttonIconPressedStyle.color
                : styles.buttonIconStyle.color
            }
            name="picture"
          />
          <Text
            style={[
              styles.textStyle,
              loadPictureMethod === variables.loadPictureMethod.byGallery &&
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
        onPressOut={onPressButton.bind(this, "")}
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
              loadPictureMethod === variables.loadPictureMethod.byCamera
                ? styles.buttonIconPressedStyle.color
                : styles.buttonIconStyle.color
            }
            name="camera"
          />
          <Text
            style={[
              styles.textStyle,
              loadPictureMethod === variables.loadPictureMethod.byCamera &&
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
