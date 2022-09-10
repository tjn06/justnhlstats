import {View, Pressable,Image, Text, StyleSheet } from 'react-native'
import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate'
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = ({route, navigation}) => {
  return (
    <ScreenTemplate>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, {color: Colors.lime}]}>SETTINGS</Text>
        <Text style={styles.text}>NO SETTINGS YET</Text>
        <Ionicons name='settings' size={300} color={Colors.gray} />
      </View>
    </ScreenTemplate>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.lime.headerTextColor,
    fontWeight: 'bold',
    fontSize: 40,
  },
  text: {
    textAlign: 'center',
    color: Colors.gray,
    fontSize: 23,
    marginBottom: '20%'
  }
})
