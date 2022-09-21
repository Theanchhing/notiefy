import * as React from 'react'
import { useRef } from 'react'
import {
	StyleSheet,
	SafeAreaView,
	View,
	useWindowDimensions, StatusBar
} from 'react-native'
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas'
import { useSnapshot } from 'valtio'
import Header from '../../components/sketchnote/Header'
import Toolbar from '../../components/sketchnote/Toolbar'
import { state } from './store'
import { useStoreState, useStoreActions } from 'easy-peasy'


function SketchScreen(props) {
	const sketchSvg = useStoreState((state) => state.sketchSvg)

	const { width } = useWindowDimensions()
	let canvasRef = useRef(null)
	const snap = useSnapshot(state)

	return (
		<SafeAreaView style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
			<View
				style={{
					backgroundColor: '#f0f0f0',
					flex: 1,
					alignItems: 'center',
				}}
			>
				<Header canvasRef={canvasRef} />
				<View
					style={{
						width: width - 24,
						flexGrow: 1,
						backgroundColor: '#ffffff',
						borderRadius: 10,
						overflow: 'hidden',
						elevation: 1,
					}}
				>
					<SketchCanvas
						strokeColor={snap.strokeColor}
						strokeWidth={snap.strokeWidth}
						ref={canvasRef}
						containerStyle={styles.container}
					/>
				</View>

				<Toolbar />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	box: {
	  width: 60,
	  height: 60,
	  marginVertical: 20,
	},
})

export default SketchScreen