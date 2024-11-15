import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import NewsListComponent from "../../../Components/NewsListComponent";

const NewsCategoryList = () => {
  const categories = [
    { id: '1', name: 'All' },
    { id: '2', name: 'National' },
    { id: '3', name: 'Politics' },
    { id: '4', name: 'Education' },
    { id: '5', name: 'Health' },
    { id: '6', name: 'Sports' },
    { id: '7', name: 'International' },
  ];

  const newsData = [
    { 
      id: "8", 
      title: "Missing the golden age of digital piracy", 
      categoryId: "2", 
      image: require("../../../Utils/Digital-Content-Physical-Media.jpg"), 
      category: "News", 
      postedBy: "Prosper", 
      postedDate: "14 Oct 2024" 
    },
    { 
      id: "8", 
      title: "Missing the golden age of digital piracy", 
      categoryId: "3", 
      image: require("../../../Utils/Digital-Content-Physical-Media.jpg"), 
      category: "News", 
      postedBy: "Prosper", 
      postedDate: "14 Oct 2024" 
    },
    { 
      id: "8", 
      title: "Missing the golden age of digital piracy", 
      categoryId: "4", 
      image: require("../../../Utils/Digital-Content-Physical-Media.jpg"), 
      category: "News", 
      postedBy: "Prosper", 
      postedDate: "14 Oct 2024" 
    },
    { 
      id: "8", 
      title: "Missing the golden age of digital piracy", 
      categoryId: "5", 
      image: require("../../../Utils/Digital-Content-Physical-Media.jpg"), 
      category: "News", 
      postedBy: "Prosper", 
      postedDate: "14 Oct 2024" 
    },
    { 
      id: "8", 
      title: "Missing the golden age of digital piracy", 
      categoryId: "6", 
      image: require("../../../Utils/Digital-Content-Physical-Media.jpg"), 
      category: "News", 
      postedBy: "Prosper", 
      postedDate: "14 Oct 2024" 
    },
    { 
      id: "8", 
      title: "Missing the golden age of digital piracy", 
      categoryId: "7", 
      image: require("../../../Utils/Digital-Content-Physical-Media.jpg"), 
      category: "News", 
      postedBy: "Prosper", 
      postedDate: "14 Oct 2024" 
    },
    // Add other news items here...
  ];

  const [activeCategoryId, setActiveCategoryId] = useState('1');

  const renderCategoryItem = ({ item }) => {
    const isActive = item.id === activeCategoryId;

    return (
      <TouchableOpacity onPress={() => setActiveCategoryId(item.id)} style={styles.catBtn}>
        <Text style={[styles.category, isActive && styles.activeCategory]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const filteredNews = activeCategoryId === '1' 
    ? newsData 
    : newsData.filter(news => news.categoryId === activeCategoryId);

  const renderNewsItem = ({ item }) => {
    if (!item) {
      return null; // Handle undefined item
    }

    console.log("Rendering item:", item); // Debugging line
    return <NewsListComponent item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        style={styles.newsList}
      />
    </View>
  );
};

export default NewsCategoryList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "column",
  },
  category: {
    fontSize: 18,
    marginVertical: 5,
    backgroundColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    color: "#666",
    marginRight: 15,
  },
  activeCategory: {
    backgroundColor: "dodgerblue",
    color: "#fff",
  },
  newsList: {
    marginTop: 20,
  },
});
