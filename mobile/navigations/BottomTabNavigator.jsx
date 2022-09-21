import { View, Text } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// icons imports
import {
	MaterialCommunityIcons,
} from '@expo/vector-icons'

import HomeScreen from '../screen/HomeScreen'
import TodoListScreen from '../screen/TodoListScreen'
import EditorScreen from '../screen/EditorScreen'
import FolderScreen from '../screen/FolderScreen'
import ProfileScreen from '../screen/ProfileScreen'

const Tab = createMaterialTopTabNavigator()

const BottomTabNavigators = () => {
	return (
		<Tab.Navigator 
			tabBarPosition='bottom'
			screenOptions={{ tabBarShowLabel: false}}
			initialRouteName="Home"
			
		>
			<Tab.Screen
				name="Home"
				options={{
					tabBarIcon: () => (
						<MaterialCommunityIcons 
							name="home" 
							size={24} 
						/>
					)
				}}
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="format-list-bulleted-square"
							size={24}
						/>
					),
				}}
				name="Todo"
				component={TodoListScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: () => (
						<MaterialCommunityIcons
							style={{  color: 'green'}}
							name="note-plus" 
							size={24} 
						/>
					),
				}}
				name="AddNote"
				component={EditorScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: () => {
						return (
							<MaterialCommunityIcons
								name="folder"
								size={24}
							/>
						)
					},
				}}
				name="Folder"
				component={FolderScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="face-man"
							size={24}
						/>
					)
				}}
				name="Profile"
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	)
}
export default BottomTabNavigators
