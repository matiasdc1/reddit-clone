import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Post from '../Post'
import React, { useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { getPosts, loadPosts } from '../../store/postsSlicer'
import { map } from 'lodash'
import { StyleSheet, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../store/storeHooks'

const trending = map(new Array(5), () => {
  return {
    id: faker.datatype.uuid(),
    title: faker.name.firstName(),
    color: faker.internet.color(),
  }
})

const PopularFeed: React.FC = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts.posts)

  useEffect(() => {
    const exec = async () => {
      const posts = await getPosts()
      dispatch(loadPosts(posts))
    }

    exec()
  }, [])

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.filter}>
              <MaterialCommunityIcons name={'rocket-outline'} size={20} color={'gray'} />
              <Text style={styles.icon}>HOT POSTS</Text>
              <MaterialIcons name={'keyboard-arrow-down'} size={20} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
              <Ionicons name={'md-location-outline'} size={20} color={'gray'} />
              <Text style={styles.icon}>GLOBAL</Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: 'rgb(26,26,26)', marginBottom: 10 }}>
            <View style={styles.trendingHeader}>
              <Ionicons name={'trending-up-outline'} size={20} color={'#007bff'} />
              <Text style={styles.trendingHeaderText}>Trending today</Text>
            </View>
            <ScrollView horizontal style={styles.scroller}>
              {trending.map(item => {
                return (
                  <TouchableOpacity key={item.id}>
                    <View style={[styles.trendingItem, { backgroundColor: item.color }]}>
                      <Text style={styles.trendingItemText}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
        </View>
      }
      style={{ backgroundColor: 'rgb(0,0,0)', borderColor: 'black' }}
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Post item={item} />}
    />
  )
}

export default PopularFeed

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  icon: {
    fontSize: 12,
    color: 'gray',
  },
  scroller: {
    padding: 10,
    paddingTop: 5,
  },
  trendingHeader: {
    padding: 10,
    flexDirection: 'row',
  },
  trendingItem: {
    width: 150,
    height: 80,
    borderRadius: 10,
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  trendingHeaderText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  trendingItemText: {
    color: 'white',
    padding: 5,
    fontWeight: '600',
  },
})
