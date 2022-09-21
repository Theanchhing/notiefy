import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from 'react-native'
import { useStoreState } from 'easy-peasy'
import { MenuProvider } from 'react-native-popup-menu'

import ButtonGreen from '../components/ButtonGreen'
import ChecklistCard from '../components/ChecklistCard'


function TodoListScreen() {
	const todos = useStoreState((state) => state.todos)
	console.log(todos)
	return (

		<View style={styles.container}>
				
			<FlatList
				style={{ marginTop: 15 }}
				data={todos}
				keyExtractor={(checklist) => checklist.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity>
							<ChecklistCard item={item}/>
						</TouchableOpacity>
					)
				}}
			/>
			<ButtonGreen
				title="Create Checklist"
				onPress={() => navigation.navigate('CreateTodoList')}
			/>
		</View>

	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		// backgroundColor: '#F0EBE3'
	}
})

export default TodoListScreen
