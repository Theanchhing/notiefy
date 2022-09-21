import 'react-native-gesture-handler'

// core imports
import * as React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { StoreProvider  } from 'easy-peasy'
// navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from './navigations/BottomTabNavigator'

import store from './store'
import { MenuProvider } from 'react-native-popup-menu'

function NotFoundScreen() {
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>NotFound Screen</Text>
	  </View>
	)
}
const Stack = createStackNavigator()


function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Main" component={BottomTabNavigator}/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
		</Stack.Navigator>
	)
}

function App() {
	return (
		<StoreProvider store={store}>
			<MenuProvider>
				<SafeAreaProvider style={{backgroundColor: '#F0EBE3'}}>
					<NavigationContainer >
						<RootNavigator/>
					</NavigationContainer>
				</SafeAreaProvider>
			</MenuProvider>
			
		</StoreProvider>
		
	)
}

export default App
