import dayjs from 'dayjs'
import React from 'react'
import { Avatar } from 'react-native-elements'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface SubNotificationGroupType {
  item: any
}

const SubNotificationGroup: React.FC<SubNotificationGroupType> = ({ item }) => {
  return (
    <TouchableOpacity key={item.id}>
      <View style={styles.container}>
        <Avatar
          size={30}
          rounded
          icon={{ name: 'pencil', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: item.color }}
        />
        <View style={styles.informationContainer}>
          <Text style={styles.title}>
            r/{item.sub}
            <Text style={styles.date}> · {dayjs().diff(item.date, 'days')}d</Text>
          </Text>
          <Text style={styles.body}>
            {item.message.substring(0, 50)}
            {item.message.length > 50 ? '...' : ''}
          </Text>
        </View>
        <TouchableOpacity>
          <Avatar
            size={30}
            iconStyle={{ color: 'gray' }}
            rounded
            icon={{ name: 'more-vert', type: 'material' }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(26,26,26)',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 1,
  },
  informationContainer: {
    marginLeft: 10,
    flex: 1,
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
  title: {
    color: 'white',
  },
  body: {
    color: 'gray',
  },
  section: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },
})

export default SubNotificationGroup
