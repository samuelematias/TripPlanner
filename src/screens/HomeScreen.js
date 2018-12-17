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

import { isIphoneX } from '../utils';
class HomeScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			show: false
		};
	}

	/**
	 * Handle to show the button Começar to Vamos planejar suas viagens ?
	 * @author samuelmataraso
	 * @method _handleShowButton
	 * @param none
	 * @returns state
	 */
	_handleShowButton = () => {
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
					<TouchableWithoutFeedback onPress={() => this._handleShowButton()}>
						<View
							style={[
								styles.buttonBackground,
								isIphoneX() ? { paddingBottom: 32 } : null
							]}
						>
							<Text style={styles.buttonText}>{'Começar'}</Text>
						</View>
					</TouchableWithoutFeedback>
				) : (
					<TouchableWithoutFeedback
						onPress={() => this.props.navigation.navigate('Trips')}
					>
						<View
							style={[
								styles.buttonEmptyStateBackground,
								isIphoneX() ? { marginBottom: 16 } : null
							]}
						>
							<Image source={assets.iconPinSolo} style={styles.iconPin} />
							<Text style={styles.buttonEmptyStateText}>
								{'Vamos planejar suas viagens ?'}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				)}
			</ImageBackground>
		);
	}
}

export default HomeScreen;
