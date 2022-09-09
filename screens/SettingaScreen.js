import {View, Pressable,Image, Text, StyleSheet } from 'react-native'
import Colors from '../utilities/constants/colors';

import ScreenTemplate from './ScreenTemplate'
import Header from '../components/ui/Header'

import EasternIcon from '../assets/images/nhl-eastern-conference.svg';
import WesternIcon from '../assets/images/nhl-western-conference.svg';



const SettingsScreen = ({route, navigation}) => {

  const handleConferenceClick = (teams, selectedConference) => {
    navigation.navigate(teams , {conference: selectedConference})
  }
  return (
    <ScreenTemplate>
      <View style={styles.screen}>
          <Text>Settings</Text>

      </View>
    </ScreenTemplate>
  )
}

export default SettingsScreen

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
