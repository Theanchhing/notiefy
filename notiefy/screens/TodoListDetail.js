import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	StatusBar,
	Pressable,
} from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import CheckBox from 'expo-checkbox'
import { useStoreActions, useStoreState } from 'easy-peasy'

const CreateTodoList = ({ route, navigation }) => {
	const { id } = route.params
	// console.log('checklist: ', checklist)

	const todos = useStoreState((state) => state.todos)
	let checklist = todos.find((todo) => todo.id === id)

	const deleteItem = useStoreActions((actions) => actions.deleteItem)

	const [toggleCheckBox, setToggleCheckBox] = useState(false)
	// const [items, setItems] =  useState(checklist.items)
	const [isPressed, setIsPressed] = useState(false)

	const handleDeleteItem = (id, cont) => {
		deleteItem({id, cont})
		setIsPressed(false)
	}
	
	const handleCheck = (cont) => {
		checklist.items.map((item) => {
			item.content === cont ? setToggleCheckBox(item.checked = !toggleCheckBox) : null
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerWrapper}>
				<View style={styles.headingContainer}>
					<Ionicons
						name="chevron-back-sharp"
						size={26}
						color="grey"
						opacity={0.8}
						onPress={() => navigation.goBack()}
					/>

					<View>
						<Text style={[styles.title, {textDecorationLine: checklist.done ? 'line-through' : 'none' }]} numberOfLines={1}>{checklist.title}</Text>
					</View>
				</View>
			</View>
			
			<View style={styles.listContainer}>
				{checklist.items.length > 0 &&
				<FlatList
					data={checklist.items}
					keyExtractor={(item) => item.content}
					inverted={true}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								delayLongPress={250}
								onLongPress={() => {
									console.log('Long press detected...')
									setIsPressed(true)
								}}
							>
								<View style={styles.itemWrapper}>
									<CheckBox
										style={styles.checkBox}
										value={item.checked}
										onValueChange={() => handleCheck(item.content)}
										color={item.checked ? '#31D488' : undefined}
									/>
									<View style={styles.itemContainer}>
										<Text style={[styles.itemText, { color: item.checked ? '#31D488':'#354567' }]}>{item.content}</Text>
									</View>
									{ isPressed && (
										<Pressable
											style={{ width: 25, height: 25 }}
											onPress={() => handleDeleteItem(checklist.id, item.content ) }
										>
											<Feather style={styles.trashIcon} name="trash-2" />
										</Pressable>
									)}
								</View>
							</TouchableOpacity>
						)
					}}
				/>
				}
				{ checklist.items.length === 0 && <Text style={{textAlign: 'center', fontSize: 16, color: '#b1b1b1'}}>No check item</Text>}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		marginTop: StatusBar.currentHeight,
		paddingLeft: 10,
		paddingRight: 10,
	},
	headerWrapper: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 8,
	},
	headingContainer: {
		height: '100%',
		width: '82%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		marginLeft: 5,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#354567',
	},
	listContainer: {
		backgroundColor: '#fff',
		marginTop: 10,
		padding: 15,
		borderRadius: 10,
		shadowOffset: { width: 10, height: 10 },
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 5,
	},
	itemContainer: {
		flex: 1,
		marginLeft: 10,
		marginRight: 5,
	},
	itemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 7,
		alignItems: 'center',
	},
	itemText: {
		fontSize: 18,
	},
	checkBox: {
		height: 20,
		width: 20,
	},
	trashIcon: {
		color: 'red',
		fontSize: 20,
		opacity: 0.6,
	},
})
export default CreateTodoList
