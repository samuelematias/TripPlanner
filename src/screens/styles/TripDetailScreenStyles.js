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
		right: 16,
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
		justifyContent: 'center'
	},
	titleInitials: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#FFF'
	}
});
