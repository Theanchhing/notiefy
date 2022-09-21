import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ButtonGreen = ({ navigation, title, onPress }) => {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center' }}>
			<TouchableOpacity style={styles.btn} onPress={onPress}>
				<Text style={{ color: '#FFFFFF' }}>{title}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: '#7D9D9C',
		height: 40,
		width: 210,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default ButtonGreen
