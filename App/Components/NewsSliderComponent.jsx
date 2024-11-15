import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('screen');

const NewsSliderComponent = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
        style={styles.slideDesc}
      >
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Icon name="user" size={14} color="#fff" />
            <Text style={styles.postedBy}>{item.posteby}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="calendar" size={14} color="#fff" />
            <Text style={styles.postedDate}>{item.postedDate}</Text>
          </View>
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width,
    height: 350,
    overflow: "hidden",
    position: "relative"
  },
  image: {
    width: 350,
    height: "100%",
    borderRadius: 25,
  },
  slideDesc: {
    position: "absolute",
    bottom: 0,
    width: 350,
    color: "#fff",
    paddingHorizontal: 25,
    padding: 15,
    borderRadius: 25,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 10
  },
  postedBy: {
    color: "#fff"
  },
  postedDate: {
    color: "#fff"
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default NewsSliderComponent;
