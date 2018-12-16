import { Dimensions, Platform } from 'react-native';

export default (isIphoneX = () => {
	const dim = Dimensions.get('window');
	return (
		Platform.OS === 'ios' &&
		!Platform.isPad &&
		!Platform.isTVOS &&
		((dim.height === 812 && dim.width === 375) ||
			(dim.width === 812 && dim.height === 375))
	);
});
