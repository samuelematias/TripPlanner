import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen';
import TripDetailScreen from './src/screens/TripDetailScreen';

const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Trips: TripsScreen,
		TripDetail: TripDetailScreen
	},
	{ initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
