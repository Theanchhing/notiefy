import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Carousel from 'react-native-reanimated-carousel'
import { Entypo } from '@expo/vector-icons'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'
import { useStoreActions } from 'easy-peasy'

const PinnedNotes = ({ pinned }) => {
	const navigation = useNavigation()
	const UnPinNote = useStoreActions((action) => action.UnPinNote)
	const removeNote = useStoreActions((action) => action.removeNote)
	
	return (
		<View>
			<Carousel
				width={400}
				height={150}
				data={pinned}
				autoPlay={false}
				autoPlayInterval={2000}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 60,
				}}
				// mode="parallax"
				renderItem={({ item }) => {
					return (
						
						<View style={styles.container}>
						
							<TouchableOpacity onPress={() =>
								navigation.navigate('NoteScreen', { note: item })
							}>
								<Text style={styles.title} numberOfLines={1}>
									{item.title}
								</Text>
							
								<Text style={styles.detail} numberOfLines={2}>
									{item.detail}
								</Text>

								<View style={styles.pinMarkWrapper}>
									<Entypo name="pin" size={22} color="black" />
									<Text style={styles.pinnedText}>Pinned</Text>
								</View>
							</TouchableOpacity>

							<View style={styles.threeDots}>
								<Menu>
									<MenuTrigger>
										<Entypo name="dots-three-horizontal" size={20} color="grey" /> 
									</MenuTrigger>
									<MenuOptions customStyles={optionsStyles}>
										<MenuOption onSelect={() => UnPinNote(item.id)}>
											<Text style={{color: '#354567', textAlign: 'center'}}>Unpin</Text>
										</MenuOption>
										<View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}/>
										<MenuOption onSelect={() => removeNote(item.id)} >
											<Text style={{color: '#ff0000', textAlign: 'center'}}>Delete</Text>
										</MenuOption>
									</MenuOptions>
								</Menu>
							</View>
						</View>
						
					)
				}}
			/>
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
	threeDots: {
		position: 'absolute',
		right: 15,
		top: 10
	},
	container: {
		width: Dimensions.get('window').width * 0.85,
		height: 130,
		backgroundColor: '#C5F3DE',
		marginTop: 10,
		marginRight: 20,
		borderRadius: 10,
		padding: 10,
	},
	title: {
		width: '88%',
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 5,
	},
	detail: {
		fontSize: 16,
	},
	pinMarkWrapper: {
		flexDirection: 'row',
		marginTop: 15,
	},
	pinnedText: {
		opacity: 0.6,
		marginLeft: 3,
		alignSelf: 'center',
	}
})

export default PinnedNotes
