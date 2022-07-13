import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";
import { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"]`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  console.log(categories)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories.map((category) => (
        <CategoryCard
          imgUrl={urlFor(category.image).width(200).url()}
          title={category?.title}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
