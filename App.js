import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { GlobalStyles } from "./constant/color";
import GalleryPage from "./screens/GalleryPage";
import UploadPicture from "./screens/UploadPicture";
import TitlePage from "./screens/TitlePage";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const RenderingTabsOfBottomNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary300 },
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary300 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name="GalleryPage"
        component={GalleryPage}
        options={{
          title: "Gallery",
          tabBarLabel: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="hourglass" />
          ),
        }}
      />
      <BottomTabs.Screen
        name="UploadPicture"
        component={UploadPicture}
        options={{
          title: "Upload Page",
          tabBarLabel: "Upload Page",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="calendar" />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          }}
          initialRouteName="TitlePage"
          detachInactiveScreens={true}
          gestureEnabled={true}
        >
          <Stack.Screen
            name="BottomTabBar"
            component={RenderingTabsOfBottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TitlePage"
            component={TitlePage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
