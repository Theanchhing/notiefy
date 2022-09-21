import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import EmojiPicker from 'rn-emoji-keyboard'
import {
	Feather,
	Entypo,
}
	from '@expo/vector-icons'
import { useStoreActions } from 'easy-peasy'

const CreateTextNote = ({ navigation: { goBack, navigate } }) => {
	const addNote = useStoreActions(action => action.addNote)
	const [past, setPast] = useState([])
	const [future, setFuture] = useState([])

	const undo = function () {
		setFuture([...future, content])
		let tmp = [...past]
		setContent(tmp.pop())
		setPast(tmp)
	}

	const redo = function () {
		setPast([...past, content])
		let tmp = [...future]
		setContent(tmp.pop())
		setFuture(tmp)
	}
	const [content, setContent] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const [title, setTitle] = useState('')

	const handlePick = (emojiObject) => {
		setContent(content + emojiObject['emoji'])
	}
	const onChangeText = (new_content) => {
		setPast([...past, content])
		setContent(new_content)
	}
	const save = (content, title) => {
		addNote({title, content})
		navigate('HomeScreen')
	}
	return (

		<SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
			<View style={styles.bar}>
				<Pressable onPress={() => goBack()}>
					<Feather name='arrow-left' size={24} color='white' />
				</Pressable>

				<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
					<Pressable onPress={undo}>
						<MaterialIcons name='undo' size={24} color='white' />
					</Pressable>
					<Pressable onPress={() => setIsOpen(true)}>
						<Entypo style={{marginHorizontal: 10}} name='emoji-flirt' size={24} color='white' />
					</Pressable>
					<EmojiPicker
						onEmojiSelected={handlePick}
						open={isOpen}
						onClose={() => setIsOpen(false)}
					/>
					<Pressable onPress={redo}>
						<MaterialIcons name='redo' size={24} color='white' />
					</Pressable>
				</View>

				<TouchableOpacity onPress={() => content.length > 5 ? save(content, title) : null}>
					<Text style={{color: 'white', fontSize: 16}}>Save</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.noteBodyContainer}>
				<KeyboardAvoidingView>
					<TextInput
						style={styles.titleInputText}
						underlineColorAndroid="transparent"
						placeholder='Title'
						placeholderTextColor="grey"
						value={title}
						onChangeText={title => setTitle(title)}
					/>
					<TextInput
						style={styles.textArea}
						underlineColorAndroid="transparent"
						placeholder="Type something"
						placeholderTextColor="grey"
						value={content}
						onChangeText={content => onChangeText(content)}
						numberOfLines={20}
						multiline={true}
					/>
				</KeyboardAvoidingView>
			</View>
		</SafeAreaView >
	)
}

const styles = StyleSheet.create({
	bar: {
		backgroundColor: '#2AB674',
		flexDirection: 'row',
		height: 55,
		paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
	},
	noteBodyContainer: {
		paddingHorizontal: 15,
	},
	titleInputText: {
		fontSize: 20,
		marginTop: 20,
		paddingBottom: 5,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
	},
	textArea: {
		fontSize: 16,
		height: 150,
		justifyContent: 'flex-start',
		textAlignVertical: 'top',
		marginTop: 20,
	}
})

export default CreateTextNote

// =========================================================
