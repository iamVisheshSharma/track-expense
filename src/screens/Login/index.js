import { StyleSheet, TextInput, View, ImageBackground, SafeAreaView, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Color, Fonts, Sizes } from '../../assets/constant';

const Login = ({ navigation }) => {
	const [text, onChangeText] = React.useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={require('../../assets/bg.jpg')} resizeMode='cover' style={styles.image}>
				<View>
					<Text style={styles.heading}>
						Log in to Your {'\n'}
						MeTrace Account!
					</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChangeText}
						value={text}
						placeholder={`What's your email?`}
						placeholderTextColor={Color.Gray}

					/>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Otp')}>
						<Text style={styles.buttonText}>
							Login
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	heading: {
		marginHorizontal: Sizes.Medium,
		fontSize: Sizes.ExtraLarge,
		fontFamily: Fonts.bold,
		color: Color.Green,
	},
	input: {
		height: 50,
		margin: Sizes.Medium,
		padding: Sizes.Small,
		borderBottomColor: Color.Purple,
		borderBottomWidth: 1,
		borderRadius: Sizes.Base,
		fontFamily: Fonts.semibold,
		fontSize: Sizes.Large,
	},
	button: {
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: Sizes.Base,
		borderColor: Color.Primary,
		backgroundColor: Color.Purple,
		margin: Sizes.Medium,
	},
	buttonText: {
		color: Color.Alabaster,
		fontSize: Sizes.Large,
		fontFamily: Fonts.bold,
	},
})