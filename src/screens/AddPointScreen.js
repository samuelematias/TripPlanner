import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	TextInput,
	Image,
	Text,
	AsyncStorage
} from 'react-native';

import styles from './styles/AddPointScreenStyles';

import { assets } from '../themes';

import isIphoneX from '../utils/IsIphoneX';

import MapView, { Marker } from 'react-native-maps';

class AddPointScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			id: new Date().getTime(),
			position: {
				latitude: 37.78825,
				longitude: -122.4324
			},
			pointName: '',
			description: '',
			price: 0
		};
	}

	componentWillUnmount() {
		this.props.navigation.state.params.refresh();
	}

	/**
	 * Handle the data to save on phontStorage by AsyncStorage
	 * @author samuelmataraso
	 * @method _handleSave
	 * @param none
	 * @returns json
	 */
	_handleSave = async () => {
		const id = this.props.navigation.state.params.id;
		const pointsAS = await AsyncStorage.getItem('trip-' + id);
		let points = [];
		if (pointsAS) {
			points = JSON.parse(pointsAS);
		}
		points.push(this.state);
		await AsyncStorage.setItem('trip-' + id, JSON.stringify(points));

		let total = 0;
		points.forEach(p => {
			total += p.price;
		});

		const tripsAS = await AsyncStorage.getItem('trips');
		let trips = [];
		if (tripsAS) {
			trips = JSON.parse(tripsAS);
		}
		trips.forEach((trip, index) => {
			if (trip.id === id) {
				trips[index].price = total;
				trips[index].latitude = points[0].position.latitude;
				trips[index].longitude = points[0].position.longitude;
			}
		});

		await AsyncStorage.setItem('trips', JSON.stringify(trips));
		this.props.navigation.state.params.refresh();
		this.props.navigation.goBack();
	};

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.header}>
					<MapView
						style={{ flex: 1 }}
						initialRegion={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421
						}}
					>
						<Marker
							coordinate={{
								latitude: 37.78825,
								longitude: -122.4324
							}}
							draggable
							onDragEnd={evt =>
								this.setState({ position: evt.nativeEvent.coordinate })
							}
						/>
					</MapView>
					<View
						style={[styles.backButton, isIphoneX() ? { paddingTop: 16 } : null]}
					>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Image source={assets.iconChevronLeft} />
						</TouchableOpacity>
					</View>
					<Text style={styles.tripName}>{'Eurotrip: 2019'}</Text>
					<Text style={styles.tripPrice}>{'R$ 5000'}</Text>
				</View>
				<View style={styles.wrapperInput}>
					<View>
						<TextInput
							style={styles.input}
							placeholder={'Nome do ponto'}
							onChangeText={txt =>
								this.setState({
									pointName: txt
								})
							}
						/>
						<TextInput
							style={styles.input}
							placeholder={'Descrição'}
							onChangeText={txt =>
								this.setState({
									description: txt
								})
							}
						/>
						<TextInput
							style={styles.input}
							placeholder={'Valor R$'}
							keyboardType={'numeric'}
							onChangeText={num =>
								this.setState({
									price: parseFloat(num)
								})
							}
						/>
						<TouchableOpacity
							onPress={() => {
								this._handleSave();
							}}
							style={styles.button}
						>
							<Text>{'Salvar ponto'}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default AddPointScreen;
