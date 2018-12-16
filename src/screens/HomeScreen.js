import React, { Component } from 'react';
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableWithoutFeedback
} from 'react-native';

import styles from './styles/HomeScreenStyles';

import { assets } from '../themes';

class HomeScreen extends Component {
	state = {
		counter: 0
	};
	_handleCounter = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	};
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
				<TouchableWithoutFeedback onPress={() => this._handleCounter()}>
					<View style={styles.buttonBackground}>
						<Text style={styles.buttonText}>
							{'COMEÇAR! ' + this.state.counter}
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</ImageBackground>
		);
	}
}

export default HomeScreen;
