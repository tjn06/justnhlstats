import { Text, View, StyleSheet } from 'react-native'
import Colors from '../../utilities/constants/colors'
import { useCustomScreenOrientation } from '../../hooks/useCustomOrientation';

const Header = ({children}) => {
    const [orientation, orientationEnum] = useCustomScreenOrientation()
    return (
        <>
        <View style={[
            styles.headerContainer,
             {marginTop: orientation === 'portrait' ? 50 : 0 }
            ]}>
        <Text style={[styles.headerText, {color: Colors.lime}]}>JUST</Text>
        <Text style={[styles.headerText, {color: '#ffffff'}]}>NHL</Text>
        <Text style={[styles.headerText, {color: Colors.gray}]}>STATS</Text>
        </View>
        <Text style={styles.text}>START BY CHOOSING A CONFERNCE</Text>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        color: Colors.headerTextColor,
        fontWeight: 'bold',
        fontSize: 40,
    },
    text: {
        textAlign: 'center',
        color: Colors.gray,
        fontSize:18,
    }
})
