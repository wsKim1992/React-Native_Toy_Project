import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { GlobalStyles } from "../constant/color";

const UploadPicture = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>UploadPicture</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default UploadPicture;
