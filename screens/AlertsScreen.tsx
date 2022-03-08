import Header from '../components/Header'
import MessagesFeed from '../components/feeds/MessagesFeed'
import NotificationsFeed from '../components/feeds/NotificationsFeed'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

const Tab = createMaterialTopTabNavigator()

const AlertsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header type='inbox' icon='more-vert' />
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
        <Tab.Screen name='Notifications' component={NotificationsFeed} />
        <Tab.Screen name='Messages' component={MessagesFeed} />
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

export default AlertsScreen
