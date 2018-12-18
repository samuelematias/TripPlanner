import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles/TripStyles';

import { assets } from '../themes';

import { MoneyFormat, RandomColor } from '../utils';

const Trip = props => {
	const priceFormatted =
		props.price && props.price > 0
			? MoneyFormat(props.price.toFixed(2))
			: 'R$ ' + 0;
	return (
		<TouchableOpacity style={styles.wrapperTrip} onPress={props.onPress}>
			<View style={[styles.image, { backgroundColor: props.color }]}>
				<Text style={styles.titleInitials}>{props.titleInitials} </Text>
			</View>
			<View style={styles.wrapperChangeColor}>
				<Text style={styles.changeColorText}>{'Trocar Cor ?'}</Text>
				<View style={styles.wrapperChangeColorButton}>
					<TouchableOpacity onPress={props.changeColor}>
						<Image source={assets.iconRefresh} style={styles.iconRefresh} />
					</TouchableOpacity>
				</View>
			</View>
			<Text style={styles.cost}>{'Custo total da viagem:'}</Text>
			<Text style={styles.price}>{priceFormatted}</Text>
			<Text style={styles.title}>{'Viajando para:'}</Text>
			<Text style={styles.trip}>{props.title}</Text>
		</TouchableOpacity>
	);
};

export default Trip;
