import { action, computed } from 'easy-peasy'
import uuid from 'uuid'
export default {
	sketchSvg: [],
	addSketch: action((state, sketch) => {
		const titleLen = state.sketchSvg.length+1
		let sk = { id: uuid.v4(), title: 'Sketch '+titleLen, sketch: sketch}
		// console.log(state.sketchSvg)
		state.sketchSvg.push(sk)
		// console.log(typeof(state.sketchSvg))
	}),
	deleteSketch: action((state, payload) => {
		state.sketchSvg = state.sketchSvg.filter(x => x.id !== payload)
	}),
}