import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface RecentlyVisitedType {
  visited: {
    id: string
    sub: string
    members: string
    message: string
    color: string
  }[]
}

const RecentlyVisited: React.FC<RecentlyVisitedType> = ({ visited }) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text style={styles.subtitle}>Recently visited subreddits</Text>
      <ScrollView horizontal>
        {visited.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                backgroundColor: item.color,
                borderRadius: 10,
                marginRight: 10,
                width: 180,
              }}
            >
              <View style={styles.subreditContainer}></View>
              <View style={styles.background}>
                <Text style={{ color: 'white' }}>r/{item.sub}</Text>
                <Text style={{ color: 'gray' }}>{item.members}m members</Text>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  {item.message.substring(0, 50)}
                  {item.message.length > 50 ? '...' : ''}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default RecentlyVisited

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  subtitle: {
    color: 'white',
    marginVertical: 10,
  },
  subreditContainer: {
    height: 100,
  },
  background: {
    backgroundColor: 'rgb(20,20,20)',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
})
