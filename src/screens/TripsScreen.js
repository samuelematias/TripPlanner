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

import { isIphoneX, RandomColor } from '../utils';

import MapView from 'react-native-maps';
class TripsScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			trips: [],
			color: ''
		};
	}

	componentDidMount() {
		this.setState({
			color: RandomColor().toLowerCase()
		});
		this.loadData();
	}

	/**
	 * Load the data of phoneStorage to be used.
	 * @author samuelmataraso
	 * @method loadData
	 * @param none
	 * @returns state
	 */
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

	/**
	 * Handle each one item of flatlist.
	 * When scrolled the item, the map will be changing to the current lat/lon of the item.
	 * @author samuelmataraso
	 * @method _handleItemChange
	 * @param object info
	 * @returns object
	 */
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

	/**
	 * Calculates the lat/lon/distance to be used on _handleItemChange function.
	 * @author samuelmataraso
	 * @method regionFrom
	 * @param float lat
	 * @param float lon
	 * @param float distance
	 * @returns object
	 */
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

	/**
	 * Handle to get the titleInitials to the avatar initials
	 * @author samuelmataraso
	 * @method _handleTitleInitials
	 * @param string title
	 * @returns string
	 */
	_handleTitleInitials = title => {
		let splitTitle = title.split(' ');
		let titleInitials;
		if (splitTitle.length > 1) {
			titleInitials =
				splitTitle[0].substring(0, 1) + splitTitle[1].substring(0, 1);
		} else {
			titleInitials =
				title.length > 1 ? title.substring(0, 2) : title.substring(0, 1);
		}
		return titleInitials.toUpperCase();
	};

	/**
	 * Render each one item of flatlist
	 * @author samuelmataraso
	 * @method _renderItem
	 * @param array item
	 * @returns func
	 */
	_renderItem = item => {
		return (
			<Trip
				title={item.item.trip}
				price={item.item.price}
				onPress={() => {
					this.props.navigation.navigate('TripDetail', {
						id: item.item.id,
						refresh: this.loadData,
						color: this.state.color.includes('fff')
							? '#944dff'
							: this.state.color,
						titleInitials: this._handleTitleInitials(item.item.trip)
					});
				}}
				color={this.state.color.includes('fff') ? '#944dff' : this.state.color}
				titleInitials={this._handleTitleInitials(item.item.trip)}
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
					<View
						style={[styles.buttonBack, isIphoneX() ? { paddingTop: 16 } : null]}
					>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.goBack();
							}}
						>
							<Image source={assets.iconChevronLeft} />
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						onPress={() =>
							this.props.navigation.navigate('AddTrip', {
								refresh: this.loadData
							})
						}
						style={styles.buttonPlus}
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
						keyExtractor={item => item.id.toString()}
						style={[isIphoneX() ? { marginBottom: 20 } : null]}
						onViewableItemsChanged={this._handleItemChange}
					/>
				</View>
			</View>
		);
	}
}

export default TripsScreen;
