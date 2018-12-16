import { StyleSheet, Dimensions } from 'react-native';
const dim = Dimensions.get('window');
export default StyleSheet.create({
	wrapperTrip: {
		backgroundColor: 'white',
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16
	},
	image: {
		backgroundColor: 'green',
		width: dim.width - 32,
		height: 148,
		marginBottom: 6
	},
	price: {
		position: 'absolute',
		top: 144 - 16,
		right: 32,
		textAlign: 'right',
		backgroundColor: '#61BACF',
		padding: 4,
		color: 'white'
	}
});
