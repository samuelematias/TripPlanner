import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import styles from './styles/TripDetailScreenStyles';

import { assets } from '../themes';

import isIphoneX from '../utils/IsIphoneX';

class TripDetailScreen extends Component {
	static navigationOptions = {
		header: null
	};

	_keyExtractor = item => item.id;

	_renderItem = item => {
		return (
			<View style={styles.item}>
				<View style={styles.wrapperInfo}>
					<Text style={styles.itemName}>{item.item.name}</Text>
					<Text>{item.item.description}</Text>
				</View>
				<View style={styles.wrapperItemPrice}>
					<Text style={styles.itemPrice}>{item.item.price}</Text>
				</View>
			</View>
		);
	};
	render() {
		const trip = {
			id: '1',
			title: 'Eurotrip: 2019',
			price: 'R$ 5000',
			places: [
				{
					id: '1',
					name: 'Amsterdan',
					description: 'Chegada',
					price: 100,
					lat: 0,
					long: 0
				},
				{
					id: '2',
					name: 'Bruxelas',
					description: 'Hospedagem',
					price: 750,
					lat: 0,
					long: 0
				},
				{
					id: '3',
					name: 'Amsterdan',
					description: 'Chegada',
					price: 100,
					lat: 0,
					long: 0
				},
				{
					id: '4',
					name: 'Bruxelas',
					description: 'Hospedagem',
					price: 750,
					lat: 0,
					long: 0
				},
				{
					id: '5',
					name: 'Amsterdan',
					description: 'Chegada',
					price: 100,
					lat: 0,
					long: 0
				},
				{
					id: '6',
					name: 'Bruxelas',
					description: 'Hospedagem',
					price: 750,
					lat: 0,
					long: 0
				},
				{
					id: '7',
					name: 'Amsterdan',
					description: 'Chegada',
					price: 100,
					lat: 0,
					long: 0
				},
				{
					id: '8',
					name: 'Bruxelas',
					description: 'Hospedagem',
					price: 750,
					lat: 0,
					long: 0
				}
			]
		};
		return (
			<View style={styles.wrapper}>
				<View style={styles.header}>
					<View
						style={[styles.backButton, isIphoneX() ? { paddingTop: 16 } : null]}
					>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Image source={assets.iconChevronLeft} />
						</TouchableOpacity>
					</View>
					<Text style={styles.tripName}>{trip.title}</Text>
					<Text style={styles.tripPrice}>{trip.price}</Text>
				</View>
				<FlatList
					style={styles.list}
					contentContainerStyle={styles.containerList}
					data={trip.places}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		);
	}
}

export default TripDetailScreen;
