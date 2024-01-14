import { StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Color, Fonts, Sizes } from '../assets/constant';

const PinTextInput = ({ currentVal, nextVal }) => {
	const [isFocused, setIsFocused] = useState(false);
	return (
		<TextInput
			ref={currentVal}
			style={[styles.input, { borderColor: isFocused ? Color.Purple : Color.Green }]}
			keyboardType='numeric'
			maxLength={1}
			onChangeText={(val) => {
				if (val != '') {
					nextVal.current.focus();
				}
			}}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
		/>
	)
}

export default PinTextInput

const styles = StyleSheet.create({
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
})