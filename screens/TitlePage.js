import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { GlobalStyles } from "../constant/color";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const TitlePage = ({ navigation }) => {
  let timeIntervalRef = React.useRef(null);
  React.useEffect(() => {
    timeIntervalRef = setInterval(() => {
      navigation.navigate("BottomTabBar");
    }, 3000);
    return () => {
      clearInterval(timeIntervalRef);
      timeIntervalRef.current = null;
    };
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradientStyle}
        colors={["#4c669f", "#3b5998", "#fff"]}
        locations={[0.2, 0.5, 0.8]}
      >
        <ImageBackground
          source={require("../assets/image/background_img_1.jpg")}
          resizeMode="cover"
          style={styles.backGroundImageStyle}
        >
          <Text style={styles.textStyle}>나만의 사진첩</Text>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backGroundImageStyle: {
    flex: 1,
    opacity: 0.35,
    justifyContent: "center",
  },
  linearGradientStyle: {
    flex: 1,
  },
  textStyle: {
    fontSize: 95,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});

export default TitlePage;
