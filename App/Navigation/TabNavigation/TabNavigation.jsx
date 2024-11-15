import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import NewsScreen from '../../Screens/NewsScreen/NewsScreen';
import SavedItems from '../../Screens/SavedItems/SavedItems';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff' },
      }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" size={size} color={color} />
            ),
            tabBarLabel: "Home",
          }} 
        />
        <Tab.Screen 
          name="News" 
          component={NewsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="newspaper-outline" size={size} color={color} />
            ),
            tabBarLabel: "News",

          }} 
        />
        <Tab.Screen 
          name='Saved' 
          component={SavedItems} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="bookmark-outline" size={size} color={color} />
            ),
            tabBarLabel: "Saved",

          }} 
        />
        <Tab.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" size={size} color={color} />
            ),
            tabBarLabel: "Profile",

          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;

const styles = StyleSheet.create({});
