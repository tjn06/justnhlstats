import {View, ScrollView, Pressable, Image, Dimensions,Text, StyleSheet } from 'react-native'
import { useState, useEffect, useContext } from 'react'
import Colors from '../utilities/constants/colors';
import { ApplicationContext } from '../store/context/application-context';

import { useScreenOrientation } from '@use-expo/screen-orientation';

import ScreenTemplate from './ScreenTemplate'
import Header from '../components/ui/Header'

import EasternIcon from '../assets/images/nhl-eastern-conference.svg';
import WesternIcon from '../assets/images/nhl-western-conference.svg';

import { getConferences, getAllTeams } from '../utilities/http';


const {screenWidth, screenHeight} = Dimensions.get('window');

const StartScreen = ({route, navigation}) => {
  const context = useContext(ApplicationContext);
  const [orientation] = useScreenOrientation();
  const [conferences, setConferences] = useState(null)

  const handleConferenceClick = (teams, selectedConference) => {
    navigation.navigate(teams , {conference: selectedConference})
  }

  useEffect(() => {
    (async () => {
      const conferencesResponse = await getConferences()
      console.log("conferencesResponse", conferencesResponse)
      setConferences(conferencesResponse)


      const teamsResponse = await getAllTeams()
      console.log("teamsResponse", teamsResponse)
      context.addT(teamsResponse);
    })();
  },[])

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
      <Text>c{orientation?.orientation}</Text>
          <Header/>
          <View style={styles.mainContent}>
            <Pressable onPress={() => handleConferenceClick('Teams', conferences[1].name )}>
              <Image
                source={require('../assets/images/eastern.png')}
                style={styles.imageContainerWest}
              />
{/*               <EasternIcon
                  style={styles.imageContainerEast}
                  width={200}
                  height={200}
              /> */}
            </Pressable>

            <Pressable onPress={() => handleConferenceClick('Teams', conferences[1].name)}>
              <Image
                  source={require('../assets/images/western.png')}
                  style={styles.imageContainerWest}
                />
{/*               <WesternIcon
                style={styles.imageContainerWest}
                width={200}
                height={200}
              /> */}
            </Pressable>
          </View>
      </View>
    </ScreenTemplate>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    flexDirection: screenWidth > 500 ? 'column' : 'row' ,
    justifyContent: 'center',
    marginTop: screenWidth < 400 ? '15%' : 0,
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
    width: 190,
    height: 140,
/*     borderWidth: 4,
    borderColor: Colors.westBlue, */
    marginVertical: 30,
  },
})
