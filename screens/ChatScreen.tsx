import Chat from '../components/Chat'
import Header from '../components/Header'
import React from 'react'
import { faker } from '@faker-js/faker'
import { FlatList, StyleSheet } from 'react-native'
import { map } from 'lodash'
import { SafeAreaView } from 'react-native-safe-area-context'

const chats = map(new Array(20), () => {
  return {
    id: faker.datatype.uuid(),
    username: faker.name.firstName(),
    message: faker.lorem.paragraph(),
    date: faker.date.past(),
    color: faker.internet.color(),
  }
})

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header type='chats' icon='add-circle-outline' />
      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Chat item={item} />}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,15,15)',
  },
})

export default ChatScreen
