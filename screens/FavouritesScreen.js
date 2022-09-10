import {View, Pressable, Image, Text, StyleSheet, FlatList } from 'react-native'
import { useEffect, useContext, useState } from 'react'
import { ApplicationContext } from '../store/context/application-context';
import { Ionicons } from '@expo/vector-icons'

import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate'
import { PLAYERS } from '../data/PlayersData'

const FavouritesScreen = ({route, navigation}) => {
  const context = useContext(ApplicationContext);
  const favouritePlayerIds = context.favouriteList
  const [favoritePlayers, setFavouritePlayers] = useState([])

  const getPlayers = () => {
    let players = [];
    favouritePlayerIds.forEach(id => {
      PLAYERS.forEach(player => {
        if (player.id === id) {
          players.push(player)
        }
      });
    });
    setFavouritePlayers(players)
  }

  const onSelectedPlayerHandler = (playerId) => {
    navigation.navigate('PlayerStats', { playerId: playerId });
  }

  const removeFavourite = (playerId) => {
    context.remove(playerId)
  }

  useEffect(() => {
    getPlayers()
  },[favouritePlayerIds])

  const RenderPlayer = ({playerItem, index}) => {
    return (
      <View style={styles.spaceMarginItem}>
        <Pressable onPress={() => onSelectedPlayerHandler(playerItem.id)}>
          <View style={[
            styles.playerItem,
            {borderTopWidth: index === 0 ? 4 : 0},
            {borderTopColor: index === 0 ? Colors.lime : Colors.darkGray},
            {borderBottomWidth: index === PLAYERS.length - 1 ? 4 : 2},
            {borderBottomColor: index === PLAYERS.length - 1 ? Colors.lime : Colors.darkGray},
          ]}>
            <Text style={styles.playerText}>{playerItem.name} </Text>
            <Pressable onPress={() => removeFavourite(playerItem.id)}>
              <Ionicons name='trash' size={20} color={Colors.lime}/>
            </Pressable>
          </View>
        </Pressable>
      </View>
    )
  }

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <Text style={styles.titleText}>Favourite players</Text>
        <FlatList
          data={favoritePlayers}
          keyExtractor={(item => item.id)}
          numColumns={1}
          renderItem={({item, index}) => {
            return (
              <RenderPlayer playerItem={item} index={index}/>
            );
          }}
        />
      </View>
    </ScreenTemplate>
  )
}

export default FavouritesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    /* backgroundColor: 'green' */
  },
  titleText: {
    color: Colors.lime,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
  },
  playerText: {
    color: Colors.lightText,
    fontSize: 22,
    fontWeight: 'bold',
  },
  playerImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  playerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGray,
  },
  spaceMarginItem: {
    margin: 7,
  }
})
