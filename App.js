import React, { Component } from 'react';
import HomeScreen from './app/screens/HomeScreen';
import PlayButtonsScreen from './app/screens/PlayButtonsScreen';
import EditButtonsScreen from './app/screens/EditButtonsScreen';
import EditButtonScreen from './app/screens/EditButtonScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import { createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './app/screens/LoginScreen';
import ButtonLogout from './app/components/ButtonLogout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  PlayButtons: { screen: PlayButtonsScreen },
  EditButtons: { screen: EditButtonsScreen },
  EditButton: { screen: EditButtonScreen },
}, {
  initialRouteName: 'Home',
  navigationOptions: ({
    tabBarIcon: ({ tintColor }) => (
      <AntDesign name='pluscircleo'
        size={25}
        color={tintColor} />
    )
  }),
  defaultNavigationOptions: ({
    headerTitle: 'BOTONERA',
    headerRight: () => <ButtonLogout></ButtonLogout>,
    headerStyle: {
      backgroundColor: '#00BFFF',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Lato_black',
    },
    headerTitleAlign: 'center' // default is 'left'
  }),
}
)

const TabNavigator = createBottomTabNavigator({
  Home: RootStack,
  Settings: SettingsScreen
}, {
  tabBarOptions: {
    activeTintColor: '#FFFF00',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
      tabBarPosition: 'bottom',
      animationEnabled: true,
    },
  }
});

const RootSwitch = createSwitchNavigator({
  Main: { screen: TabNavigator },
  Login: { screen: LoginScreen },
}, {
  initialRouteName: 'Main',
});

class App extends Component {
  render() {
    return (
      <RootSwitch />

    );
  }
}

export default createAppContainer(RootSwitch);
