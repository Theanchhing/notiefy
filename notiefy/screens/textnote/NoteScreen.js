import React from 'react'
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Dimensions,
	StatusBar,
	ScrollView,
	TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const NoteScreen = ({ route }) => {
	const navigation = useNavigation()

	const { note } = route.params
	// console.log(note)

	return (
		<SafeAreaView>
		
			<View style={styles.container}>
				<View style={styles.header}>
					<Ionicons
						name="chevron-back-sharp"
						size={24}
						color="#454545"
						onPress={() => navigation.goBack()}
					/>
					<TouchableOpacity onPress={() => navigation.navigate('EditTextNote', {note})}>
						<MaterialCommunityIcons 
							style={{marginRight: 5}}
							name="pencil"
							size={24}
							color="#565656"
						/>
					</TouchableOpacity>
				</View>
				<ScrollView>
					<View style={[styles.noteContainer, {backgroundColor: note.colors}]}>
						<View style={styles.innerNoteContainer}>
							{ note.title === '' ? 
								<Text style={styles.noTitle} >No Title</Text>
								:
								<Text style={styles.titleText} >{note.title}</Text>
							}
						

							<View style={styles.breakLine} />

							<Text style={styles.detailText}>{note.detail}</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
	},
	header: {
		display: 'flex', 
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
		marginBottom: 10,
		alignItems: 'center',
		backgroundColor: '#dfdfdf',
	},
	noteContainer: {
		marginTop: 10,
		marginBottom: 40,
		borderRadius: 8,
		marginHorizontal: 10,
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 5,
		shadowColor: '#787878',
		shadowOpacity: 1,
		elevation: 3
	},
	innerNoteContainer: {
		backgroundColor: 'white',
		marginHorizontal: 6,
		borderRadius: 8,
		padding: 10
	},
	breakLine: {
		borderBottomColor: '#dfdfdf',
		borderBottomWidth: 1,
		marginTop: 10,
		marginBottom: 15
	},
	noTitle: {
		color: '#cecece',
		fontSize: 20,
		fontWeight: '700'
	},
	titleText: {
		color: '#354567',
		fontSize: 20,
		fontWeight: '700'
	},
	detailText: {
		color: '#354567',
		fontSize: 17,
		textAlign: 'justify',
		paddingBottom: 10
	},
})

export default NoteScreen
