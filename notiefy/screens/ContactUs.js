import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import * as Linking from 'expo-linking'

const TestScreen = () => {

	return (
		<View style={styles.container}>
			<Text style={{textAlign: 'center', fontSize: 16}}>If you have any questions ot problems while using Notiefy, contact us through this email</Text>
			<TouchableOpacity onPress={() => Linking.openURL('mailto:notiefy.devteam@gmail.com')}>
				<Text style={styles.emailText}>notiefy.devteam@gmail.com</Text>
			</TouchableOpacity>
		</View>
		
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: 20,
		marginTop: 20
	},
	emailText: {
		marginTop: 10,
		color: 'blue',
		textDecorationLine: 'underline'
	}
})

export default TestScreen
