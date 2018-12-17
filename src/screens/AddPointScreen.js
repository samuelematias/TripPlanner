import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	TextInput,
	Image,
	Text,
	AsyncStorage,
	ScrollView
} from 'react-native';

import styles from './styles/AddPointScreenStyles';

import { assets } from '../themes';

import { isIphoneX } from '../utils';

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
			price: null
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
		const { pointName, description, price } = this.state;
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const isDisabled = !pointName || !description || !price ? true : false;
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
				</View>
				<ScrollView>
					<View style={styles.wrapperHeader}>
						<View style={{ width: 200 }}>
							<Text style={styles.add} numberOfLines={2} ellipsizeMode={'tail'}>
								{'Adicionar um ponto na sua viagem no(a) : '}
							</Text>
						</View>
						<View style={{ paddingTop: 5 }}>
							<Text style={styles.where}>{params.trip.trip}</Text>
						</View>
					</View>
					<View style={styles.wrapperInput}>
						<View>
							<TextInput
								style={styles.input}
								placeholder={'Nome do ponto'}
								placeholderTextColor={'#222222'}
								onChangeText={txt =>
									this.setState({
										pointName: txt
									})
								}
							/>
							<View style={styles.line} />
							<TextInput
								style={styles.input}
								placeholder={'Descrição'}
								placeholderTextColor={'#222222'}
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
								placeholderTextColor={'#222222'}
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
								style={isDisabled ? styles.buttonOff : styles.buttonOn}
								disabled={isDisabled}
							>
								<Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
									{'Salvar ponto'}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default AddPointScreen;
