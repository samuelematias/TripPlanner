import React, { Component } from 'react';
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableWithoutFeedback,
	AsyncStorage,
	Platform
} from 'react-native';

import styles from './styles/HomeScreenStyles';

import { assets } from '../themes';

import { isIphoneX } from '../utils';

import SplashScreen from 'react-native-splash-screen';
class HomeScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			trips: [],
			check: false
		};
	}

	componentDidMount() {
		if (Platform.OS !== 'ios') {
			SplashScreen.hide();
		}
		this.loadData();
	}

	/**
	 * Load the data of phoneStorage to be used.
	 * @author samuelmataraso
	 * @method loadData
	 * @param none
	 * @returns state
	 */
	loadData = async () => {
		const tripsAS = await AsyncStorage.getItem('trips');
		let trips = [];
		if (tripsAS) {
			trips = JSON.parse(tripsAS);
		}
		this.setState({
			trips,
			check: true
		});
	};

	render() {
		const { trips, check } = this.state;
		return (
			<ImageBackground
				source={assets.imgBackground}
				imageStyle={{ resizeMode: 'stretch' }}
				style={styles.containerBackground}
			>
				<View style={styles.wrapperLogoTripPlanner}>
					<Image source={assets.lgTripPlanner} />
				</View>
				<View style={styles.wrapperLogoDevPleno}>
					<Image source={assets.lgDevPleno} />
				</View>
				<TouchableWithoutFeedback
					onPress={() =>
						this.props.navigation.navigate('modal', {
							trips,
							check,
							refresh: this.loadData
						})
					}
				>
					<View
						style={[
							styles.buttonBackground,
							isIphoneX() ? { paddingBottom: 32 } : null
						]}
					>
						<Text style={styles.buttonText}>{'Começar'}</Text>
					</View>
				</TouchableWithoutFeedback>
			</ImageBackground>
		);
	}
}

export default HomeScreen;
