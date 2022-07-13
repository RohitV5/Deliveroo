import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        className="my-10 text-lg font-bold text-center text-white"
        animation="slideInUp"
        easing="ease-out"
        iterationCount={1}
        style={{ textAlign: "center" }}
      >
        Processing Order
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
