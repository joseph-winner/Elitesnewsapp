import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewsCategoryList from './NewsCategoryList'

const NewsCategories = () => {
  return (
    <View style={styles.catContainer}>
        <NewsCategoryList />
    </View>
  )
}

export default NewsCategories

const styles = StyleSheet.create({
    catContainer:{
        marginVertical:20,
        marginHorizontal:15,
        marginTop:35
    }
})