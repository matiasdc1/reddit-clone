import dayjs from 'dayjs'
import React from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
interface ChatComponentType {
  item: any
}

const ChatComponent: React.FC<ChatComponentType> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar
        size={40}
        rounded
        icon={{ name: 'pencil', type: 'font-awesome' }}
        containerStyle={{ backgroundColor: item.color }}
      />
      <View style={styles.content}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.date}>{dayjs(item.date).format('MMM DD, YYYY')}</Text>
        </View>
        <Text style={styles.message}>
          {item.message.substring(0, 30)}
          {item.message.length > 30 ? '...' : ''}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ChatComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(30,30,30)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  username: {
    color: 'rgb(100,100,100)',
  },
  message: {
    marginTop: 4,
    color: 'white',
    fontSize: 12,
  },
  date: {
    fontSize: 13,
    color: 'rgb(100,100,100)',
  },
})
