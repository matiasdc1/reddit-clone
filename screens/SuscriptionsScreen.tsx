import CustomFeedsFeed from '../components/feeds/CustomFeedsFeed'
import Header from '../components/Header'
import React from 'react'
import SuscriptionsFeed from '../components/feeds/SuscriptionsFeed'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native'

const Tab = createMaterialTopTabNavigator()

const SuscriptionsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header type='search' icon='add-circle-outline' />
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
        <Tab.Screen name='Suscriptions' component={SuscriptionsFeed} />
        <Tab.Screen name='Custom Feeds' component={CustomFeedsFeed} />
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

export default SuscriptionsScreen
