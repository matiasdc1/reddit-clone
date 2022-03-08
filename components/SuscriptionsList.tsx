import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface SuscriptionsListType {
  isFavorite: boolean
  items: { id: string; sub: string; color: string; fav: boolean }[]
  onPress: (id: string) => void
  title: string
}

const SuscriptionsList: React.FC<SuscriptionsListType> = ({
  items,
  onPress,
  isFavorite,
  title,
}) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {items.map(item => {
          return (
            <TouchableOpacity key={item.id}>
              <View style={styles.listContainer}>
                <Avatar
                  size={30}
                  rounded
                  icon={{
                    name: 'reddit',
                    type: 'material-community',
                  }}
                  containerStyle={{ backgroundColor: item.color }}
                />
                <Text style={styles.body}>/r{item.sub}</Text>
                <TouchableOpacity onPress={() => onPress(item.id)}>
                  {isFavorite && (
                    <MaterialIcons name={'favorite'} size={20} color={'#007bff'} />
                  )}
                  {!isFavorite && (
                    <MaterialIcons name={'favorite-border'} size={20} color={'#007bff'} />
                  )}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default SuscriptionsList

const styles = StyleSheet.create({
  title: {
    color: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  listContainer: {
    paddingVertical: 10,
    backgroundColor: 'rgb(20,20,20)',
    paddingLeft: 10,
    paddingRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
  },
})
