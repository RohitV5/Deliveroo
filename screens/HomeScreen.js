import { View, Text, TextInput, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pt-5 bg-white">
      {/* Header */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="bg-gray-300 rounded-full h-7 w-7"
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver now!</Text>
          <Text className="text-xl font-bold">
            Current location!
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center pb-2 mx-4 space-x-2 ">
        <View className="flex-row flex-1 p-2 space-x-2 bg-gray-200">
          <SearchIcon color="gray" size={20} />
          <TextInput placeholder="Restaurants and cuisines"  keyboardType="default"/>
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* Body Scrollable Area */}
      <ScrollView className="flex-1 bg-gray-100" >
        {/* Categories */}
        <Categories/>

        {/* Featured Rows */}

        <FeaturedRow id="12345667" title="Featured" description="Paid placements from our partners" featuredCategory="featured" />

        {/* Tasty discounts */}

        <FeaturedRow id="12345" title="Tasty Discounts" description="Everyone has been enjoying these tasty discounts" featuredCategory="discounts" />

        {/* Featured Rows */}

        <FeaturedRow id="1234" title="Offer near you" description="Why not support your local restaurants tonight" featuredCategory="offers" />


      </ScrollView>
    </SafeAreaView>
  );
}
