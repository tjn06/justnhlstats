import { View, ScrollView, Pressable, Image, Text, StyleSheet } from 'react-native'
import { useState, useEffect, useContext } from 'react'
import Colors from '../utilities/constants/colors';
import { ApplicationContext } from '../store/context/application-context';
import ScreenTemplate from './ScreenTemplate'
import Header from '../components/ui/Header'
// import EasternIcon from '../assets/images/nhl-eastern-conference.svg';
// import WesternIcon from '../assets/images/nhl-western-conference.svg';
import { getConferences, getAllTeams } from '../utilities/http';
import { useCustomScreenOrientation } from '../hooks/useCustomOrientation';
import { useWindowDimensions } from 'react-native';

const StartScreen = ({ route, navigation }) => {
  const context = useContext(ApplicationContext);
  const [conferences, setConferences] = useState(null)
  const [orientation, orientationEnum] = useCustomScreenOrientation()
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();

  const handleConferenceClick = (teams, selectedConference) => {
    navigation.navigate(teams, { conference: selectedConference })
  }

  useEffect(() => {
    (async () => {
      const conferencesResponse = await getConferences()
      // console.log("conferencesResponse", conferencesResponse)
      setConferences(conferencesResponse)
      const teamsResponse = await getAllTeams()
      // console.log("teamsResponse", teamsResponse)
      context.addT(teamsResponse);
    })();
  }, [])

  return (
    <ScreenTemplate>
      <View style={styles.screen}>
        <Header />
        <View style={[
          styles.mainContent,
          {
            flexDirection: orientation === "portrait" ? 'column' : 'row',
            justifyContent: orientation === "portrait" ? 'center' : 'center',
          }
        ]}>
          {conferences && conferences.map((conference) => {
            return (
              <Pressable key={conference.name} onPress={() => handleConferenceClick('Teams', conference.name)}>
                <Image
                  source={
                    conference.name === "Eastern" ?
                    require('../assets/images/Eastern.png') :
                    require('../assets/images/Western.png')
                  }
                  style={[
                    styles.imageContainerWest,
                    {
                      marginVertical: orientation === "portrait" ? screenWidth * 0.05 : 0,
                      marginHorizontal: orientation === "portrait" ? 0 : screenWidth * 0.05,
                    }
                  ]}
                />
              </Pressable>
            )
          })}
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
    alignItems: 'center',
  },
  titleText: {
    color: Colors.secondaryText,
    fontSize: 35,
    fontWeight: 'bold',
  },
  imageContainerWest: {
    width: 190,
    height: 140,
  },
})
