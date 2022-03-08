import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function CustomDrawerContent(props: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://toppng.com/uploads/preview/reddit-logo-reddit-icon-115628658968pe8utyxjt.png',
          }}
        />
        <Text style={styles.username}>u/yourUsername</Text>
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryKarma}>
          <Ionicons name='md-settings-outline' size={20} color={'#1a6ebd'} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'white' }}>25</Text>
            <Text style={{ color: 'rgb(100,100,100)', fontSize: 12 }}>Karma</Text>
          </View>
        </View>
        <View style={styles.summaryKarma}>
          <MaterialCommunityIcons name='cake' size={20} color={'#1a6ebd'} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'white' }}>6y 1m</Text>
            <Text style={{ color: 'rgb(100,100,100)', fontSize: 12 }}>Reddit Age</Text>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsLine}>
          <Ionicons name='md-settings-outline' size={20} color={'gray'} />
          <Text style={styles.settings}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  username: {
    color: 'white',
    marginTop: 5,
  },
  settingsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopColor: 'rgba(100,100,100,0.2)',
    borderTopWidth: 1,
  },
  settingsLine: { flexDirection: 'row', alignItems: 'center' },
  settings: {
    marginLeft: 30,
    color: 'white',
  },
  iconContainer: { alignItems: 'center', marginBottom: 20 },
  icon: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: 'rgba(100,100,100, 0.2)',
  },
  summaryKarma: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    borderColor: 'rgb(50,50,50)',
    paddingLeft: 30,
  },
})
