import React, { useEffect, useState } from 'react'
import {SafeAreaView, View, StyleSheet, Text, StatusBar} from 'react-native'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu'
import { Feather, Ionicons, Entypo } from '@expo/vector-icons'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { SvgXml } from 'react-native-svg'

const SketchShowDetail = ({route, navigation}) => {
	// const [svg, setSvg] = useState([])
	const { item } = route.params
	// const sketchSvg = useStoreState((state) => state.sketchSvg)
	// const svg = sketchSvg.find((svg) => svg.id === id)
	const deleteSketch = useStoreActions((state) => state.deleteSketch)

	const handleDelete = (id) => {
		// navigation.navigate('TodoListScreen')
		deleteSketch(id)
		navigation.navigate('SketchDisplayScreen')
	}

	// const a = svg.sketch.replace(/,/g, '\n').replace(/fill="none"/g, 'fill="black"')
	// console.log(a)

	return (
		<SafeAreaView style={{ marginTop: StatusBar.currentHeight, }}>
			<View style={styles.headerWrapper}>
				<View style={styles.headingContainer}>
					<Ionicons
						name="chevron-back-sharp"
						size={26}
						color="grey"
						opacity={0.8}
						onPress={() => navigation.goBack()}
					/>

					<View>
						<Text style={[styles.title]} numberOfLines={1}>{item.title}</Text>
					</View>
				</View>
				<Menu>
					<MenuTrigger>
						<Entypo style={{ right: 10, transform: [{ rotate: '90deg'}] }} name="dots-three-horizontal" size={20} color="grey" /> 
					</MenuTrigger>
					<MenuOptions customStyles={optionsStyles}>
						<MenuOption customStyles={optionStyles} onSelect={() => handleDelete(item.id)} >
							<Text style={{color: '#ff0000', textAlign: 'center'}} >Delete</Text>
						</MenuOption>
					</MenuOptions>
				</Menu>
			</View>
			<View style={{ height: '92%'}}>
				<SvgXml xml={item.sketch.replace(/,/g, '\n').replace(/fill="none"/g, 'fill="black"')} width="100%" height="100%" />
			</View>
		</SafeAreaView> 
		
	)
}

const optionsStyles = {
	optionsContainer: {
		width: 100,
		borderRadius: 10,
		marginTop: 20
	}
}

const optionStyles = {
	optionWrapper: {
		padding: 10
	}
}

const styles = StyleSheet.create({
	headerWrapper: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
		// zIndex: 100
	},
	headingContainer: {
		height: '100%',
		width: '82%',
		flexDirection: 'row',
		alignItems: 'center',
		left: 5
	},
	title: {
		marginLeft: 5,
		fontSize: 20,
		// fontWeight: 'bold',
		color: '#354567',
	},
})

export default SketchShowDetail
