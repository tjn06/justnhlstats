import {View, Pressable, Text, StyleSheet, Image,  FlatList } from 'react-native'

import { useLayoutEffect } from 'react'

import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate'
import Header from '../components/ui/Header'
import { PLAYERS } from '../data/PlayersData'
import EasternIcon from '../assets/images/nhl-eastern-conference.svg';
import WesternIcon from '../assets/images/nhl-western-conference.svg';

const PlayersScreen = ({route, navigation}) => {
  const team = route.params.teamId;
  const navTitle = route.name;
  const teamName =  route.params.teamName
  /* const navTitle = `${route.name} ${route.params.teamName}` */


/*   const selectedTeams = TEAMS.filter((team) => {
    return team.conference === conference
  }) */

  useLayoutEffect(() => {
    navigation.setOptions({title: navTitle})
  },[navigation, navTitle])

  console.log(route)

  const onSelectedPlayerHandler = (playerId) => {
    navigation.navigate('PlayerStats', { playerId: playerId });
}

  const RenderPlayer = ({playerItem, index}) => {
    return <>
    <>
    <View style={styles.spaceMarginItem}>
      <Pressable
      onPress={() => onSelectedPlayerHandler(playerItem.id)}>

        <View style={[
          styles.playerItem,
          {borderTopWidth: index === 0 ? 4 : 0},
          {borderTopColor: index === 0 ? Colors.lime : Colors.darkGray},
          {borderBottomWidth: index === PLAYERS.length - 1 ? 4 : 2},
          {borderBottomColor: index === PLAYERS.length - 1 ? Colors.lime : Colors.darkGray},
        ]}>
          <Text style={styles.playerText}>{playerItem.name} </Text>
          <Image
            style={styles.playerImage}
            source={playerItem.image}
          />
        </View>
      </Pressable>
      </View>
    </>
{/*       <Pressable onPress={() => onSelectedPlayerHandler(playerItem.id)}>
        <Text style={styles.playerText}>{playerItem.name}</Text>
      </Pressable> */}
    </>
  }

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <Text style={styles.titleText}>{teamName}</Text>
{/*         <FlatList
          data={PLAYERS}
          keyExtractor={(item) => item.id}
          renderItem={renderPlayers}
        /> */}
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
