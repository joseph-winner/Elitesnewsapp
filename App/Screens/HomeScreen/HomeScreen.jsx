import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Navbar from '../../Components/Navbar';
import NewsSlider from './HomeComponents/NewsSlider/NewsSlider';
import NewsCategories from './Categories/NewsCategories';
import NewsListComponent from '../../Components/NewsListComponent';

const HomeScreen = () => {
  // You can create an array of components to render
  const data = [
    { id: '1', component: <NewsSlider /> },
    { id: '2', component: <NewsCategories /> },
    {
      id: "3", component: <NewsListComponent /> 
    }
  ];

  const renderItem = ({ item }) => item.component;

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Optional: Add some padding at the bottom
  },
});
