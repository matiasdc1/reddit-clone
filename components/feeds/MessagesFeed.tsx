import dayjs from 'dayjs'
import React from 'react'
import { Avatar } from 'react-native-elements'
import { faker } from '@faker-js/faker'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { map, random } from 'lodash'

const messages = map(new Array(10), () => {
  return {
    id: faker.datatype.uuid(),
    title: `Welcome to r/${faker.name.firstName()}! subredit.`,
    message: faker.lorem.paragraph(),
    date: faker.date.past(),
    sender: faker.name.firstName(),
    featured: random(0, 1) === 0 ? true : false,
  }
})

const MessagesFeed: React.FC = () => {
  return (
    <FlatList
      data={messages}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={{ backgroundColor: 'black' }}>
            <View style={styles.container}>
              <Avatar
                size={30}
                icon={{
                  name: 'email',
                  type: 'material',
                  color: item.featured ? '#007bff' : 'white',
                }}
              />
              <View style={styles.containerInformation}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>
                  {item.message.substring(0, 250)}
                  {item.message.length > 250 ? '...' : ''}
                </Text>
                <Text style={styles.sender}>
                  r/{item.sender}{' '}
                  <Text style={styles.date}> · {dayjs().diff(item.date, 'days')}d</Text>
                </Text>
              </View>
              <TouchableOpacity>
                <Avatar
                  size={30}
                  icon={{
                    name: 'more-vert',
                    type: 'material',
                    color: 'gray',
                  }}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}

export default MessagesFeed

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(26,26,26)',
    padding: 10,
    marginBottom: 1,
  },
  containerInformation: {
    flex: 1,
  },
  title: {
    color: 'white',
  },
  body: {
    color: 'gray',
  },
  sender: {
    fontSize: 13,
    color: '#cc2f2f',
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
})
