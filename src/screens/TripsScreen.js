import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles/TripsScreenStyles';

import { assets } from '../themes';

import { Trip } from '../components';

import isIphoneX from '../utils/IsIphoneX';

class TripsScreen extends Component {
	static navigationOptions = {
		header: null
	};

	_keyExtractor = item => item.id;

	_renderItem = item => {
		return (
			<Trip
				title={item.item.title}
				price={item.item.price}
				onPress={() => this.props.navigation.navigate('TripDetail')}
			/>
		);
	};
	render() {
		const trips = [
			{ id: '1', title: 'Eurotrip 2019', price: 'R$ 5000' },
			{ id: '2', title: 'Expedição Atacama', price: 'R$ 3000' }
		];
		return (
			<View style={styles.container}>
				<View style={styles.wrapperMapa}>
					<Text>{'Mapa'} </Text>
				</View>
				<View style={styles.wrapperList}>
					<FlatList
						data={trips}
						renderItem={this._renderItem}
						horizontal
						pagingEnabled
						keyExtractor={this._keyExtractor}
						style={[isIphoneX() ? { marginBottom: 20 } : null]}
					/>
				</View>
			</View>
		);
	}
}

export default TripsScreen;
