// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Image, Text } from 'react-native'
import NotFoundScreen from '../screens/NotFoundScreen'
import TestScreen from '../screens/TestScreen'
import HomeScreen from '../screens/HomeScreen'
import TodoListScreen from '../screens/TodoListScreen'
import SignUpScreen from '../screens/SignUpScreen'
import SignIn from '../screens/SignIn'
import ForgotPassword from '../screens/ForgotPassword'
import NewPassword from '../screens/NewPassword'
import AddNote from '../screens/AddNote'
import CreateTextNote from '../screens/textnote/CreateTextNote'
import EditTextNote from '../screens/textnote/EditTextNote'
import NoteFolderDisplay from '../screens/textnote/NoteFolderDisplay'
import NoteScreen from '../screens/textnote/NoteScreen'
import SearchScreen from '../screens/SearchScreen'
import SketchScreen from '../screens/sketchnote/SketchScreen'
import SketchDisplayScreen from '../screens/sketchnote/SketchDisplayScreen'
import SketchShowDetail from '../screens/sketchnote/SketchShowDetail'
import TodoListDetail from '../screens/TodoListDetail'
import CreateTodoList from '../screens/CreateTodoList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../screens/ProfileScreen'
import ChangePassword from '../screens/ChangePassword'
import AboutUs from '../screens/AboutUs'
import ContactUs from '../screens/ContactUs'
import EditProfile from '../screens/EditProfile'
import FolderScreen from '../screens/FolderScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
	AntDesign,
	MaterialCommunityIcons,
	Ionicons,
	FontAwesome,
} from '@expo/vector-icons'


export default function Navigation({ colorScheme }) {
	return (
		<SafeAreaProvider>
			<NavigationContainer
				// linking={LinkingConfiguration}
				// theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
				theme={DefaultTheme}
			>
				<RootNavigator />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const BottomTabNavigators = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="HomeScreen"
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: () => {
						return <AntDesign name="home" size={24} color="black" />
					},
				}}
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					title: 'My Checklists',
					headerShown: true,
					tabBarIcon: () => {
						return (
							<MaterialCommunityIcons
								style={{ right: 5 }}
								name="format-list-checkbox"
								size={24}
								color="black"
							/>
						)
					},
				}}
				name="TodoListScreen"
				component={TodoListScreen}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					title: 'New Note',
					headerShown: true,
					tabBarIcon: () => {
						return (
							<View
								style={{
									width: 80,
									backgroundColor: '#2AB674',
									height: 40,
									borderRadius: 20,
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Text
									style={{
										color: 'white',
										fontSize: 30,
									}}
								>
                  +
								</Text>
							</View>
						)
					},
				}}
				name="AddNote"
				component={AddNote}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					// headerShown: false,
					tabBarIcon: () => {
						return (
							<Ionicons
								style={{ left: 5 }}
								name="folder-outline"
								size={24}
								color="black"
								borderRadius={15}
							/>
						)
					},
				}}
				name="My Folder"
				component={FolderScreen}
			/>
			<Tab.Screen
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: () => {
						return <FontAwesome name="user-o" size={22} color="black" />
					},
				}}
				name="ProfileScreen"
				component={ProfileScreen}
			/>

		</Tab.Navigator>
	)
}

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SignIn" component={SignIn} />
			<Stack.Screen name="SketchDisplayScreen" component={SketchDisplayScreen} options={{title: 'My Sketches', headerShown: true}}/>
			<Stack.Screen name="SketchShowDetail" component={SketchShowDetail} />
			<Stack.Screen name="CreateTodoList" component={CreateTodoList} />
			<Stack.Screen name="TodoListDetail" component={TodoListDetail} />
			<Stack.Screen name="SketchScreen" component={SketchScreen} />
			<Stack.Screen name="TestScreen" component={TestScreen} />
			<Stack.Screen name="EditProfile" component={EditProfile} />
			<Stack.Screen name="NoteFolderDisplay" component={NoteFolderDisplay} options={{ title: 'My Text Notes', headerShown: true}}/>

			<Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown: true}}/>
			<Stack.Screen name="ContactUs" component={ContactUs} options={{headerShown: true}}/>
			<Stack.Screen name="SearchScreen" component={SearchScreen} />
			<Stack.Screen name="NewPassword" component={NewPassword} />
			<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
			<Stack.Screen name="ChangePassword" component={ChangePassword} />
			<Stack.Screen name="Main" component={BottomTabNavigators} />
			<Stack.Screen name="NoteScreen" component={NoteScreen} />
			<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
			<Stack.Screen name="AddNote" component={AddNote}/>
			<Stack.Screen name='CreateTextNote' component={CreateTextNote}/>
			<Stack.Screen name='EditTextNote' component={EditTextNote}/>

			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
		</Stack.Navigator>
	)
}
