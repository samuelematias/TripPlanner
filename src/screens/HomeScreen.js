import React, { Component } from 'react';
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableWithoutFeedback
} from 'react-native';

class HomeScreen extends Component {
	state = {
		counter: 0
	};
	_handleCounter = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	};
	render() {
		return (
			<ImageBackground
				source={require('../../assets/background.png')}
				imageStyle={{ resizeMode: 'stretch' }}
				style={{
					flex: 1,
					alignItems: 'stretch',
					justifyContent: 'space-between',
					flexDirection: 'column'
				}}
			>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Image source={require('../../assets/logo-tripplanner.png')} />
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'flex-end',
						justifyContent: 'center',
						paddingBottom: 32
					}}
				>
					<Image source={require('../../assets/logo-devpleno.png')} />
				</View>
				<TouchableWithoutFeedback onPress={() => this._handleCounter()}>
					<View
						style={{
							backgroundColor: '#fff',
							paddingBottom: 16,
							paddingTop: 16
						}}
					>
						<Text style={{ textAlign: 'center', fontSize: 18 }}>
							{'COMEÇAR! ' + this.state.counter}
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</ImageBackground>
		);
	}
}

export default HomeScreen;
