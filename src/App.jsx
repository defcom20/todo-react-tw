import { useState } from 'react'
import ListTableTodo from './components/listTableTodo'
import InputNota from './components/inputNota'

function App() {
  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    const value = e.target.value
    setTitle(value)
  }

  const handleSubmit = () => {
    if (title) {
      const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
      }
      const temp = [...todos]
      temp.unshift(newTodo)
      setTodos(temp)
      setTitle("")
    }
  }

  const handleUpdate = (idNota, newData) => {
    const temp = [...todos]
    const item = temp.find((item) => item.id === idNota)
    item.title = newData
    setTodos([...temp])
  }

  const handleDelete = (idNota) => {
    const temp = [...todos]
    const newTodos = temp.filter((item) => item.id !== idNota)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="grid justify-items-center items-center h-screen">
        <div className="grid grid-cols-1 gap-4 w-[90%] md:w-[50%] ">
          <div className='col-span-1'>
            <InputNota addNota={handleSubmit} inputChange={handleChange} title={title} />
          </div>
          <div className="col-span-1 flex items-center justify-center shadow-lg shadow-green-200 rounded-lg">
            <ListTableTodo data={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
