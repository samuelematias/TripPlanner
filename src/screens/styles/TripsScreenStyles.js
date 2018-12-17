import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'space-between'
	},
	wrapperMapa: {
		flex: 1
	},
	wrapperList: {
		backgroundColor: 'white'
	},
	buttonPlus: {
		position: 'absolute',
		bottom: 0,
		right: 20,
		padding: 10
	},
	buttonBack: {
		position: 'absolute',
		top: 16
	}
});
