import { Animated, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import NewsSliderComponent from '../../../../Components/NewsSliderComponent';

const slides = [
  {
    id: 1,
    title: "Uganda Airlines to soon land at London Gatwick",
    posteby: "Prosper",
    postedDate: "10 Oct 2024",
    image: require("../../../../Utils/ugandaair.jpg"),
  },
  {
    id: 2,
    title: "State House unit probes ministers Kasaija, Anite",
    posteby: "Prosper",
    postedDate: "10 Oct 2024",
    image: require("../../../../Utils/MATIA.jpg"),
  },
  {
    id: 3,
    title: "Uganda education overhaul hits snag as donor cut funds over anti-homosexuality law",
    posteby: "Prosper",
    postedDate: "10 Oct 2024",
    image: require("../../../../Utils/Janet-Kataaha-Museveni.png"),
  },
];

const { width } = Dimensions.get('window');

const NewsSlider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      flatListRef.current.scrollToOffset({
        offset: ((scrollX._value / width + 1) % totalSlides) * width,
        animated: true,
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [scrollX, totalSlides]);

  return (
    <View>
      <Animated.FlatList
        data={slides}
        renderItem={({ item }) => <NewsSliderComponent item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        ref={flatListRef}
        bounces={false}
        onMomentumScrollEnd={(event) => {
          scrollX.setValue(event.nativeEvent.contentOffset.x);
        }}
      />
    </View>
  );
};

export default NewsSlider;

const styles = StyleSheet.create({});
