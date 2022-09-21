import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useLoadedAssets } from './hooks/useLoadedAssets'
import Navigation from './navigation'
import { useColorScheme, LogBox } from 'react-native'
import { StoreProvider  } from 'easy-peasy'
import { MenuProvider } from 'react-native-popup-menu'

import store from './store'

LogBox.ignoreAllLogs()

export default function App () {

	const isLoadingComplete = useLoadedAssets()
	const colorScheme = useColorScheme()

	if (!isLoadingComplete) {
		return null
	} else {
		return (	
			<StoreProvider store={store}>
				<MenuProvider>
					<SafeAreaProvider>
						<Navigation colorScheme={colorScheme} />
						<StatusBar />
					</SafeAreaProvider>
				</MenuProvider>
			</StoreProvider>
		)
	}

}

