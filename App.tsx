import ChatScreen from './screens/ChatScreen'
import HomeScreen from './screens/HomeScreen'
import AlertsScreen from './screens/AlertsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SuscriptionsScreen from './screens/SuscriptionsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { store } from './store/store'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import 'react-native-gesture-handler'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import MyProfileScreen from './screens/MyProfileScreen'
import ComunityScreen from './screens/ComunityScreen'
import TabNavigation from './navigation/TabNavigation'
import VaultScreen from './screens/VaultScreen'
import { CustomDrawerContent } from './navigation/DrawerContent'

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const generateOptions = (icon: string) => {
  return {
    drawerIcon: () => <Ionicons name={icon} size={20} color={'gray'} />,
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ backgroundColor: 'rgb(25,25,25)' }}>
        <StatusBar backgroundColor='rgb(25,25,25)' style='light' />
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
              headerShown: false,
              drawerStyle: {
                backgroundColor: 'rgb(20,20,20)',
              },
              drawerLabelStyle: {
                color: 'white',
              },
              drawerActiveBackgroundColor: 'transparent',
            }}
          >
            <Drawer.Screen
              name='My Feed'
              component={TabNavigation}
              options={generateOptions('md-logo-reddit')}
            />
            <Drawer.Screen
              name='My Profile'
              component={MyProfileScreen}
              options={generateOptions('person-circle-outline')}
            />
            <Drawer.Screen
              name='Community'
              component={ComunityScreen}
              options={generateOptions('people-circle-outline')}
            />
            <Drawer.Screen
              name='Vault'
              component={VaultScreen}
              options={generateOptions('md-server-outline')}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
