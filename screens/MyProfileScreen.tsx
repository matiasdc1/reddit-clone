import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'

const MyProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyProfileScreen</Text>
    </SafeAreaView>
  )
}

export default MyProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20,20,20)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
