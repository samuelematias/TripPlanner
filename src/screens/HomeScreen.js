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
		show: true
	};
	_handleCounter = () => {
		this.setState({
			show: !this.state.show
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
				{!this.state.show ? (
					<TouchableWithoutFeedback onPress={() => this._handleCounter()}>
						<View style={styles.buttonBackground}>
							<Text style={styles.buttonText}>{'COMEÇAR!'}</Text>
						</View>
					</TouchableWithoutFeedback>
				) : (
					<TouchableWithoutFeedback onPress={() => this._handleCounter()}>
						<View style={styles.buttonEmptyStateBackground}>
							<Image source={assets.iconPin} style={styles.iconPin} />
							<Text style={styles.buttonEmptyStateText}>
								{'Vamos planejar sua primeira viagem ?'}
							</Text>
							<Image source={assets.iconArrowRight} />
						</View>
					</TouchableWithoutFeedback>
				)}
			</ImageBackground>
		);
	}
}

export default HomeScreen;
