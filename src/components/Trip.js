import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles/TripStyles';

const Trip = props => {
	const priceFormatted =
		props.price && props.price > 0
			? props.price.toFixed(2).replace('.', ',')
			: 0;

	return (
		<TouchableOpacity style={styles.wrapperTrip} onPress={props.onPress}>
			<View style={styles.image}>
				<Text>{'image'} </Text>
			</View>
			<Text>{props.title} </Text>
			<Text style={styles.price}>{'R$ ' + priceFormatted}</Text>
		</TouchableOpacity>
	);
};

export default Trip;
