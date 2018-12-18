import React, { Component } from 'react';
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableWithoutFeedback,
	Button
} from 'react-native';

import styles from './styles/HomeScreenStyles';

import { assets } from '../themes';

import { isIphoneX } from '../utils';

import RNGooglePlaces from 'react-native-google-places';

class HomeScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	openSearchModal() {
		RNGooglePlaces.openAutocompleteModal()
			.then(place => {
				console.log(place);
			})
			.catch(error => console.log(error.message));
	}

	render() {
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
					onPress={() => this.props.navigation.navigate('modal')}
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
