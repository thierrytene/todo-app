import NoteProvider from './Provider/NoteProvider'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'


function App() {
  return (
    <NoteProvider>
      <TodoForm/>
      <Todos/>
    </NoteProvider>
  )
}

export default App
