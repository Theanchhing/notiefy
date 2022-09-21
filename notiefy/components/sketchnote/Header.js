import React, { MutableRefObject, useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { SketchCanvasRef } from 'rn-perfect-sketch-canvas'
import { state } from '../../screens/sketchnote/store'
import Util from '../../screens/sketchnote/utils'
import { useStoreState, useStoreActions } from 'easy-peasy'
import sketches from '../../model/sketches'
import { useNavigation } from '@react-navigation/native'


const Header = ({ canvasRef }) => {
	const navigation = useNavigation()
	const sketchSvg = useStoreState((state) => state.sketchSvg)
	// console.log(sketchSvg)
	const addSk = useStoreActions((action) => action.addSketch)

	/**
   * Reset the canvas & draw state
   */
	const reset = () => {
		canvasRef.current?.reset()
		state.strokeColor = 'black'
		state.strokeWidth = 8
	}

	const save = () => {
		const image = canvasRef.current?.toSvg(500, 700)
		addSk(image)
		navigation.navigate('SketchDisplayScreen')
		reset()
	}

	const undo = () => {
		canvasRef.current?.undo()
	}

	const redo = () => {
		canvasRef.current?.redo()
	}

	return (
		<View
			style={{
				height: 50,
				width: '100%',
				paddingHorizontal: 12,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<View
				style={{
					flexDirection: 'row',
				}}
			>
				<TouchableOpacity
					activeOpacity={0.6}
					onPress={undo}
					style={[styles.button, { marginRight: 10 }]}
				>
					<Text style={styles.buttonText}>Undo</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={redo}
					activeOpacity={0.6}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Redo</Text>
				</TouchableOpacity>
			</View>

			<View
				style={{
					flexDirection: 'row',
				}}
			>
				<TouchableOpacity
					onPress={reset}
					activeOpacity={0.6}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Reset</Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.6}
					onPress={save}
					style={[styles.button, { marginLeft: 10 }]}
				>
					<Text style={styles.buttonText}>Save</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		backgroundColor: 'white',
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		...Util.getElevation(1),
	},
	buttonText: {
		color: 'black',
	},
})

export default Header