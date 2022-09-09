import {View, Pressable,Image, Text, StyleSheet, FlatList } from 'react-native'
import Colors from '../utilities/constants/colors';
import { useEffect, useContext, useState } from 'react'
import ScreenTemplate from './ScreenTemplate'
import Header from '../components/ui/Header'
import { PLAYERS } from '../data/PlayersData'
import EasternIcon from '../assets/images/nhl-eastern-conference.svg';
import WesternIcon from '../assets/images/nhl-western-conference.svg';
import { ApplicationContext } from '../store/context/application-context';



const VisitedPlayersScreen = ({route, navigation}) => {
  const context = useContext(ApplicationContext);
  const visitedPlayerIds = context.vistedList
/*   const visitedPlayerIds = context.visitedList */
  const [visitedPlayers, setVisitedPlayers] = useState([])


const getPlayers = () => {
  let players = [];
  visitedPlayerIds.forEach(id => {
    PLAYERS.forEach(player => {
      if (player.id === id) {
        players.push(player)
      }
    });
  });
  setVisitedPlayers(players)
}


useEffect(() => {
  getPlayers()
},[visitedPlayerIds])
/* console.log("muu", fav) */

/*   const handleConferenceClick = (teams, selectedConference) => {
    navigation.navigate(teams , {conference: selectedConference})
  } */
  return (
    <ScreenTemplate>
      <View style={styles.screen}>
          <Text>Favourite</Text>
          <FlatList
          data={visitedPlayers}
          keyExtractor={(item => item.id)}
          numColumns={1}
          renderItem={({item, index}) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
          />

      </View>
    </ScreenTemplate>
  )
}

export default VisitedPlayersScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    /* justifyContent: 'center', */
    marginTop: '25%',
    alignItems: 'center',
    /* backgroundColor: 'green' */
  },
  titleText: {
    color: Colors.secondaryText,
    fontSize: 35,
    fontWeight: 'bold',
  },
  imageContainerEast: {
    borderWidth: 4,
    borderColor: Colors.eastRed,
    marginVertical: 10,
  },
  imageContainerWest: {
    borderWidth: 4,
    borderColor: Colors.westBlue,
    marginVertical: 10,
  },
})
