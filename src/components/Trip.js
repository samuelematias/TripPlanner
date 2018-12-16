import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles/TripStyles';

const Trip = props => {
	return (
		<TouchableOpacity style={styles.wrapperTrip} onPress={props.onPress}>
			<View style={styles.image}>
				<Text>{'image'} </Text>
			</View>
			<Text>{props.title} </Text>
			<Text style={styles.price}>{props.price}</Text>
		</TouchableOpacity>
	);
};

export default Trip;
