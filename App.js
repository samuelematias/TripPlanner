import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen';
import TripDetailScreen from './src/screens/TripDetailScreen';
import AddTripScreen from './src/screens/AddTripScreen';
import AddPointScreen from './src/screens/AddPointScreen';

const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Trips: TripsScreen,
		TripDetail: TripDetailScreen,
		AddTrip: AddTripScreen,
		AddPoint: AddPointScreen
	},
	{ initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
