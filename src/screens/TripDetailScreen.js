import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	AsyncStorage
} from 'react-native';

import styles from './styles/TripDetailScreenStyles';

import { assets } from '../themes';

import { isIphoneX, MoneyFormat } from '../utils';

class TripDetailScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			trip: [],
			points: []
		};
	}

	componentDidMount() {
		this.loadData();
	}

	componentWillUnmount() {
		this.props.navigation.state.params.refresh();
	}

	/**
	 * Load the data of phoneStorage to be used.
	 * @author samuelmataraso
	 * @method loadData
	 * @param none
	 * @returns state
	 */
	loadData = async () => {
		const id = this.props.navigation.state.params.id;

		const tripsAS = await AsyncStorage.getItem('trips');
		let trips = [];
		if (tripsAS) {
			trips = JSON.parse(tripsAS);
		}

		const pointsAS = await AsyncStorage.getItem('trip-' + id);
		let points = [];
		if (pointsAS) {
			points = JSON.parse(pointsAS);
		}

		let trip = {
			trip: '',
			price: 0,
			latitude: null,
			longitude: null,
			created_at: null,
			updated_at: null
		};
		trips.forEach(t => {
			if (t.id === id) {
				(trip.trip = t.trip),
					(trip.price = t.price ? t.price : 0),
					(trip.latitude = t.latitude ? t.latitude : 37.78825),
					(trip.longitude = t.longitude ? t.longitude : -122.4324),
					(trip.created_at = t.created_at
						? t.created_at
						: new Date().getTime()),
					(trip.updated_at = t.updated_at
						? t.updated_at
						: new Date().getTime());
			}
		});

		this.setState({
			trip,
			points
		});
	};

	/**
	 * Render each one item of flatlist
	 * @author samuelmataraso
	 * @method _renderItem
	 * @param array item
	 * @returns func
	 */
	_renderItem = item => {
		const priceFormatted =
			item.item.price && item.item.price > 0
				? MoneyFormat(item.item.price.toFixed(2))
				: 'R$ ' + 0;
		return (
			<View style={styles.item}>
				<View style={styles.wrapperInfo}>
					<Text style={styles.itemName}>{item.item.pointName}</Text>
					<Text>{item.item.description}</Text>
				</View>
				<View style={styles.wrapperItemPrice}>
					<Text style={styles.itemPrice}>{priceFormatted}</Text>
				</View>
			</View>
		);
	};

	render() {
		const { points, trip } = this.state;
		const id = this.props.navigation.state.params.id;
		const priceFormatted =
			trip.price && trip.price > 0
				? MoneyFormat(trip.price.toFixed(2))
				: 'R$ ' + 0;
		return (
			<View style={styles.wrapper}>
				<View
					style={[
						styles.header,
						{ backgroundColor: this.props.navigation.state.params.color }
					]}
				>
					<View style={styles.wrapperTitleInitials}>
						<Text style={styles.titleInitials}>
							{this.props.navigation.state.params.titleInitials}
						</Text>
					</View>
					<View
						style={[styles.buttonBack, isIphoneX() ? { paddingTop: 16 } : null]}
					>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.state.params.refresh();
								this.props.navigation.goBack();
							}}
						>
							<Image source={assets.iconChevronLeft} />
						</TouchableOpacity>
					</View>
					<Text style={styles.tripNameTitle}>{'Viajando para:'}</Text>
					<Text style={styles.tripName}>{trip.trip}</Text>
					<Text style={styles.tripPriceTitle}>{'Custo total da viagem:'}</Text>
					<Text style={styles.tripPrice}>{priceFormatted}</Text>
					<TouchableOpacity
						onPress={() =>
							this.props.navigation.navigate('AddPoint', {
								id: id,
								refresh: this.loadData,
								trip: trip,
								latitude: trip.latitude,
								longitude: trip.longitude,
								color: this.props.navigation.state.params.color,
								titleInitials: this.props.navigation.state.params.titleInitials
							})
						}
						style={[styles.buttonPlus, isIphoneX() ? { paddingTop: 16 } : null]}
					>
						<Image source={assets.iconPlus} />
					</TouchableOpacity>
				</View>
				<FlatList
					style={styles.list}
					contentContainerStyle={styles.containerList}
					data={points}
					renderItem={this._renderItem}
					keyExtractor={item => item.id.toString()}
				/>
			</View>
		);
	}
}

export default TripDetailScreen;
