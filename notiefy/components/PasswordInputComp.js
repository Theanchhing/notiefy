import React, { useState } from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const PasswordInputComp = ({placeholderText, password, onPassChange}) => {
	const [toggle, setToggle] = useState(false)
	const [viewPass, setViewPass] = useState(true)

	const handleEyeIcon = () => {
		setViewPass((preVulue) => !preVulue) 
		setToggle((preVulue) => !preVulue)
	}

	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={{ flex: 1 }}>
				<TextInput
					style={[styles.textInputStyle]}
					placeholder={placeholderText}
					autoCapitalize="none"
					autoCorrect={false}
					value={password}
					onChangeText={(newPass) => onPassChange(newPass)}
					secureTextEntry={viewPass}
				/>
				<View
					style={styles.eyeWrapper}
				>
					{toggle === false ? (
						<Feather
							name="eye-off"
							size={20}
							color="black"
							onPress={handleEyeIcon}
						/>
					):(
						<Feather
							name="eye"
							size={20}
							color="black"
							onPress={handleEyeIcon}
						/>	
					)
					}

					
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	textInputStyle: {
		backgroundColor: 'white',
		borderRadius: 10,
		height: 44,
		marginLeft: 30,
		marginRight: 30,
		padding: 10,
		marginTop: 8,
	},
	eyeWrapper: {
		position: 'absolute',
		alignSelf: 'flex-end',
		marginTop: 20,
		right: 40,
		justifyContent: 'center',
		// backgroundColor: 'white'
		// borderColor: "#000",
		// borderWidth: 2,
	}
})

export default PasswordInputComp