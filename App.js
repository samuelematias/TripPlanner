import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';

const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen
	},
	{ initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
