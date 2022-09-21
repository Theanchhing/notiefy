import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import NoteComp from '../../components/NoteComp'
import { useNavigation } from '@react-navigation/native'

const NoteFolderDisplay = ({ route }) => {
	const navigation = useNavigation()
	const { notes } = route.params

	return (
		<View style={styles.container}>
			<FlatList 
				data={notes}
				key={(note) => note.id}
				inverted={true}
				renderItem= { ({item}) => 
					<TouchableOpacity style={{marginHorizontal: 20, marginVertical: 5}} onPress={() => navigation.navigate('NoteScreen', {note: item})}>
						<NoteComp note={item} />
					</TouchableOpacity>
				}
			/>
		</View>
    

	)}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		// paddingHorizontal: 20,
	}
})

export default NoteFolderDisplay