
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from './utilities/constants/colors'
import ApplicationContextProvider from './store/context/application-context';
import StartScreen from './screens/StartScreen'
import TeamsScreen from './screens/TeamsScreen'
import PlayersScreen from './screens/PlayersScreen';
import PlayerStatsScreen from './screens/PlayerStatsScreen';
import { Ionicons } from '@expo/vector-icons'
import FavouriteScreen from './screens/FavouritesScreen';
import VisitedPlayersScreen from './screens/VisitedPlayersScreen';
import SettingsScreen from './screens/SettingaScreen';
import UserScreen from './screens/UserScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return <Drawer.Navigator useLegacyImplementation={true}
    screenOptions={{
      drawerActiveBackgroundColor: Colors.darkBgBlue,
      drawerInactiveBackgroundColor: Colors.lightBgBlue,
      drawerTintColor: Colors.lightText,
      drawerActiveTintColor: Colors.lime,
      drawerInactiveTintColor: Colors.lightText,
      drawerStyle: { backgroundColor: Colors.lime},
      headerStyle: { backgroundColor: Colors.darkBgBlue},
      headerTintColor: Colors.lightText,
    }}>
      <Drawer.Screen
        name='Stats'
        component={StartScreen}
        options={{
          /* headerStyle: { backgroundColor: 'green'}, */
          /* headerTintColor: '#99d0f6', */
          drawerLabel: 'Home',
          drawerIcon: (color, size) => (
            <Ionicons name='stats-chart' size={20} color={Colors.lime} />
          ),
        }}
      />
      <Drawer.Screen
        name='User'
        component={UserScreen}
        options={{
          /* headerStyle: { backgroundColor: 'green'}, */
          /* headerTintColor: '#99d0f6', */
          drawerLabel: 'User/Camera',
          drawerIcon: (color, size) => (
            <Ionicons name='person' size={20} color={Colors.lime} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favourites'
        component={FavouriteScreen}
        options={{
          /* headerStyle: { backgroundColor: 'green'}, */
          /* headerTintColor: '#99d0f6', */
          drawerLabel: 'Favourites',
          drawerIcon: (color, size) => (
            <Ionicons name='star' size={20} color={Colors.lime} />
          ),
        }}
      />
      <Drawer.Screen
        name='Visited'
        component={VisitedPlayersScreen}
        options={{
          /* headerStyle: { backgroundColor: 'green'}, */
          /* headerTintColor: '#99d0f6', */
          drawerLabel: 'Visited',
          drawerIcon: (color, size) => (
            <Ionicons name='checkmark' size={20} color={Colors.lime} />
          ),
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          /* headerStyle: { backgroundColor: 'green'}, */
          /* headerTintColor: '#99d0f6', */
          drawerLabel: 'Settings',
          drawerIcon: (color, size) => (
            <Ionicons name='settings' size={20} color={Colors.lime} />
          ),
        }}
      />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <ApplicationContextProvider>
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {backgroundColor: '#29263d'},
                headerTintColor: '#FFFFFF'
              }}
            >
              <Stack.Screen
                name='Tab'
                component={TabNavigator}
                options={{
                  headerShown: false,
                  title: 'Start'
                }}
              />
              <Stack.Screen
                name='Teams'
                component={TeamsScreen}
              />
              <Stack.Screen
                name='Players'
                component={PlayersScreen}
              />
              <Stack.Screen
                name='PlayerStats'
                component={PlayerStatsScreen}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </ApplicationContextProvider>
    </>
  );
}
