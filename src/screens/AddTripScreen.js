import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	TextInput,
	Text,
	AsyncStorage,
	Image,
	ScrollView
} from 'react-native';

import styles from './styles/AddTripScreenStyles';

import { assets } from '../themes';

import RNGooglePlaces from 'react-native-google-places';

import { StackActions, NavigationActions } from 'react-navigation';

class AddTripScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		this.state = {
			trip: '',
			lat: null,
			lon: null,
			alreadySearched: false
		};
	}

	componentWillUnmount() {
		this.props.navigation.state.params.refresh();
	}

	/**
	 * Open a modal to be chosen the place of travel
	 * @author samuelmataraso
	 * @method openSearchModal
	 * @param none
	 * @returns state
	 */
	openSearchModal() {
		RNGooglePlaces.openAutocompleteModal()
			.then(place => {
				this.setState({
					trip: place.name,
					lat: place.latitude,
					lon: place.longitude,
					alreadySearched: true
				});
			})
			.catch(error => console.log(error.message));
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
		const noData = params.noData;

		const trip = {
			id: new Date().getTime(),
			trip: this.state.trip,
			price: 0,
			latitude: this.state.lat,
			longitude: this.state.lon,
			created_at: new Date().getTime(),
			updated_at: new Date().getTime()
		};
		const tripsAS = await AsyncStorage.getItem('trips');
		let trips = [];
		if (tripsAS) {
			trips = JSON.parse(tripsAS);
		}
		trips.push(trip);
		await AsyncStorage.setItem('trips', JSON.stringify(trips));
		this.props.navigation.state.params.refresh();

		//reset the stackScreens, to the first screen Home, and second screen Trips, in this case.
		const resetAction = StackActions.reset({
			index: 1,
			actions: [
				NavigationActions.navigate({ routeName: 'Home' }),
				NavigationActions.navigate({ routeName: 'Trips' })
			]
		});

		navigation.dispatch(resetAction);
	};

	render() {
		const { trip, alreadySearched } = this.state;
		const isDisabled = !trip ? true : false;
		return (
			<View style={styles.wrapper}>
				<View style={[styles.header, { backgroundColor: '#61BACF' }]}>
					<View style={styles.wrapperTitleInitials}>
						<View style={styles.wrapperHeader}>
							<Text style={styles.titleInitials}>{'Adicionar uma Viagem'}</Text>
						</View>
						<View>
							<Image
								source={assets.iconAddTrip}
								style={styles.iconAddTrip}
								resizeMode={'contain'}
							/>
						</View>
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
				</View>
				<ScrollView>
					<View style={styles.wrapperInput}>
						<View style={{ marginBottom: 10 }}>
							<TouchableOpacity
								onPress={() => {
									this.openSearchModal();
								}}
							>
								<View
									style={{
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<Image
										source={assets.iconSearchOnMap}
										style={styles.iconSearchOnMap}
										resizeMode={'contain'}
									/>
									<Text
										style={styles.add}
										numberOfLines={2}
										ellipsizeMode={'tail'}
									>
										{'Para onde você vai Viajar ?'}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
						{alreadySearched ? (
							<View>
								<View style={{ paddingTop: 10 }}>
									<TextInput
										style={styles.input}
										placeholder={'Nome do lugar da Viagem'}
										placeholderTextColor={'#222222'}
										value={trip}
										onChangeText={txt =>
											this.setState({
												trip: txt
											})
										}
									/>
								</View>
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
						) : null}
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default AddTripScreen;
