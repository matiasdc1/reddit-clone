import React, { useState } from 'react'
import { Avatar, SearchBar } from 'react-native-elements'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface HeaderComponentType {
  type: 'search' | 'inbox' | 'chats'
  icon: string
}

const HeaderComponent: React.FC<HeaderComponentType> = ({ type, icon }) => {
  const [search, setSearch] = useState('')

  const updateSearch = (text: string) => {
    setSearch(text)
  }

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Avatar
          size={30}
          rounded
          icon={{ name: 'pencil', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#FF4500' }}
        />
      </TouchableOpacity>
      {type === 'search' && (
        <SearchBar
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInputStyle}
          placeholder='Search'
          /* @ts-ignore */
          onChangeText={updateSearch}
          value={search}
        />
      )}
      {type !== 'search' && (
        <Text style={styles.text}>{type[0].toUpperCase() + type.slice(1)}</Text>
      )}
      <TouchableOpacity>
        <Avatar size={40} rounded icon={{ name: icon, type: 'material' }} />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'rgb(20,20,20)',
    justifyContent: 'space-between',
  },
  searchBarContainer: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: 'rgb(20,20,20)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    height: 30,
    padding: 2,
    backgroundColor: 'rgb(40,40,40)',
  },
  searchBarInputStyle: {
    fontSize: 13,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    color: 'white',
    flex: 1,
  },
})
