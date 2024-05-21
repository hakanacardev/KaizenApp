import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Promotions from "./src/pages/Promotions";
import PromotionDetail from "./src/pages/PromotionDetail";
import { RouteParams } from "./src/interfaces";
import axios from "axios";

const Stack = createNativeStackNavigator<RouteParams>();

const App = () => {
  axios.defaults.baseURL = "https://api.extrazone.com";
  axios.defaults.headers.common["X-Country-Id"] = "TR";
  axios.defaults.headers.common["X-Language-Id"] = "TR";

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Promotions"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Promotions" component={Promotions} />
        <Stack.Screen name="PromotionDetail" component={PromotionDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
