import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { width } from './src/UtilMethods/Utils';

import onBoard from './src/screens/OnBoard';
import Home from './src/screens/tabs/Home';
import Swap from './src/screens/tabs/Swap';
import Setting from './src/screens/tabs/Setting';
import AddCash from './src/screens/AddCash';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./src/assets/images/home-512.png')}
                       style={{width: width('10'), height: width('10'), tintColor: tintColor}} />
            )
        },
    },
    Swap: {
        screen: Swap,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./src/assets/images/swap.png')}
                       style={{width: width('10'), height: width('10'), tintColor: tintColor}} />
            )
        },
    },
    Settings: {
        screen: Setting,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./src/assets/images/Setting-512.png')}
                       style={{width: width('10'), height: width('10'), tintColor: tintColor}} />
            )
        },
    }
}, {
    tabBarOptions: {
        showLabel: false
    }
});

const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: onBoard,
    },
    AddCash: {
        screen: AddCash,
    },
    TabNavigator: {
        screen: TabNavigator,
    },
}, {
    headerMode: 'none',
});

export default createAppContainer(AppNavigator);
