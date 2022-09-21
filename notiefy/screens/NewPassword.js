import React, { useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native'
import PasswordInputComp from '../components/PasswordInputComp'
import ButtonGreen from '../components/ButtonGreen'

const NewPassword = ({ navigation }) => {
	const [newPass, setNewPass] = useState('')
	const [confirmPass, setConfirmPass] = useState('')

	return (
		<View style={styles.container}>
			<View
				style={{
					height: Dimensions.get('window').height * 0.5,
					justifyContent: 'space-between',
				}}
			>
				<View>
					<Text style={{ textAlign: 'center', fontSize: 24, marginTop: -30 }}>
            Recover Password
					</Text>
				</View>
				<View style={{ justifyContent: 'center'}}>
					<View style={{ marginVertical: 10 }}>
						<Text style={{ marginLeft: 30 }}>Enter New Password</Text>
						<PasswordInputComp placeholderText='New Password' password={newPass} onPassChange={(newVal) => setNewPass(newVal)} />
					</View>
					<View style={{ marginVertical: 10 }}>
						<Text style={{ marginLeft: 30 }}>Confirm Password</Text>
						<PasswordInputComp placeholderText='Confirm Password' password={confirmPass} onPassChange={(newVal) => setConfirmPass(newVal)} />
					</View>
				</View>
				<View>
					<ButtonGreen
						title="SUBMIT"
						onPress={() => navigation.navigate('Main')}
					/>
				</View>
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
	},
})

export default NewPassword
