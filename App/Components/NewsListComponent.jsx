import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";


const NewsListComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} />
      <View>
        <Text>{item.category}</Text>
        <Text>{item.title}</Text>
        <View>
        <View>
            <Icon name="user" size={14} color="#fff" />
            <Text style={styles.postedDate}>{item.postedDate}</Text>
          </View>
        <View>
            <Icon name="calendar" size={14} color="#fff" />
            <Text style={styles.postedDate}>{item.postedDate}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default NewsListComponent

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
})