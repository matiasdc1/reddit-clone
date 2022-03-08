import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native'

const ComunityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ComunityScreen</Text>
    </SafeAreaView>
  )
}

export default ComunityScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20,20,20)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
