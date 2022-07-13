import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './Main.module.css'
import Todo  from './Todo'
import ClipboardLogo from './../assets/Clipboard.svg'


const Main = () => {

  const [tasks, setTasks] = useState<string[]>([])

  const [newTaskText, setNewTaskText] = useState('')

  const [checkQtd, setCheckQtd] = useState(0)

  
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (tasks.includes(newTaskText)) {
      window.alert('Esta tarefa já existe')
      setNewTaskText('')
    } else {
      setTasks([...tasks, newTaskText])
      setNewTaskText('')
    }
     
    
    
    

    
  }


  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function deleteTask(commentToDelete:string) {
    const index = tasks.indexOf(commentToDelete)

    tasks.splice(index, index + 1)

    setTasks(tasks)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  const isNewTaskEmpty = newTaskText.length == 0

  return (
    <div className={styles.wrapper}>
      <div className={styles.mid}>
        <div className={styles.search}>
          <form onSubmit={handleCreateNewTask} className={styles.form}>
            <input 
            type="text" 
            placeholder='Adicionar uma tarefa'
            name='task'
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
            />
            <button type='submit' disabled={isNewTaskEmpty}>Criar<span><PlusCircle /></span></button>
          </form>
        </div>
        <div className={styles.todo}>
          <div className={styles.todoText}>
            <div className={styles.divCreated}>
              <p className={styles.created}>Tarefas criadas</p> 
              <span>{tasks.length}</span>
            </div>
            <div className={styles.divConcluded}>
              <p className={styles.concluded}>Concluídas</p> 
              <span>{checkQtd}</span>
            </div>
          </div>
          {tasks.length == 0 ? 
            <div>
              <div className={styles.withoutItens}>
                <img src={ClipboardLogo} />
                <p className={styles.textUp}>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.textDown}>Crie tarefas e organize seus itens a fazer</p>
              </div>
              
            </div>
            :
            <div className={styles.itens}>
            {
              tasks.map(function(item, index) {
                return <Todo task={item} key={index} onDeleteTask={deleteTask} setCheckQtd={setCheckQtd}/>
              })
            }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Main