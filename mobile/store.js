import { createStore } from 'easy-peasy'
import todos from './model/todos'
import notes from './model/notes'


const store = createStore({...todos, ...notes})

export default store
