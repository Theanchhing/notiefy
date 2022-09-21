import React, {useState} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { Ionicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons' 
import { useStoreState } from 'easy-peasy'


const FolderScreen = ({navigation}) => {
	const sketchSvg = useStoreState((state) => state.sketchSvg)
	const notes = useStoreState((state) => state.notes)
	const [pressIn, setPressIn] = useState(false)
	return (
		<View style={{marginTop: 3}}>
			<Pressable onPress={() => navigation.navigate('NoteFolderDisplay', { notes })}>
				<View style={styles.cardContainer}>
					<Ionicons name='text' size={24} color='#31d488' />
					<View style={{flex: 1, marginLeft: 5, marginRight: 5}}>
						<Text style={styles.title}>Text Note</Text>
					</View>
					<Text style={styles.info}>
						{notes.length}
					</Text>
					<MaterialIcons name="navigate-next" size={24} color="grey" />
	  			</View>
			  </Pressable>
			<Pressable onPress={() => navigation.navigate('SketchDisplayScreen')}>
				<View style={styles.cardContainer}>
					<MaterialCommunityIcons name="draw" size={26} color="#31d488" />
					<View style={{flex: 1, marginLeft: 5, marginRight: 5}}>
						<Text style={styles.title}>Sketch Note</Text>
					</View>
					<Text style={styles.info}>
						{sketchSvg.length}
					</Text>
					<MaterialIcons name="navigate-next" size={24} color="grey" />
	  			</View>
			  </Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	info: {
		opacity: 0.7,
		fontSize: 20
	},
	cardContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 5,
		marginHorizontal:5,
		padding: 10,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 10,
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 5,
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 3
	},
	title: {
		fontSize: 20,
		// fontWeight: '700',
		color: '#000',
		marginLeft: 5
	},
})

export default FolderScreen