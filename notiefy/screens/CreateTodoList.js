import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	StatusBar,
	TextInput,
	Pressable,
} from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import CheckBox from 'expo-checkbox'
import { useStoreState, useStoreActions } from 'easy-peasy'

const CreateTodoList = ({ navigation }) => {
	const [toggleCheckBox, setToggleCheckBox] = useState(false)
	const [title, setTitle] = useState('')
	const [item, setItem] =  useState('')
	const [items, setItems] =  useState([])
	const [isPressed, setIsPressed] = useState(false)

	const addTodo = useStoreActions((action) => action.addTodo)
	const todos = useStoreState((state) => state.todos)
	// console.log(test)

	const handleSave = (title, items) => {
		addTodo({title, items})
		navigation.navigate('TodoListScreen')
	}
	const handleDelete = (cont) => {
		setItems(items.filter((item) => item.content !== cont))
		setIsPressed(false)
	}
	
	const handleCheck = (cont) => {
		items.map((item) => {
			item.content === cont ? setToggleCheckBox(item.checked = !toggleCheckBox) : null
		})
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerWrapper}>
				<View style={styles.headingContainer}>
					<Ionicons
						name="chevron-back-sharp"
						size={24}
						color="grey"
						opacity={0.8}
						onPress={() => navigation.goBack()}
					/>

					<Text style={{ fontSize: 22, fontWeight: '700', marginLeft: 15, color: '#124143', }}>
            My To-do List
					</Text>
				</View>
				<TouchableOpacity
					style={styles.saveBtn}
					onPress={() => handleSave(title, items)}
				>
					<Text style={{ fontSize: 12, fontWeight: '700', color: '#fff' }}>
            SAVE
					</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TextInput
					style={styles.titleInput}
					placeholder="Title"
					placeholderTextColor="#9DB0A3"
					underlineColorAndroid="transparent"
					value={title}
					onChangeText={(newVal) => setTitle(newVal)} 
				/> 
			</View>
			<View style={styles.listContainer}>
				<View
					style={{
						marginBottom: 10,
						padding: 5,
						flexDirection: 'row',
					}}
				>
					<TextInput
						style={styles.input}
						value={item}
						onChangeText={(newVal) => setItem(newVal)}
						underlineColorAndroid="transparent"
						multiline={true}
						placeholder="New item"
					/>
					<TouchableOpacity
						style={styles.addBtn}
						onPress={() => {
							item !== '' ? setItems([...items, {checked: false, content: item}]) : console.log('no input enter')
							setItem('')
						}}
					>
						<Ionicons name="add" size={24} color="#124143" />
					</TouchableOpacity>
				</View>
				<View>
					<FlatList
						data={items}
						keyExtractor={(item, index) => item.index}
						inverted={true}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									delayLongPress={250}
									onLongPress={() => {
										console.log('Long press detected...')
										setIsPressed(true)
										// setIsPressed(false);
									}}
								>
									<View style={styles.row}>
										<CheckBox
											style={styles.checkBox}
											value={item.checked}
											// value={toggleCheckBox}
											onValueChange={() => handleCheck(item.content)}
											color={item.checked ? '#31D488' : undefined}
										/>
										<View style={styles.itemContainer}>
											<Text style={[styles.itemText, {color: item.checked ? '#31D488':'none'}]}>{item.content}</Text>
										</View>
										{isPressed && (
											<Pressable
												style={{
													width: 25,
													height: 25,
												}}
												onPress={() =>
													handleDelete(item.content)
												}
											>
												<Feather style={styles.trashIcon} name="trash-2" />
											</Pressable>
										)}
									</View>
								</TouchableOpacity>
							)
						}}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	headingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerWrapper: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: "pink",
	},
	saveBtn: {
		height: 32,
		width: 70,
		backgroundColor: '#31D488',
		marginTop: 3,
		padding: 5,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 5,
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 5,
	},
	addBtn: {
		alignSelf: 'center',
		height: 30,
		flex: 1.5,
		backgroundColor: '#B4F8C8',
		borderRadius: 75,
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 5,
		shadowColor: '#ccc',
		shadowOpacity: 0.5,
		elevation: 5,
	},
	input: {
		fontSize: 16,
		borderBottomWidth: 0.5,
		opacity: 0.8,
		borderColor: '#ccc',
		marginRight: 5,
		padding: 5,
		flex: 8.5,
	},
	listContainer: {
		backgroundColor: '#fff',
		marginTop: 20,
		padding: 15,
		borderRadius: 10,
		// height: '150%',
		// backgroundColor: "pink",
		shadowOffset: { width: 10, height: 10 },
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 5,
	},
	titleHeading: {
		fontWeight: 'bold',
		color: 'grey',
	},
	titleInput: {
		fontSize: 20,
		fontWeight: 'bold',
		height: 44,
		padding: 10,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		// backgroundColor: "#fff",
	},
	container: {
		flexDirection: 'column',
		marginTop: StatusBar.currentHeight,
		paddingLeft: 10,
		paddingRight: 10,
		// height: Dimensions.get(window).height
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 7,
		alignItems: 'center',
	},
	itemContainer: {
		flex: 1,
		// backgroundColor: "#ccc",
		marginLeft: 10,
		marginRight: 5,
	},
	itemText: {
		fontSize: 16,
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
