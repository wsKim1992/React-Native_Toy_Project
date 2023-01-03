import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constant/color";

const GalleryPage = () => {
  return (
    <View style={styles.container}>
      <Text>GalleryPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default GalleryPage;
