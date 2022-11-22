import {View, Pressable, Text, StyleSheet, Image,  FlatList } from 'react-native'
import { useLayoutEffect } from 'react'

import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate'
import { PLAYERS } from '../data/PlayersData'

const PlayersScreen = ({route, navigation}) => {
  const team = route.params.teamId;
  const navTitle = route.name;
  const teamName =  route.params.teamName

  const onSelectedPlayerHandler = (playerId) => {
    navigation.navigate('PlayerStats', { playerId: playerId });
  }

  useLayoutEffect(() => {
    navigation.setOptions({title: navTitle})
  },[navigation, navTitle])

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
            <View style={styles.playerImgContainer}>
              <Image
                style={styles.playerImage}
                source={playerItem.image}
              />
            </View>
          </View>
        </Pressable>
      </View>
    )
  }


  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <Text style={styles.titleText}>{teamName}</Text>
        <FlatList
          data={PLAYERS}
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

export default PlayersScreen

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
    resizeMode: 'cover',
    borderRadius: 35,
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
  },
  playerImgContainer: {
    borderRaius: 25,
    border: 3,
    borderColor: 'green'
  }
})
