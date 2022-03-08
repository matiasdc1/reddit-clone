import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'

const VaultScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>VaultScreen</Text>
    </SafeAreaView>
  )
}

export default VaultScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20,20,20)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
