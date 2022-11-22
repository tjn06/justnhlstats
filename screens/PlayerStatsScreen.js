import {View, Pressable, Text, StyleSheet, Image, FlatList, ImageBackground } from 'react-native'
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useLayoutEffect, useContext, useState, useEffect } from 'react'
import { ApplicationContext } from '../store/context/application-context';
import IconButton from '../components/ui/IconButton'
import { useWindowDimensions } from 'react-native';
import { useCustomScreenOrientation } from '../hooks/useCustomOrientation';
import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate'
import { PLAYERS } from '../data/PlayersData'
import { TEAMS } from '../data/TeamsData'

const PlayerStatsScreen = ({route, navigation}) => {
  const playerId = route.params.playerId
  const navTitle = route.name
  const context = useContext(ApplicationContext);
  const [ favOrNot , setFavOrNot ] = useState('')
  const [ visitedOrNot, setVisitedOrNot ] = useState('')
  let favouriteListFromContext = context.favouriteList
  let visitedPlayersFromContext = context.vistedList
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const [orientation, orientationEnum] = useCustomScreenOrientation()

  const findTeamImage = (playerTeamName) => {
    return TEAMS.find(team => team.name === playerTeamName).image
  }

  const selectedPlayer = PLAYERS.find(player => {
    let sumPoints;
    if (player.id === playerId) {
      let teamImage = findTeamImage(player.team)
      player.teamImage = teamImage
      sumPoints = player.assists + player.goals
      player.points = sumPoints;
      return player
    }
  })

  const onFavouritePressedHandler = () => {
    setFavOrNot(true)
    context.add(selectedPlayer.id);
  };

  useEffect(() => {
    let alrearyFavourite = favouriteListFromContext.some(favId => favId === selectedPlayer.id )
    setFavOrNot(alrearyFavourite)

    let alreadyVisited = visitedPlayersFromContext.some(favId => favId === selectedPlayer.id )
    if (!alreadyVisited) {
      context.addV(selectedPlayer.id)
    }
  }, [visitedPlayersFromContext])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return favOrNot ? null : <IconButton onPressed={onFavouritePressedHandler} />;
      },
      title: navTitle
    });
  },[navigation, navTitle, favOrNot])

  return (
    <ScreenTemplate>
      <View style={[styles.screen,
        {
          flexDirection: orientation === "portrait" ? 'column' : 'row',
        }
      ]}>
        <View style={[styles.headerContainer,
          {
            height: orientation === "portrait" ? screenHeight * 0.5 : "100%",
            width: orientation === "portrait" ? "100%" : screenWidth * 0.55
          }
        ]}>
          <ImageBackground
            source={selectedPlayer.image}
            resizeMode= 'cover'
            style={styles.screen}
            imageStyle={styles.backgroundImage}
          >

          <LinearGradient
            style={styles.screen}
            // locations={[0, 0.5, 1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            locations={[0.0, 0.5, 1]}
            start={
              {
                x: orientation === 'portrait' ? 1 : 0,
                y: 0
              }
            }
            end={
              {
                x: 1,
                y: orientation === 'portrait' ? 1 : 0,
              }
            }
            colors={['rgba(255, 255, 255, 0.00)', 'rgba(255, 255, 255, 0.00)','#464354']}
          >
              <View style={styles.headerContent}>
                <View>
                  <View style={styles.titleNameContainer}>
                    <Text style={[styles.titleText,
                      {
                        fontSize: orientation === 'portrait' ? 35 : 29,
                      }
                    ]}>
                      {selectedPlayer.name}
                      </Text>
                  </View>
                  <Image style={styles.teamImage} source={selectedPlayer.teamImage}/>
                </View>
                <View style={[styles.shirtAndPositionContainer,
                {
                  flexDirection: orientation === 'portrait' ? 'row': 'row',
                  justifyContent: orientation === 'portrait' ? 'space-between' : 'flex-start',
                }
                ]}>
                  <Text style={[styles.shirtText, { marginRight: orientation === 'portrait' ? 0: screenWidth * 0.2}]}>#{selectedPlayer.nr}</Text>
                  <Text style={styles.shirtText}>{selectedPlayer.position}</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={[styles.floatContainer,
          {
            flexDirection: orientation === "portrait" ? 'row' : 'column',
            justifyContent: 'space-between',
            marginTop: orientation === "portrait" ? -40 : 10,
            marginLeft: orientation === "portrait" ? 10 : -50,
            marginRight: orientation === "portrait" ? 10 : 10,
            marginBottom: orientation === "portrait" ? 0 : 10,
          }
        ]}>
          <View style={styles.floatItem}>
            <Text style={styles.floatItemHeader}>Games</Text>
            <Text style={styles.floatitemStats} >{selectedPlayer.games}</Text>
          </View>
          <View style={styles.floatItem}>
            <Text style={styles.floatItemHeader}>Goals</Text>
            <Text style={styles.floatitemStats} >{selectedPlayer.goals}</Text>
          </View>
          <View style={styles.floatItem}>
            <Text style={styles.floatItemHeader}>Assists</Text>
            <Text style={styles.floatitemStats} >{selectedPlayer.assists}</Text>
          </View>
        </View>

        <ImageBackground
            source={require('../assets/images/pointsbg.jpg')}
            resizeMode= 'cover'
            style={styles.pointsContainer}
            imageStyle={styles.backgroundImagePoints}
          >
          <View>
            <Text style={{color: Colors.lime, textAlign: 'center'}}>TOTAL POINTS</Text>
            <Text style={[styles.pointsText,
              {
                fontSize: orientation === 'portrait' ? screenWidth * 0.3 : screenHeight * 0.3
              }
            ]}>{selectedPlayer.points}</Text>
          </View>
        </ImageBackground>

      </View>
    </ScreenTemplate>
  )
}

export default PlayerStatsScreen

const styles = StyleSheet.create({
  shirtAndPositionContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  titleNameContainer: {
    backgroundColor: 'rgba(41, 38, 61, 0.6)',
    padding: 10,
   /*  borderBottomWidth: 0, */
    // borderWidth: 5,
    borderColor: Colors.lime,
    alignSelf: 'flex-start',
    borderRadius: 0,
  },
  screen: {
    flex: 1,
  },
  headerContainer: {
    height: 350,
    width: "100%"
  },
  headerContent: {
    flex: 1,
    padding: 10,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    opacity: 0.5,
  },
  backgroundImagePoints: {
    opacity: 0.4,
  },
  teamImage: {
    marginTop: "2%",
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  floatContainer: {
    margin: 10,
  },
  floatItem: {
    justifyContent: 'space-between',
    backgroundColor: Colors.lime,
    width: 100,
    height: 80,
    borderRadius: 0,
  },
  floatItemHeader: {
    textAlign: 'left',
    padding: 5,
  },
  floatitemStats: {
    textAlign: 'right',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 25
  },
  pointsContainer: {
    flex: 1,
    borderWidth: 6,
    // borderBottomEndRadius: 20,
    // borderBottomLeftRadius: 20,
    borderColor: Colors.lime,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(41, 38, 61, 0.6)',
  },
  pointsText: {
    color: Colors.lightText,
    fontWeight: 'bold'
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    /* backgroundColor: 'green' */
  },
  titleText: {
    color: Colors.lime,
    fontWeight: 'bold',
    /* padding: 10, */
  },
  shirtText: {
    color: Colors.lightText,
    fontSize: 60,
    fontWeight: 'bold',
    /* padding: 10, */
  },
  statsText: {
    color: Colors.lightText,
    fontSize: 22,
    fontWeight: 'bold',
  },
})
