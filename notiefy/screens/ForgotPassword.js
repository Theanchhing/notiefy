import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	SafeAreaView,
	StatusBar,
} from 'react-native'
import InputText from '../components/InputText'
import ButtonGreen from '../components/ButtonGreen'
import { Ionicons } from '@expo/vector-icons'

const ForgotPassword = ({ navigation }) => {
	const [email, setEmail] = useState('')
	return (
		<SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
			<View style={styles.container}>
				<View style={styles.headerWrapper}>
					<View style={styles.backIcon}>
						<Ionicons
							name="chevron-back-sharp"
							size={24}
							color="black"
							onPress={() => navigation.goBack()}
						/>
					</View>
					<View style={styles.heading}>
						<Text style={{ fontSize: 22 }}>Forgot Password</Text>
					</View>
				</View>
				
				<View style={styles.card}>
					<Text style={styles.headingTitle}>Enter your email</Text>
					<InputText placeholderText="example@email.com" color="#F2F3F7" value={email} onTextChange={(newVal) => setEmail(newVal)} />
					<TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
						<Text style={{ color: '#F00', textAlign: 'center' }}>
                Back to sign in
						</Text>
					</TouchableOpacity>
					<ButtonGreen
						title="Send"
						onPress={() => navigation.navigate('NewPassword')}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	card: {
		alignSelf: 'center',
		backgroundColor: '#FFF',
		height: Dimensions.get('window').height * 0.45,
		width: Dimensions.get('window').width * 0.85,
		marginTop: Dimensions.get('window').height * 0.11,
		borderRadius: 24,
		paddingTop: 30,
		paddingBottom: 45,
		justifyContent: 'space-around',
		shadowColor: '#000',
		shadowRadius: 24,
		shadowOpacity: 0.1,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		// justifyContent: "center",
	},
	headerWrapper: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		// flex: 1,
	},
	backIcon: {
		position: 'absolute',
		marginLeft: 12,
	},
	heading: {
		alignItems: 'center',
		flex: 1,
	},
	headingTitle: {
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
	},
})

export default ForgotPassword
