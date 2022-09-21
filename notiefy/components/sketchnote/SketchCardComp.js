import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu'
import { Feather, Ionicons, Entypo } from '@expo/vector-icons'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { SvgXml } from 'react-native-svg'

const SketchCardComp = ({id, xml, title}) => {
	// const sketchSvg = useStoreState((state) => state.sketchSvg)
	const deleteSketch = useStoreActions((state) => state.deleteSketch)

	// console.log(sketchSvg)
	// console.log(title, xml)

	return (
		<View style={styles.container}>
			<View style={styles.svgWrapper}>
				<SvgXml style={{marginTop: 5}} xml={xml} width="100%" height="100%" />
			</View>
			<View style={styles.titleWrapper}>
				<Text style={styles.title}>
					{title}
				</Text>
			</View>
			<View style={styles.threeDotWrapper}>
				{/* <View style={{}}> */}
				<Menu>
					<MenuTrigger>
						<Entypo  name="dots-three-horizontal" size={20} color="grey" /> 
					</MenuTrigger>
					<MenuOptions customStyles={optionsStyles}>
						<MenuOption customStyles={optionStyles} onSelect={() => deleteSketch(id)} >
							<Text style={{color: '#ff0000', textAlign: 'center'}} >Delete</Text>
						</MenuOption>
					</MenuOptions>
				</Menu>
				{/* </View> */}
			</View>
	  	</View>
	)
}

const optionsStyles = {
	optionsContainer: {
		width: 90,
		borderRadius: 10,
		marginTop: 20
	}
}

const optionStyles = {
	optionWrapper: {
		padding: 8
	}
}

const styles = StyleSheet.create({
	titleWrapper: {
		width: '100%',
		height: '20%',
		backgroundColor: '#C0F7B7',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10
	},
	title: {
		fontSize: 16,
		color: '#141b29'
	},
	threeDotWrapper: {
		position: 'absolute',
		// backgroundColor: 'pink',
		alignItems: 'flex-end',
		top: 4,
		right: 10
	},
	svgWrapper: {
		width: '90%',
		height: '80%',
		// backgroundColor: 'pink',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		// justifyContent: 'space-between',
		marginVertical: 5,
		// marginTop: 50,
		marginHorizontal: 8,
		marginHorizontal: 8,
		// padding: 10,
		backgroundColor: '#fff',
		width: Dimensions.get('window').width*0.4,
		height: Dimensions.get('window').height*0.3,
		// backgroundColor: '#000',
		borderRadius: 10,
		shadowOffset: { width: 10, height: 10 },
		shadowRadius: 5,
		shadowColor: 'black',
		shadowOpacity: 0.5,
		elevation: 4
	}
})

export default SketchCardComp
