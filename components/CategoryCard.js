import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='mr-2 shadow'>
      <Image source={{uri:imgUrl}} className="w-20 h-20 rounded" />
      <Text className="relative font-bold text-white bottom-5  bg-red-500 block bg-opacity-50">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
