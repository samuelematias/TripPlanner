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
		flex: 1,
		marginBottom: 10
	},
	header: {
		height: 225,
		backgroundColor: 'gray'
	},
	backButton: {
		position: 'absolute',
		top: 16
	},
	tripName: {
		position: 'absolute',
		left: 16,
		bottom: 16
	},
	tripPrice: {
		position: 'absolute',
		bottom: 16,
		right: 16,
		textAlign: 'right',
		backgroundColor: '#61BACF',
		padding: 4,
		color: 'white'
	},
	list: {
		flex: 1
	},
	containerList: {
		paddingTop: 16,
		paddingLeft: 16
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
	wrapperHeader: {
		marginTop: 16,
		marginRight: 16,
		marginLeft: 16,
		alignItems: 'flex-start',
		justifyContent: 'center'
	}
});
