import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	FlatList,
	Image,
	AsyncStorage
} from 'react-native';

import styles from './styles/TripsScreenStyles';

import { assets } from '../themes';

import { Trip } from '../components';

import isIphoneX from '../utils/IsIphoneX';

import MapView from 'react-native-maps';
class TripsScreen extends Component {
	static navigationOptions = {
		header: null
	};

	state = {
		trips: []
	};

	componentDidMount() {
		this.loadData();
	}

	loadData = async () => {
		const tripsAS = await AsyncStorage.getItem('trips');
		let trips = [];
		if (tripsAS) {
			trips = JSON.parse(tripsAS);
		}
		this.setState({
			trips
		});
	};

	_handleItemChange = info => {
		const { viewableItems } = info;
		if (viewableItems && viewableItems.length > 0) {
			const [item] = viewableItems;
			this.map.animateToRegion(
				this.regionFrom(item.item.latitude, item.item.longitude, 1000),
				2000
			);
		}
	};

	regionFrom = (lat, lon, distance) => {
		distance = distance / 2;
		const circumference = 40075;
		const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
		const angularDistance = distance / circumference;

		const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
		const longitudeDelta = Math.abs(
			Math.atan2(
				Math.sin(angularDistance) * Math.cos(lat),
				Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
			)
		);

		return (result = {
			latitude: lat,
			longitude: lon,
			latitudeDelta,
			longitudeDelta
		});
	};

	_keyExtractor = item => item.id.toString();

	_renderItem = item => {
		return (
			<Trip
				title={item.item.trip}
				price={item.item.price}
				onPress={() => {
					this.props.navigation.navigate('TripDetail', {
						id: item.item.id,
						refresh: this.loadData
					});
				}}
			/>
		);
	};
	render() {
		const { trips } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.wrapperMapa}>
					<MapView
						style={{ flex: 1 }}
						initialRegion={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421
						}}
						ref={ref => (this.map = ref)}
					/>
					<TouchableOpacity
						onPress={() =>
							this.props.navigation.navigate('AddTrip', {
								refresh: this.loadData
							})
						}
						style={{
							position: 'absolute',
							bottom: 0,
							right: 20,
							padding: 10
						}}
					>
						<Image source={assets.iconPlus} />
					</TouchableOpacity>
				</View>
				<View style={styles.wrapperList}>
					<FlatList
						data={trips}
						renderItem={this._renderItem}
						horizontal
						pagingEnabled
						keyExtractor={this._keyExtractor}
						style={[isIphoneX() ? { marginBottom: 20 } : null]}
						onViewableItemsChanged={this._handleItemChange}
					/>
				</View>
			</View>
		);
	}
}

export default TripsScreen;
