import React, { useEffect } from 'react'
import {View, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity,} from 'react-native'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { SvgXml } from 'react-native-svg'
import SketchCardComp from '../../components/sketchnote/SketchCardComp'

const SkecthDisplayScreen = ({navigation}) => {
	
	const sketchSvg = useStoreState((state) => state.sketchSvg)
	console.log(sketchSvg)
	// console.log(sketchSvg[0].title)
    
	return (
		<View >
			{sketchSvg.length === 0 && (
				<View style={styles.initailContainer}>
					<TouchableOpacity style={styles.addFirstSketch} onPress={() => navigation.navigate('SketchScreen')}>
						<Text style={styles.addFirstSketchText}>Tap to add your first sketch</Text>
					</TouchableOpacity>
				</View>)}
			{sketchSvg.length > 0 &&	(
				<FlatList
					style={styles.listContainer}
					data={sketchSvg}
					numColumns={2}
					inverted={true}
					keyExtractor={(item) => item.id}
					renderItem={({item}) =>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('SketchShowDetail', { item })
							}>
							<SketchCardComp xml={item.sketch.replace(/,/g, '\n')} title={item.title} id={item.id}/>
						</TouchableOpacity>
					}
				/>)
			}
		</View> 
		
	)
}

const styles = StyleSheet.create({
	listContainer: {
		alignSelf: 'center',
		marginTop: 5
	},
	addFirstSketch: {
		flexDirection: 'column', 
		alignItems: 'center',
		// justifyContent: 'center',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	addFirstSketchText: {
		fontSize: 24,
		marginTop: '60%',
		color: 'grey'
	}
})

export default SkecthDisplayScreen
