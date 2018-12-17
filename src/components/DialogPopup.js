import React, { Component } from 'react';
import { Image, View, Text, Button } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles/DialogPopupStyles';

class DialogPopup extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { renderDialogPopup, wrapperDialogPopup } = this.props;

		return (
			<View style={[styles.wrapperDialogPopup, wrapperDialogPopup]}>
				{renderDialogPopup()}
			</View>
		);
	}
}

DialogPopup.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	renderDialogPopup: () => {},
	wrapperDialogPopup: styles.wrapperDialogPopup
};

DialogPopup.propTypes = {
	/**
   *(used for some props with any type)
   *  anyType: PropTypes.any
   *(used to boolean props)
   *  boolType: PropTypes.bool
   *(used to stirng props)
   *  stringType: PropTypes.string
   *(user to number props)
   *  numberProps: PropTypes.number
   *(used to func props (onPress, overlay, etc.))
   *  funcType: PropTypes.func
   *(used to styles props)
   *  objectType: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ])
   *(used to images(url/images on project))
   *  imageType: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
   */
	renderDialogPopup: PropTypes.func,
	wrapperDialogPopup: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	])
};

export default DialogPopup;
