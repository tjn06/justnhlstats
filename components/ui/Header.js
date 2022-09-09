import { Text, View, StyleSheet } from 'react-native'
import Colors from '../../utilities/constants/colors'

const Header = ({children}) => {

    return (
    <View style={styles.headerContainer}>
        <Text style={[styles.headerText, {color: Colors.lime}]}>JUST</Text>
        <Text style={[styles.headerText, {color: '#ffffff'}]}>NHL</Text>
        <Text style={[styles.headerText, {color: Colors.gray}]}>STATS</Text>
    </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    headerText: {
        color: Colors.headerTextColor,
        fontWeight: 'bold',
        fontSize: 30,

    },
})
