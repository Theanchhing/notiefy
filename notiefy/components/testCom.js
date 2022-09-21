import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu'

const TestCom = ({ navigation }) => {
	return (
		<View style={{justifyContent: 'center', alignItems: 'center'}}>
			<Menu style={{width: 100, height: 100, marginTop: 50, backgroundColor: 'pink'}}>
				<MenuTrigger>
					<Entypo name="dots-three-horizontal" size={20} color="grey" /> 
				</MenuTrigger>
				<MenuOptions customStyles={optionsStyles}>
					<MenuOption onSelect={() => console.log('Pin selected...')}>
						<Text style={{color: '#354567', textAlign: 'center'}}>Pin</Text>
					</MenuOption>
					<View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}/>
					<MenuOption onSelect={() => console.log('Archive selected')} >
						<Text style={{color: '#354567', textAlign: 'center'}}>Archive</Text>
					</MenuOption>
					<View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}/>
					<MenuOption onSelect={() => console.log('Delete selected...')} >
						<Text style={{color: '#ff0000', textAlign: 'center'}}>Delete</Text>
					</MenuOption>
				</MenuOptions>
			</Menu>
	  	</View>
	)
}

const optionsStyles = {
	optionsContainer: {
		width: 90,
		borderRadius: 10,
		marginTop: 20
	}
}
const styles = StyleSheet.create({
	optionsStyles: {
		borderRadius: 10,
	}
})

export default TestCom
