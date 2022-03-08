import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Post from '../Post'
import React, { useEffect } from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
  } from 'react-native'
import { getPosts, loadPosts } from '../../store/postsSlicer'
import { getUsers, loadUsers } from '../../store/usersSlicer'
import { useAppDispatch, useAppSelector } from '../../store/storeHooks'

const HomeFeed: React.FC = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts.posts)

  useEffect(() => {
    const exec = async () => {
      const posts = await getPosts()
      const users = await getUsers()
      dispatch(loadPosts(posts))
      dispatch(loadUsers(users))
    }
    exec()
  }, [])

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <TouchableOpacity style={styles.filter}>
            <MaterialCommunityIcons name={'rocket-outline'} size={20} color={'gray'} />
            <Text style={{ fontSize: 12, color: 'gray' }}>BEST POSTS</Text>
            <MaterialIcons name={'keyboard-arrow-down'} size={20} color={'gray'} />
          </TouchableOpacity>
        }
        style={{ backgroundColor: 'rgb(0,0,0)', borderColor: 'black' }}
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Post item={item} />}
      />
    </View>
  )
}

export default HomeFeed

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
})
