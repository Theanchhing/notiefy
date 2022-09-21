import React from 'react'
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


function AddNote({ navigation }) {
	
	return (
		<View>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => navigation.navigate('CreateTextNote')}>
					<View style={[styles.innerContainer, {backgroundColor: '#FBE7C6'}]}>
						<Ionicons name='text' size={36} color='#141B29' />
						<Text style={styles.text}>Text Note</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('SketchScreen')}>
					<View style={[styles.innerContainer, {backgroundColor: '#A0E7E5'}]}>
						<MaterialCommunityIcons name="draw" size={44} color="#141B29" />
						<Text style={styles.text}>Sketch Note</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('CreateTodoList')}>
					<View style={[styles.innerContainer, {backgroundColor: '#B4F8C8'}]}>
						<MaterialCommunityIcons name='format-list-checks' size={40} color='#141B29' />
						<Text style={styles.text}>Checklist</Text>
					</View>
				</TouchableOpacity>
				
				
			</View>
		</View>
	)
}



const styles = StyleSheet.create({
	text: {
		fontSize: 16
	},
	innerContainer: {
		width: '100%',
		height: Dimensions.get('window').height*0.26,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginVertical: 4,
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 5,
		shadowColor: '#ccc',
		shadowOpacity: 0.5,
		elevation: 5,
		// shadowColor: '#000',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.23,
		// shadowRadius: 2.62,

		// elevation: 4,
	},
	container: {
		// display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		// justifyContent: 'center',
		width: '100%',
		height: Dimensions.get('window').height,
		paddingHorizontal: 10,
		paddingVertical: 5
		// backgroundColor: 'pink'
	},
})
export default AddNote

// =========================================

