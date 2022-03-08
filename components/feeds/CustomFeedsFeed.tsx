import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomFeedsFeed: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Create new Custom Feed</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default CustomFeedsFeed

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: '#007bff',
    backgroundColor: 'rgb(20,20,20)',
  },
})
