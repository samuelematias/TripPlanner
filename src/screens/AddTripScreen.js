import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	TextInput,
	Text,
	AsyncStorage
} from 'react-native';

import styles from './styles/AddTripScreenStyles';

class AddTripScreen extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		trip: ''
	};

	_handleSave = async () => {
		const trip = {
			id: new Date().getTime(),
			trip: this.state.trip,
			price: 0,
			latitude: 0,
			longitude: 0
		};
		const tripsAS = await AsyncStorage.getItem('trips');
		let trips = [];
		if (tripsAS) {
			//falsy (null, undefined, 0) - truthy !(null, undefined, 0)
			trips = JSON.parse(tripsAS);
		}
		trips.push(trip);
		await AsyncStorage.setItem('trips', JSON.stringify(trips));
		// this.props.navigation.navigate('AddPoint', {
		// 	id: trip.id
		// });
		this.props.navigation.state.params.refresh();
		this.props.navigation.goBack();
	};

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.wrapperInput}>
					<View>
						<TextInput
							style={styles.input}
							placeholder={'Nome da viagem'}
							onChangeText={txt =>
								this.setState({
									trip: txt
								})
							}
						/>
						<TouchableOpacity
							onPress={() => {
								this._handleSave();
							}}
							style={styles.button}
						>
							<Text>{'Salvar viagem'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default AddTripScreen;
