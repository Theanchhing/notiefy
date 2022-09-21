import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu'
import { Entypo } from '@expo/vector-icons'

const NoteComp = ({ navigation, notes }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const handleModalVisible = () => {
		console.log('3 dots clicked...')
		setModalVisible(!modalVisible)
		// modalVsbl === true ? setModalVisible(false) : setModalVisible(true);
	}

	return (
		<View style={styles.container}>
			<View style={[styles.containerHighlight, {backgroundColor: notes.colors}]}></View>
			<View style={styles.contentWrapper}>
				<View
					style={styles.titleWrapper}
				>
					<Text style={styles.title}>{notes.title}</Text>
					<View style= {{alignItems: 'flex-end'}}>
						<Menu>
							<MenuTrigger>
								<Entypo name="dots-three-horizontal" size={20} color="grey" /> 
							</MenuTrigger>
							<MenuOptions customStyles={optionsStyles}>
								<MenuOption onSelect={() => console.log('Pin selected...')}>
									<Text style={{color: '#354567', textAlign: 'center'}}>Pin</Text>
								</MenuOption>
								<View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}/>
								<MenuOption onSelect={() => console.log('Archive selected')} >
									<Text style={{color: '#354567', textAlign: 'center'}}>Archive</Text>
								</MenuOption>
								<View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}/>
								<MenuOption onSelect={() => console.log('Delete selected...')} >
									<Text style={{color: '#ff0000', textAlign: 'center'}}>Delete</Text>
								</MenuOption>
							</MenuOptions>
						</Menu>
					</View>
				</View>
				<View style={{ paddingTop: 10 }}>
					<Text style={{ color: '#354567', fontSize: 12 }} numberOfLines={3}>
						{notes.detail}
					</Text>

					<Text style={{ paddingTop: 15, fontSize: 10, color: '#c4c4c4' }}>
            Last Modified: 20th Jul 2020
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
	},
	title: {
		color: '#354567',
		fontSize: 17,
		fontWeight: '700',
	}
})

export default NoteComp
