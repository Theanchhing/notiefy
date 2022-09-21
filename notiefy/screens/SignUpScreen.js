import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import InputText from '../components/InputText'
import ButtonGreen from '../components/ButtonGreen'
// import SocialBtn from '../components/SocialBtn'
import PasswordInputComp from '../components/PasswordInputComp'

const SignUpScreen = ({ navigation }) => {
	const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/images/logo.png')}
				style={styles.logo}
			/>
			<Text style={styles.welcomeHeading}>Sign Up</Text>
			<View style={{ marginBottom: 20 }}>
				<InputText placeholderText="Full Name" color="#FFFFFF" value={fullname} onTextChange={(newVal) => setFullname(newVal)} />
				<InputText placeholderText="example@email.com" color="#FFFFFF" value={email} onTextChange={(newVal) => setEmail(newVal)} />
				<PasswordInputComp placeholderText='Password' password={password} onPassChange={(newPass) => setPassword(newPass)}/>
				<PasswordInputComp placeholderText='Confirm Password' password={confirmPassword} onPassChange={(newPass) => setConfirmPassword(newPass)}/>
			</View>

			<ButtonGreen
				style={{ marginTop: 10 }}
				title="Sign Up"
				onPress={() => navigation.navigate('SignUpScreen')}
			/>

			{/* <Text style={{ margin: 10, alignSelf: 'center' }}>Or continue with</Text> */}

			{/* <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
				<SocialBtn
					customStyle={{ width: 30, height: 30, marginTop: 6 }}
					imgSource={require('../assets/images/facebook.png')}
				/>
				<SocialBtn
					customStyle={{ width: 25, height: 25, marginTop: 7 }}
					imgSource={require('../assets/images/google.png')}
				/>
			</View> */}

			<View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
				<Text>Have an Account? </Text>
				<TouchableOpacity
					onPress={() => navigation.navigate('SignIn')}
				>
					<Text style={{textDecorationLine: 'underline'}}>Sign In</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
		margin: 10,
	},
	logo: {
		width: 100,
		height: 100,
		alignSelf: 'center',
	},
	forgotPassword: {
		alignSelf: 'flex-end',
		marginRight: 30,
		marginTop: 7,
		marginBottom: 20,
		textDecorationLine: 'underline',
	},
	welcomeHeading: {
		color: '#747F97',
		fontWeight: 'bold',
		fontSize: 30,
		marginTop: -20,
		marginBottom: 15,
		textAlign: 'center',
	},
})

export default SignUpScreen
