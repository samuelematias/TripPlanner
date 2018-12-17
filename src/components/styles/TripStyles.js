import { StyleSheet, Dimensions } from 'react-native';
const dim = Dimensions.get('window');
export default StyleSheet.create({
	wrapperTrip: {
		backgroundColor: 'white',
		paddingTop: 16,
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 8
	},
	image: {
		backgroundColor: 'green',
		width: dim.width - 32,
		height: 160,
		marginBottom: 6,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 10,
		borderRadius: 10
	},
	price: {
		position: 'absolute',
		top: 144 - 40,
		right: 32,
		textAlign: 'right',
		padding: 4,
		color: 'white',
		fontWeight: 'bold'
	},
	cost: {
		position: 'absolute',
		top: 144 - 60,
		right: 32,
		textAlign: 'right',
		padding: 4,
		color: 'white',
		fontWeight: 'bold'
	},
	titleInitials: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#FFF'
	},
	title: {
		position: 'absolute',
		top: 144 - 18,
		right: 32,
		textAlign: 'right',
		padding: 4,
		color: 'white',
		fontWeight: 'bold'
	},
	trip: {
		position: 'absolute',
		top: 144,
		right: 32,
		textAlign: 'right',
		padding: 4,
		color: 'white',
		fontWeight: 'bold'
	},
	wrapperTitle: {
		flexDirection: 'row'
	},
	wrapperChangeColor: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 3
	},
	wrapperChangeColorButton: {
		paddingLeft: 5
	},
	iconRefresh: {
		width: 25,
		height: 25
	},
	changeColorText: {
		textAlign: 'right',
		color: 'black',
		fontWeight: '600'
	}
});
