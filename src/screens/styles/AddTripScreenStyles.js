import { StyleSheet } from 'react-native';
export default StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		paddingBottom: 16
	},
	wrapperInfo: {
		flex: 1
	},
	itemName: {
		fontWeight: 'bold',
		fontSize: 18
	},
	wrapperItemPrice: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: 16
	},
	itemPrice: {
		textAlign: 'right',
		color: '#61BACF',
		fontWeight: 'bold'
	},
	wrapper: {
		flex: 1
	},
	header: {
		height: 225,
		backgroundColor: 'gray'
	},
	buttonBack: {
		position: 'absolute',
		top: 16
	},
	tripName: {
		position: 'absolute',
		left: 16,
		bottom: 16,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF'
	},
	tripPrice: {
		position: 'absolute',
		bottom: 16,
		right: 16,
		textAlign: 'right',
		padding: 4,
		fontWeight: 'bold',
		color: '#FFF'
	},
	tripNameTitle: {
		position: 'absolute',
		left: 16,
		bottom: 38,
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFF'
	},
	tripPriceTitle: {
		position: 'absolute',
		bottom: 38,
		right: 50,
		textAlign: 'right',
		padding: 4,
		fontWeight: 'bold',
		color: '#FFF'
	},
	list: {
		flex: 1
	},
	containerList: {
		paddingTop: 16,
		paddingLeft: 16
	},
	buttonPlus: {
		position: 'absolute',
		top: 16,
		right: 16,
		padding: 10
	},
	wrapperTitleInitials: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	titleInitials: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#FFF'
	},
	iconAddTrip: {
		width: 95,
		height: 95
	},
	wrapperHeader: {
		width: 180
	},
	wrapperInput: {
		marginTop: 16,
		marginRight: 16,
		marginLeft: 16
	},
	input: {
		backgroundColor: '#ececec',
		padding: 20,
		marginBottom: 16,
		borderRadius: 5
	},
	buttonOn: {
		backgroundColor: '#61BACF',
		padding: 20,
		marginBottom: 16,
		alignItems: 'center',
		borderRadius: 5
	},
	buttonOff: {
		backgroundColor: '#ececec',
		padding: 20,
		marginBottom: 16,
		alignItems: 'center',
		borderRadius: 5
	},
	add: {
		fontWeight: 'bold',
		fontSize: 18
	},
	where: {
		color: '#61BACF',
		fontWeight: 'bold',
		fontSize: 24
	},
	wrapperInputArea: {
		marginTop: 16,
		marginRight: 16,
		marginLeft: 16,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	iconSearchOnMap: {}
});
