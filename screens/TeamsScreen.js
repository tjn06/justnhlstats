import {View, Pressable, Text, Image, StyleSheet, FlatList } from 'react-native'

import { useLayoutEffect } from 'react'

import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate'
import Header from '../components/ui/Header'
import { TEAMS } from '../data/TeamsData'
import EasternIcon from '../assets/images/nhl-eastern-conference.svg';
import WesternIcon from '../assets/images/nhl-western-conference.svg';

const TeamsScreen = ({route, navigation}) => {
  const conference = route.params.conference
  const conferenceTitle = route.params.conference + ' conference'
  const navTitle = route.name

  const selectedTeams = TEAMS.filter((team) => {
    return team.conference === conference
  })

  const onSelectedTeamHandler = (teamId, teamName) => {
    navigation.navigate('Players', { teamId: teamId, teamName: teamName });
  }

  useLayoutEffect(() => {
    navigation.setOptions({title: navTitle})
  },[navigation, conference])

  const RenderTeam = ({teamItem ,index}) => {
    return (
      <View style={styles.spaceMarginItem}>
        <Pressable onPress={() => onSelectedTeamHandler(teamItem.id, teamItem.name)}>
          <View
            style={[styles.teamItem,
            {borderTopWidth: index === 0 ? 4 : 0},
            {borderTopColor: index === 0 ? Colors.lime : Colors.lime},
            {borderBottomWidth: index === selectedTeams.length - 1 ? 4 : 2},
            {borderBottomColor: index === selectedTeams.length - 1 ? Colors.lime : Colors.darkGray}]}
          >
            <Text style={styles.teamsText}>{teamItem.name} </Text>
            <Image
              style={styles.teamImage}
              source={teamItem.image}
            />
          </View>
        </Pressable>
      </View>
    )
  }

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <Text style={styles.titleText}>{conferenceTitle}</Text>
         <FlatList
            data={selectedTeams}
            keyExtractor={(item) => item.id}
            numColumns={1}
            /* keyExtractor={(_, index) => index.toString()} */
            renderItem={({ item, index }) => {
              return (
                <RenderTeam teamItem={item} index={index} />
              );
            }}
          />
      </View>
    </ScreenTemplate>
  )
}

export default TeamsScreen

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
  teamsText: {
    color: Colors.lightText,
    fontSize: 22,
    fontWeight: 'bold',
  },
  teamImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  teamItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.darkGray,

  },

  spaceMarginItem: {
    margin: 7,
  }

})
