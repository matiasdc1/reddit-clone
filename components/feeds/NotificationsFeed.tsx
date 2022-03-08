import dayjs from 'dayjs'
import Notification from '../Notification'
import React from 'react'
import { faker } from '@faker-js/faker'
import { map } from 'lodash'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const notificationsToday = map(new Array(2), () => {
  return {
    id: faker.datatype.uuid(),
    sub: faker.name.firstName(),
    message: faker.lorem.paragraph(),
    date: dayjs().format('YYYY-MM-DD'),
    color: faker.internet.color(),
  }
})

const notificationsEarlier = map(new Array(10), () => {
  return {
    id: faker.datatype.uuid(),
    sub: faker.name.firstName(),
    message: faker.lorem.paragraph(),
    date: faker.date.past(),
    color: faker.internet.color(),
  }
})

const NotificationsFeed: React.FC = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'black' }}>
        <Text style={styles.section}>Today</Text>
        {notificationsToday.map(item => {
          return <Notification item={item} key={item.id} />
        })}
      </View>
      <View style={{ backgroundColor: 'black' }}>
        <Text style={styles.section}>Earlier</Text>
        {notificationsEarlier.map(item => {
          return <Notification item={item} key={item.id} />
        })}
      </View>
    </ScrollView>
  )
}

export default NotificationsFeed

const styles = StyleSheet.create({
  section: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },
})
