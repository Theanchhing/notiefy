import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Dimensions,
	TouchableOpacity
} from 'react-native'
import ChecklistCard from '../components/ChecklistCard'
import {useStoreState} from 'easy-peasy'

function TodoListScreen({ navigation }) {
	const todos = useStoreState((state) => state.todos)
	// console.log(todos)

	return (
		<View style={styles.container}>
			{ todos.length === 0 && (
				<View style={styles.initailContainer}>
					<TouchableOpacity style={styles.addFirstChecklist} onPress={() => navigation.navigate('CreateTodoList')}>
						<Text style={styles.addFirstChecklistText}>Tap to add your first checklist</Text>
					</TouchableOpacity>
				</View>)
			}
				
			{ todos.length > 0 && <FlatList
				style={{ marginTop: 15 }}
				data={todos}
				inverted={true}
				keyExtractor={(checklist) => checklist.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('TodoListDetail', { id: item.id})}>
							<ChecklistCard item={item}/>
						</TouchableOpacity>
					)
				}}
			/>
			}
		</View>

	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
	initailText: {
		fontSize: 24,
		marginTop: '60%',
		color: 'grey'
	},
	addFirstChecklist: {
		flexDirection: 'column', 
		alignItems: 'center',
		width: '100%',
		height: Dimensions.get('window').height
	},
	addFirstChecklistText: {
		fontSize: 24,
		marginTop: '60%',
		color: 'grey'
	}
})

export default TodoListScreen
