import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu'
import { Entypo } from '@expo/vector-icons'
import axios from 'axios'
import { useStoreActions } from 'easy-peasy'
import moment from 'moment'

const NoteComp = ({ navigation, note }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const pinNote = useStoreActions((action) => action.pinNote)
	const removeNote = useStoreActions((action) => action.removeNote)

	const handleModalVisible = () => {
		setModalVisible(!modalVisible)
	}

	return (
		<View style={styles.container}>
			<View style={[styles.containerHighlight, {backgroundColor: note.colors}]}></View>
			<View style={styles.contentWrapper}>
				<View
					style={styles.titleWrapper}
				>
					{ note.title === '' ? 
						<Text style={styles.noTitle} numberOfLines={1} >No Title</Text>
						:
						<Text style={styles.title} numberOfLines={1} >{note.title}</Text>
					}
					<View style= {{alignItems: 'flex-end'}}>
						<Menu>
							<MenuTrigger>
								<Entypo name="dots-three-horizontal" size={20} color="grey" /> 
							</MenuTrigger>
							<MenuOptions customStyles={optionsStyles}>
								<MenuOption onSelect={() => pinNote(note.id)}>
									<Text style={{color: '#354567', textAlign: 'center'}}>Pin</Text>
								</MenuOption>
								<View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}/>
								<MenuOption onSelect={() => removeNote(note.id)} >
									<Text style={{color: '#ff0000', textAlign: 'center'}}>Delete</Text>
								</MenuOption>
							</MenuOptions>
						</Menu>
					</View>
				</View>
				<View style={{ paddingTop: 10 }}>
					<Text style={{ color: '#354567', fontSize: 12 }} numberOfLines={3}>
						{note.detail}
					</Text>
				</View>
				<View style={styles.dateWrapper}>
					<Text style={styles.date}>
						Last Updated: {moment(note.last_updated).format('MMM Do YY')}
					</Text>
				</View>
			</View>
			
			
		</View>
	)
}

const optionsStyles = {
	optionsContainer: {
		width: 90,
		borderRadius: 10,
		marginTop: 20,
	}
}

const styles = StyleSheet.create({
	container: {
		height: 130,
		backgroundColor: '#fff',
		borderRadius: 5,
		position: 'relative',
		flexDirection: 'row',
	},
	containerHighlight: {
		width: 7,
		height: 130,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
	},
	contentWrapper: {
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	titleWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// elevation: 3,
		// backgroundColor: 'pink'

	},
	noTitle: {
		color: '#cecece',
		fontSize: 17,
		fontWeight: '700',
	},
	title: {
		color: '#354567',
		fontSize: 17,
		width: '90%',
		fontWeight: '700',
		// backgroundColor: 'pink'

	},
	dateWrapper: {
		position: 'absolute',
		left: 20,
		bottom: 15,
	},
	date: {
		fontSize: 10,
		color: '#c4c4c4'
	}
})

export default NoteComp
