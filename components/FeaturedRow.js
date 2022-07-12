import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        conetentContainerStyle={{ paddingHorizontal: 15 }}
        showHorizontalScrollIndicator={false}
        className=""
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="You! Sushi"
          rating={4.5}
          genre="Japanses"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />

<RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="You! Sushi"
          rating={4.5}
          genre="Japanses"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />

<RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="You! Sushi"
          rating={4.5}
          genre="Japanses"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
