import { createStore } from 'easy-peasy'
import todos from './model/todos'
import notes from './model/notes'
import sketches from './model/sketches'


const store = createStore({...todos, ...notes, ...sketches})

export default store
