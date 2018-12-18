import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen';
import TripDetailScreen from './src/screens/TripDetailScreen';
import AddTripScreen from './src/screens/AddTripScreen';
import AddPointScreen from './src/screens/AddPointScreen';
import ModalScreen from './src/screens/ModalScreen';

const contentNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Trips: TripsScreen,
		TripDetail: TripDetailScreen,
		AddTrip: AddTripScreen,
		AddPoint: AddPointScreen
	},
	{ initialRouteName: 'Home' }
);

export const AppNavigator = createStackNavigator(
	{
		content: contentNavigator,
		modal: { screen: ModalScreen }
	},
	{
		headerMode: 'none',
		mode: 'modal',
		initialRouteName: 'content',
		animationEnabled: false,
		swipeEnabled: false,
		transparentCard: true,
		transitionConfig: () => ({
			transitionSpec: {
				duration: 750,
				easing: Easing.out(Easing.poly(4)),
				timing: Animated.timing,
				useNativeDriver: true
			},
			screenInterpolator: sceneProps => {
				const { layout, position, scene } = sceneProps;
				const thisSceneIndex = scene.index;

				const height = layout.initHeight;
				const translateY = position.interpolate({
					inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
					outputRange: [height, 0, 0]
				});

				const opacity = position.interpolate({
					inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
					outputRange: [1, 1, 0.5]
				});

				return { opacity, transform: [{ translateY }] };
			}
		})
	}
);

export default createAppContainer(AppNavigator);
