import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import restaurantSlice, { selectRestaurant } from "../features/restaurantSlice";
import { useSelector, useDispatch } from "react-redux";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="text-lg font-light text-white">Order Help</Text>
        </View>

        <View className="z-50 p-6 mx-5 my-2 bg-white rounded-md shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-4xl font-bold">40 - 45 Minutes</Text>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="w-20 h-20"
            />
          </View>

          <Progress.Bar progress={0.4} size={30} color="#00CCBB" />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant?.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="z-0 flex-1 -mt-10"
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat,
            longitude: restaurant?.long,
          }}
          title={restaurant?.title}
          description={restaurant?.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="flex-row items-center h-20 space-x-5 bg-white">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-12 h-12 p-4 ml-5 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-lg">Rohit Verma</Text>
          <Text className="text-gray-400"> Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
