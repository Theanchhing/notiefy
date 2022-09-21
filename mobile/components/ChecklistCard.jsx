import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { useStoreActions } from 'easy-peasy'

const ChecklistCard = ({item}) => {
	const completeTodo = useStoreActions((actions) => actions.completeTodo)
	const deleteTodo = useStoreActions((actions) => actions.deleteTodo)

	return (
		<View style={styles.cardContainer}>
			<MaterialCommunityIcons name='format-list-checks' size={24} color='#413F42' />
			<View style={{flex: 1, marginLeft: 5, marginRight: 5}}>
				<Text 
					style={
						[styles.title, {textDecorationLine: item.done? 'line-through':'none'}]
					}
				>{item.title}</Text>
				<Text style={styles.info}>
					{item.description}
				</Text>
			</View>
			<Menu>
				<MenuTrigger>
					<Entypo name="dots-three-horizontal" size={20} color="grey" /> 
				</MenuTrigger>
				<MenuOptions customStyles={optionsStyles}>
					<MenuOption onSelect={() => completeTodo(item.id)} >
						<Text style={{color: '#354567', textAlign: 'center'}}>Done</Text>
					</MenuOption>
					<View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}/>
					<MenuOption onSelect={() => deleteTodo(item.id)} >
						<Text style={{color: '#ff0000', textAlign: 'center'}}>Delete</Text>
					</MenuOption>
				</MenuOptions>
			</Menu>
	  	</View>
	)
}

const optionsStyles = {
	optionsContainer: {
		width: 75,
		borderRadius: 10,
		marginTop: 20
	}
}

const styles = StyleSheet.create({
	info: {
		opacity: 0.7,
	},
	cardContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 5,
		marginHorizontal:5,
		padding: 10,
		backgroundColor: '#E4DCCF',
		borderRadius: 10,
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 5,
		shadowColor: 'black',
		shadowOpacity: 0.3,
		elevation: 3
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: '#48829E',
	}
})

export default ChecklistCard
