import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	ScrollView
} from 'react-native';

import styles from './styles/ModalScreenStyles';

import { assets } from '../themes';

import { DialogPopup } from '../components';

class ModalScreen extends Component {
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
	 * Render the DialogPopup on Modal
	 * @author samuelmataraso
	 * @method _renderDialogPopup
	 * @param none
	 * @returns func
	 */
	_renderDialogPopup = () => {
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const refresh = params.refresh;
		const noData =
			(!params.trips || params.trips.length === 0) && params.check
				? true
				: false;
		return (
			<View style={styles.wrapperPlanningTrip}>
				<Image source={assets.iconPinSolo} />
				<Text style={styles.planningText}>
					{'Vamos planejar suas viagens ?'}
				</Text>
				<View style={styles.wrapperOptions}>
					<View>
						<TouchableWithoutFeedback
							onPress={() =>
								noData
									? this.props.navigation.navigate('AddTrip', {
											refresh: refresh,
											noData: noData
									  })
									: this.props.navigation.navigate('Trips')
							}
						>
							<Text style={styles.buttonText}>{'Sim, Vamos lá !'}</Text>
						</TouchableWithoutFeedback>
					</View>
					<View style={{ paddingTop: 15 }}>
						<TouchableWithoutFeedback
							onPress={() => this.props.navigation.goBack()}
						>
							<Text style={styles.buttonText}>{'Agora não.'}</Text>
						</TouchableWithoutFeedback>
					</View>
				</View>
			</View>
		);
	};

	render() {
		return (
			<ScrollView style={styles.containerModal}>
				<View style={styles.wrapperDialog}>
					<DialogPopup
						renderDialogPopup={() => this._renderDialogPopup()}
						wrapperDialogPopup={{
							backgroundColor: 'rgba(97, 186, 207, 0.7)'
						}}
					/>
				</View>
			</ScrollView>
		);
	}
}

export default ModalScreen;
