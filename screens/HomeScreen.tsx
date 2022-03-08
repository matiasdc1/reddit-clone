import Header from '../components/Header'
import HomeFeed from '../components/feeds/HomeFeed'
import PopularFeed from '../components/feeds/PopularFeed'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native'

const Tab = createMaterialTopTabNavigator()

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header type='search' icon='more-vert' />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'rgb(100,100,100)',
          swipeEnabled: true,
          tabBarLabelStyle: {
            fontSize: 16,
            color: 'white',
            fontWeight: '400',
            textTransform: 'none',
          },
          tabBarStyle: { backgroundColor: 'rgb(20,20,20)', paddingHorizontal: 50 },
        }}
      >
        <Tab.Screen name='Home' component={HomeFeed} />
        <Tab.Screen name='r/popular' component={PopularFeed} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,15,15)',
  },
})

export default HomeScreen
