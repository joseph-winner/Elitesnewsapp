import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome"; // or another icon set
import { LinearGradient } from 'expo-linear-gradient';


// Sample slide data
const slides = [
  {
    id: 1,
    title: "Uganda Airlines to soon land at London Gatwick",
    posteby: "Prosper",
    category: "News",
    postedDate: "10 Oct 2024",
    image: require("../../../Utils/ugandaair.jpg"),
  },
  {
    id: 2,
    title: "State House unit probes ministers Kasaija, Anite",
    posteby: "Prosper",
    category: "News",
    postedDate: "10 Oct 2024",
    image: require("../../../Utils/MATIA.jpg"),
  },
  {
    id: 3,
    title:
      "Uganda education overhaul hits snag as donor cut funds over anti-homosexuality law",
    posteby: "Prosper",
    category: "News",
    postedDate: "10 Oct 2024",
    image: require("../../../Utils/Janet-Kataaha-Museveni.png"),
  },
];

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={slides[currentIndex].image}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.category}>{slides[currentIndex].category}</Text>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
          style={styles.slideDesc}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Icon name="user" size={14} color="#fff" />
              <Text style={styles.postedBy}>
                {slides[currentIndex].posteby}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Icon name="calendar" size={14} color="#fff" />
              <Text style={styles.postedDate}>
                {slides[currentIndex].postedDate}
              </Text>
            </View>
          </View>

          <Text style={styles.title}>{slides[currentIndex].title}</Text>
        </LinearGradient>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevSlide} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextSlide} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SlideShow;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    marginTop: 25,
    marginHorizontal: 15,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 320,
    borderRadius: 30,
    overflow:"hidden"
  },
  image: {
    width: "100%",
    height: "100%", 
  },
  slideDesc: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    zIndex: 7,
  },
  category: {
    position: "absolute",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    top: 15,
    left: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  postedBy: {
    color: "#ffffff",
    fontSize: 12,
    marginVertical: 2,
  },
  postedDate: {
    color: "#ffffff",
    fontSize: 12,
    marginVertical: 2,
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
