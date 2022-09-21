import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import InputText from '../components/InputText'
import ButtonGreen from '../components/ButtonGreen'
// import SocialBtn from '../components/SocialBtn'
import PasswordInputComp from '../components/PasswordInputComp'

const TabOneScreen = ({ navigation }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// const [viewPass, setViewPass] = useState(false)

	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/images/logo.png')}
				style={styles.logo}
			/>
			<Text style={styles.welcomeHeading}>Welcome,{'\n'}Sign In</Text>

			<InputText placeholderText="example@email.com" color="#FFFFFF" value={email} onTextChange={(newVal) => setEmail(newVal)} />
			<PasswordInputComp 
				placeholderText='Password'
				password={password}
				onPassChange={(newPass) => setPassword(newPass)}

			/>

			<View>
				<TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
					<Text  style={{textDecorationLine: 'underline'}}>Forgot Password?</Text>
				</TouchableOpacity>
			</View>

			<ButtonGreen
				title="Sign In"
				onPress={() => navigation.navigate('Main')}
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
				<Text>Don't have an Account? </Text>
				<TouchableOpacity
					onPress={() => navigation.navigate('SignUpScreen')}
				>
					<Text style={{textDecorationLine: 'underline'}}>Sign Up</Text>
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
		marginTop: StatusBar.currentHeight
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
	},
	welcomeHeading: {
		color: '#747F97',
		fontWeight: 'bold',
		fontSize: 30,
		marginTop: -20,
		marginBottom: 10,
		textAlign: 'center',
	},
})

export default TabOneScreen
