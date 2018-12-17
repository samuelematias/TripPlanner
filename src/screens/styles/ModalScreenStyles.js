import { StyleSheet, Dimensions } from 'react-native';
const dim = Dimensions.get('window');
export default StyleSheet.create({
	wrapperPlanningTrip: {
		flex: 1,
		paddingBottom: 16,
		paddingTop: 16,
		alignItems: 'center',
		justifyContent: 'center'
	},
	planningText: {
		textAlign: 'center',
		fontSize: 18,
		width: 220,
		color: '#FFF'
	},
	buttonText: {
		fontSize: 16,
		color: '#FFF'
	},
	wrapperOptions: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		marginTop: 10
	},
	containerModal: {
		flex: 1,
		backgroundColor: 'rgba(97, 186, 207, 0.7)'
	},
	wrapperDialog: {
		height: dim.height,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
