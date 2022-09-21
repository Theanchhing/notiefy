import React, { useState, useEffect } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
	StatusBar,
} from 'react-native'
// import { normalNotes, pinnedNotes } from "../context/findPinnedNotes";
import PinnedNotes from '../components/PinnedNotes'
import NoteComp from '../components/NoteComp'
import { MenuProvider } from 'react-native-popup-menu'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useStoreState } from 'easy-peasy'

const HomeScreen = () => {
	const notes = useStoreState((state) => state.notes)
	const pinnedNotes = useStoreState((state) => state.pinnedNotes)

	console.log(pinnedNotes)
	const [normalNotes, setNormalNotes] = useState([])

	return (
		<View style={styles.container}>
			<View style={styles.headerWrapper}>
				<Text style={styles.heading}>My Notes</Text>
				<View style={styles.MenuBtnWrapper}>
					<View style={styles.iconWrapper}>
						<Feather name="mail" size={24} color="black" />
					</View>
					<View style={styles.iconWrapper}>
						<TouchableOpacity
						>
							<Ionicons name="search" size={24} color="black" />
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<Text style={styles.heading2}>Pinned Notes</Text>

			<PinnedNotes pinned={pinnedNotes} />
			<View style={{ flex: 1 }}>
				<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={true}>
					{notes.map((note, key) => {
						return (
							<TouchableOpacity
								key={note.id}
							>
								<View style={{ paddingVertical: 5 }}>
									<NoteComp notes={note} />
								</View>
							</TouchableOpacity>
						)
					})}
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f2f3f7',
		paddingHorizontal: 20,
		paddingTop: 10,
		height: '100%',
	},
	headerWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	heading: {
		fontSize: 31,
		fontWeight: 'bold',
		color: '#48829E',
	},
	heading2: {
		fontSize: 15,
		marginTop: 10,
		color: '#7D9D9C',
	},
	MenuBtnWrapper: {
		flexDirection: 'row',
	},
	iconWrapper: {
		width: 41,
		height: 41,
		backgroundColor: '#fff',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 8,
	},
})

export default HomeScreen
