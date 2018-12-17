import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	containerBackground: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'space-between',
		flexDirection: 'column'
	},
	wrapperLogoTripPlanner: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapperLogoDevPleno: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingBottom: 32
	},
	buttonBackground: {
		backgroundColor: 'rgba(97, 186, 207, 0.7)',
		paddingBottom: 16,
		paddingTop: 16,
		opacity: 10
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 18,
		color: '#FFF'
	},
	iconPin: {
		marginBottom: 8
	},
	buttonEmptyStateBackground: {
		backgroundColor: 'rgba(97, 186, 207, 0.7)',
		paddingBottom: 16,
		paddingTop: 16,
		alignItems: 'center'
	},
	buttonEmptyStateText: {
		textAlign: 'center',
		fontSize: 18,
		width: 220,
		color: '#FFF'
	}
});
