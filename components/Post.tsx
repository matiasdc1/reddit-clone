import dayjs from 'dayjs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import { Avatar } from 'react-native-elements'
import { find } from 'lodash'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../store/storeHooks'
import type { Post } from '../store/postsSlicer'
import type { User } from '../store/usersSlicer'

interface PostComponentType {
  item: Post
}

const PostComponent: React.FC<PostComponentType> = ({ item }) => {
  const users = useAppSelector(state => state.users.users)
  const user = find(users, { id: item.userId }) as User

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <Avatar
          size={30}
          rounded
          icon={{ name: 'pencil', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#FF4500' }}
        />
        <View style={styles.headerInformation}>
          <Text style={styles.subTitle}>r/{item.sub}</Text>
          <Text style={styles.user}>
            u/{user?.username} · {dayjs().diff(dayjs(item.createdAt), 'days')}d
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>
          {item.body?.substring(0, 250)}
          {item.body && item.body.length > 250 ? '...' : ''}
        </Text>
        {item.imgUrl ? (
          <Image style={styles.image} source={{ uri: item.imgUrl }} />
        ) : null}
      </View>
      <View style={styles.buttonsMenu}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name={'arrow-up-bold-outline'}
              size={20}
              color={'gray'}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{item.likes}</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name={'arrow-down-bold-outline'}
              size={20}
              color={'gray'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons name={'message-outline'} size={20} color={'gray'} />
          </TouchableOpacity>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons name={'share-variant'} size={20} color={'gray'} />
          </TouchableOpacity>
          <Text style={styles.text}>Share</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PostComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(26, 26, 26)',
    marginBottom: 8,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerInformation: {
    paddingHorizontal: 10,
  },
  subTitle: {
    color: 'white',
    fontSize: 16,
  },
  user: {
    color: 'rgb(100,100,100)',
    fontSize: 14,
  },
  title: {
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 17,
    marginTop: 5,
  },
  description: {
    paddingHorizontal: 10,
    marginTop: 5,
    color: 'rgb(100,100,100)',
  },
  image: {
    height: 300,
    resizeMode: 'cover',
    borderTopWidth: 0,
  },
  buttonsMenu: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'rgb(100,100,100)',
    marginHorizontal: 5,
  },
})
