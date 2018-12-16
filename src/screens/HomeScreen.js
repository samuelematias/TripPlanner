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

import isIphoneX from '../utils/IsIphoneX';
class HomeScreen extends Component {
	static navigationOptions = {
		header: null
	};
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
						<View
							style={[
								styles.buttonBackground,
								isIphoneX() ? { paddingBottom: 32 } : null
							]}
						>
							<Text style={styles.buttonText}>{'COMEÇAR!'}</Text>
						</View>
					</TouchableWithoutFeedback>
				) : (
					<TouchableWithoutFeedback
						onPress={() => this.props.navigation.navigate('Trips')}
					>
						<View style={styles.buttonEmptyStateBackground}>
							<Image source={assets.iconPin} style={styles.iconPin} />
							<Text style={styles.buttonEmptyStateText}>
								{'Vamos planejar sua primeira viagem ?'}
							</Text>
							<Image
								source={assets.iconArrowRight}
								style={isIphoneX() ? { marginBottom: 16 } : null}
							/>
						</View>
					</TouchableWithoutFeedback>
				)}
			</ImageBackground>
		);
	}
}

export default HomeScreen;
