import {View, Pressable,Image, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native'
import Colors from '../utilities/constants/colors';
import ScreenTemplate from './ScreenTemplate'
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = ({route, navigation}) => {
  const { styles } = dynamicStyles()
  const { width, height } = useWindowDimensions();

  return (
    <ScreenTemplate>
      <View style={styles.mainContainer}>
        <Text style={[styles.headerText, {color: Colors.lime}]}>SETTINGS</Text>
        <Text style={styles.subHeadertext}>NO SETTINGS YET</Text>
        <Ionicons name='settings' size={height < width ? 100 : 200} color={Colors.gray} />
      </View>
    </ScreenTemplate>
  )
}

export default SettingsScreen

const dynamicStyles = () => {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    mainContainer: {
      marginTop: height < width ? 10 : height * 0.1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      color: Colors.lime.headerTextColor,
      fontWeight: 'bold',
      fontSize: Platform.select({ ios: 50, android: 40 }),
    },
    subHeadertext: {
      textAlign: 'center',
      color: Colors.gray,
      fontSize: Platform.select({ ios: 23, android: 18 }),
      marginBottom: height * 0.1,
    }
  })
  return { styles }
}
