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

import { StackActions, NavigationActions } from 'react-navigation';

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
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const id = params.id;
		const latitude = params.latitude;
		const longitude = params.longitude;
		const refresh = params.refresh;
		const color = params.color;
		const titleInitials = params.titleInitials;
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
				trips[index].latitude = latitude;
				trips[index].longitude = longitude;
				trips[index].updated_at = new Date().getTime();
			}
		});

		await AsyncStorage.setItem('trips', JSON.stringify(trips));
		this.props.navigation.state.params.refresh();

		//reset the stackScreens, to the first screen Home, second screen Trips and third screen TripDetail, in this case.
		const resetAction = StackActions.reset({
			index: 2,
			actions: [
				NavigationActions.navigate({ routeName: 'Home' }),
				NavigationActions.navigate({ routeName: 'Trips' }),
				NavigationActions.navigate({
					routeName: 'TripDetail',
					params: {
						id,
						refresh,
						color,
						titleInitials
					}
				})
			]
		});

		navigation.dispatch(resetAction);
	};

	render() {
		const { pointName, description, price } = this.state;
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const latitude = params.latitude;
		const longitude = params.longitude;
		const isDisabled = !pointName || !description || !price ? true : false;
		return (
			<View style={styles.wrapper}>
				<View style={styles.header}>
					<MapView
						style={{ flex: 1 }}
						initialRegion={{
							latitude: latitude,
							longitude: longitude,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421
						}}
					>
						<Marker
							coordinate={{
								latitude: latitude,
								longitude: longitude
							}}
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
