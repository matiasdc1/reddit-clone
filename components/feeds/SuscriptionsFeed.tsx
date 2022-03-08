import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React, { useMemo, useState } from 'react'
import RecentlyVisited from '../RecentlyVisited'
import SuscriptionsList from '../SuscriptionsList'
import { Avatar } from 'react-native-elements'
import { faker } from '@faker-js/faker'
import { filter, findIndex, map, random } from 'lodash'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const visited = map(new Array(10), () => {
  return {
    id: faker.datatype.uuid(),
    sub: faker.name.firstName(),
    members: random(0.0, 10.1).toFixed(2),
    message: "Reddit's premier community.",
    color: faker.internet.color(),
  }
})

const subreddits = map(new Array(10), () => {
  return {
    id: faker.datatype.uuid(),
    sub: faker.name.firstName(),
    color: faker.internet.color(),
    fav: random(0, 1) === 0 ? true : false,
  }
})

const SuscriptionsFeed: React.FC = () => {
  const [subs, setSubs] = useState(subreddits)
  const subFavorites = useMemo(() => filter(subreddits, { fav: true }), [subs])
  const noFavorites = useMemo(() => filter(subreddits, { fav: false }), [subs])

  const removeFavorite = (id: string) => {
    const selectedItemIndex = findIndex(subs, { id: id })
    const newArray = [...subs]
    newArray[selectedItemIndex].fav = false
    setSubs(newArray)
  }

  const addFavorite = (id: string) => {
    const selectedItemIndex = findIndex(subs, { id: id })
    const newArray = [...subs]
    newArray[selectedItemIndex].fav = true
    setSubs(newArray)
  }

  return (
    <ScrollView style={styles.container}>
      <RecentlyVisited visited={visited} />
      <SuscriptionsList
        items={subFavorites}
        onPress={id => removeFavorite(id)}
        isFavorite={true}
        title='FAVORITES'
      />

      <SuscriptionsList
        items={noFavorites}
        onPress={id => addFavorite(id)}
        isFavorite={false}
        title='COMMUNITIES'
      />
    </ScrollView>
  )
}

export default SuscriptionsFeed

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
})
