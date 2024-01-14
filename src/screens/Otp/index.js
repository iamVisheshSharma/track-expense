import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { Color, Fonts, Sizes } from '../../assets/constant'
import PinTextInput from '../../components/PinTextInput';

const Otp = ({ navigation }) => {
	const value1 = useRef();
	const value2 = useRef();
	const value3 = useRef();
	const value4 = useRef();

	return (
		<View style={styles.container}>
			<Text style={styles.mainHeading}>Enter OTP to verification</Text>
			{/* <View style={styles.inputView}>
				<TextInput
					ref={value1}
					style={[styles.input, {}]}
					keyboardType='numeric'
					maxLength={1}
					onChangeText={(val) => {
						if(val != ''){
							value2.current.focus();
						}
					}}
				/>
				<TextInput
					ref={value2}
					style={styles.input}
					keyboardType='numeric'
					maxLength={1}
					onChangeText={(val) => {
						if(val != ''){
							value3.current.focus();
						}
					}}
				/>
				<TextInput
					ref={value3}
					style={styles.input}
					keyboardType='numeric'
					maxLength={1}
					onChangeText={(val) => {
						if(val !== ''){
							value4.current.focus();
						}
					}}
				/>
				<TextInput
					ref={value4}
					style={styles.input}
					keyboardType='numeric'
					maxLength={1}
					onChangeText={(val) => {}}
				/>
			</View> */}
			<View style={styles.inputView}>
				<PinTextInput currentVal={value1} nextVal={value2} />
				<PinTextInput currentVal={value2} nextVal={value3} />
				<PinTextInput currentVal={value3} nextVal={value4} />
				<PinTextInput currentVal={value4} nextVal={value4} />
			</View>
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
				<Text style={styles.buttonText}>
					Submit
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Otp

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Color.Primary
	},
	mainHeading: {
		fontSize: Sizes.ExtraLarge,
		fontFamily: Fonts.bold,
		textAlign: 'center',
		color: Color.Green,
	},
	inputView: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginTop: Sizes.ExtraLarge * 3
	},
	input: {
		height: 50,
		width: 50,
		borderWidth: 1,
		borderColor: Color.Green,
		borderRadius: Sizes.Small,
		textAlign: 'center',
		fontSize: Sizes.Large,
		fontFamily: Fonts.semibold,
	},
	button: {
		height: 45,
		borderWidth: 1,
		backgroundColor: Color.Purple,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: Sizes.Large,
		borderRadius: Sizes.Base,
		marginTop: Sizes.ExtraLarge * 3
	},
	buttonText: {
		fontSize: Sizes.Large + 2,
		fontFamily: Fonts.bold,
		color: Color.Alabaster
	}
})