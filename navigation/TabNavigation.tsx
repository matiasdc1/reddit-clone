import AlertsScreen from '../screens/AlertsScreen'
import ChatScreen from '../screens/ChatScreen'
import HomeScreen from '../screens/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import SuscriptionsScreen from '../screens/SuscriptionsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const generateOptions = (iconActive: string, iconInactive: string) => {
  return {
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Ionicons name={focused ? iconActive : iconInactive} size={20} color={'gray'} />
    ),
  }
}

const TabNavigation: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'rgb(20,20,20)',
            borderTopColor: 'rgb(60,60,60)',
            borderTopWidth: 1,
          },
        }}
      >
        <Tab.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={generateOptions('home', 'home-outline')}
        />
        <Tab.Screen
          name='SuscriptionsScreen'
          component={SuscriptionsScreen}
          options={generateOptions('apps', 'apps-outline')}
        />
        <Tab.Screen
          name='ChatScreen'
          component={ChatScreen}
          options={generateOptions(
            'ios-chatbubble-ellipses',
            'ios-chatbubble-ellipses-outline'
          )}
        />
        <Tab.Screen
          name='AlertsScreen'
          component={AlertsScreen}
          options={generateOptions('md-notifications', 'md-notifications-outline')}
        />
      </Tab.Navigator>
    </>
  )
}

export default TabNavigation
