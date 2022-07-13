import { View, Image, ScrollView, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 p-4 bg-gray-300"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute p-2 bg-gray-100 rounded-full top-14 left-5"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row my-1 space-x-2">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-gray-500">{rating}</Text>.{genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="grey" opacity={0.4} size={22} />
                <Text className="mr-20 text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>

            <Text className="pb-4 mt-2 text-gray-500">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center p-4 space-x-2 border-gray-500 border-y">
            <QuestionMarkCircleIcon color="#00CCBB" />
            <Text className="flex-1 pl-2 font-bold text-md">
              Have a food allergy?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="pb-40">
          <Text className="px-4 pt-6 mb-3 text-xl font-bold">Menu</Text>

          {/* Dish rows */}
          {dishes?.map((dish) => {
            return (
              <DishRow
                key={dish?._id}
                id={dish?._id}
                name={dish?.name}
                description={dish?.short_description}
                price={dish?.Price}
                image={dish?.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
