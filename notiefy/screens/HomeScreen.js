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
import Carousel from 'react-native-reanimated-carousel'
// import { normalNotes, pinnedNotes } from "../context/findPinnedNotes";
import PinnedNotes from '../components/PinnedNotes'
import NoteComp from '../components/NoteComp'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useStoreState, useStoreActions } from 'easy-peasy'

const HomeScreen = ({ navigation }) => {
	const notes = useStoreState((state) => state.notes)
	const pinnedNotes = useStoreState((state) => state.pinnedNotes)

	// console.log(pinnedNotes);
	// console.log(normalNotes);

	return (
		<SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight }}>
			<View style={styles.container}>
				<View style={styles.headerWrapper}>
					<Text style={styles.heading}>My Notes</Text>
					
				</View>
				{pinnedNotes.length > 0 && <PinnedNotes pinned={pinnedNotes} />}

				{notes.length > 0 ? (
					<View style={{ flex: 1, marginTop: 5 }}>
						<Text style={styles.headerAllNote}>All Notes</Text>
						<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={true}>
							{[...notes].reverse().map((note, index) => {
								return (
									<TouchableOpacity
										key={note.id}
										onPress={() =>
											navigation.navigate('NoteScreen', {
												note
											})
										}
									>
										<View style={{ paddingVertical: 5 }}>
											<NoteComp note={note} />
										</View>
									</TouchableOpacity>
								)
							})}
						</ScrollView>
					</View>

				) : (
					<TouchableOpacity onPress={() => navigation.navigate('CreateTextNote')}>
						<View style={styles.noNoteWrapper}>
							<Text style={styles.noNote}>Tap to add your first note</Text>
						</View>
					</TouchableOpacity>
				)}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f3f7',
		paddingHorizontal: 20,
		paddingTop: 10,
	},
	headerWrapper: {
		display: 'flex',		
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headerAllNote: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10
	},
	noNoteWrapper: {
		alignItems: 'center',
		height: '100%',
		paddingTop: '50%', 
	}
	,
	noNote: {
		fontSize: 24,
		color: 'grey'
	},
	heading: {
		fontSize: 31,
		fontWeight: 'bold',
		color: '#31d488',
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
