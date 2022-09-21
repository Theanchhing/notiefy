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

const ChecklistCard = ({ item }) => {
	const completeTodo = useStoreActions((actions) => actions.completeTodo)
	const inCompleteTodo = useStoreActions((actions) => actions.inCompleteTodo)
	const deleteTodo = useStoreActions((actions) => actions.deleteTodo)
	

	return (
		<View style={styles.cardContainer}>
			<MaterialCommunityIcons name='format-list-checks' size={28} color='#31d488' />
			<View style={{ flex: 1, marginLeft: 10, marginRight: 5 }}>
				<Text 
					style={
						[styles.title, { textDecorationLine: item.done ? 'line-through':'none' }]
					}
					numberOfLines={1}
				>{item.title === '' ? 'No Title' : item.title}</Text>
				<Text style={styles.info}>
					{item.items.length} check items
				</Text>
			</View>
			<Menu>
				<MenuTrigger>
					<Entypo style={{ transform: [{ rotate: '90deg'}] }} name="dots-three-horizontal" size={20} color="grey" /> 
				</MenuTrigger>
				<MenuOptions customStyles={optionsStyles}>
					{ item.done === false &&
					<MenuOption customStyles={optionStyles} onSelect={() => completeTodo(item.id)} >
						<Text style={{color: '#354567', textAlign: 'center'}}>Complete</Text>
					</MenuOption>
					}
					{ item.done === true &&
					<MenuOption customStyles={optionStyles} onSelect={() => inCompleteTodo(item.id)} >
						<Text style={{color: '#354567', textAlign: 'center'}}>Incomplete</Text>
					</MenuOption>
					}
					<View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}/>
					<MenuOption customStyles={optionStyles} onSelect={() => deleteTodo(item.id)} >
						<Text style={{color: '#ff0000', textAlign: 'center'}} >Delete</Text>
					</MenuOption>
				</MenuOptions>
			</Menu>
	  	</View>
	)
}

const optionsStyles = {
	optionsContainer: {
		width: 110,
		borderRadius: 10,
		marginTop: 20
	},
}

const optionStyles = {
	optionWrapper: {
		padding: 8
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
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		// shadowOffset: { width: 10, height: 10 },
		// shadowRadius: 5,
		// shadowColor: '#809A6F',
		// shadowOpacity: 0.3,
		// elevation: 3
	},
	title: {
		fontSize: 18,
		fontWeight: '700',
		color: '#354567',
	}
})

export default ChecklistCard
