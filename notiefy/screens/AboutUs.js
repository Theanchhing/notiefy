import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const TestScreen = () => {

	return (
		<View style={styles.container}>
			<Image 	source={require('../assets/images/logo.png')} style={styles.logo}/>
			<Text style={styles.text}>
				{ 
					`\t\t\t\tNotiefy is a note-taking plateform develop by a small group of young passionate engineers using React Native. It is a productive tool which focus on simplicity designed for young professional to take down notes, sketch ideas with ease categorize feature to help them stay organized, plus searching feature and alert notification for their convenience and time-saving.
					This is the first release (1.0.0), and with this version user can register their profile and start using text note, to-do list feature and sketch out their idea.`
				}
			</Text>
		</View>
		
	)
}

const styles = StyleSheet.create({
	container: {
    	alignItems: 'center',
		paddingHorizontal: 20,
		marginTop: 25
	},
	logo :{
		width: 110,
		height: 110,
		marginBottom: 0
	},
	text: {
		color: '#000000',
		opacity: 0.7,
		fontSize: 16,
		textAlign: 'justify',
		lineHeight: 22
	}
})

export default TestScreen
