import { useState } from 'react'
import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Todo.module.css'

interface TaskProps {
  task: string
  onDeleteTask: (task:string) => void
  setCheckQtd: React.Dispatch<React.SetStateAction<number>>
}

const Todo = ({ task, onDeleteTask, setCheckQtd }: TaskProps) => {

  const [check, setNewCheck] = useState(false)

  

  
  function handleToggleCheck() {
    if (check == false) {
      setNewCheck(true)
      setCheckQtd((prev) => prev + 1)
    } 
    if (check == true) {
      setNewCheck(false)
      setCheckQtd((prev) => prev -1)
    }
  }

  function handleDeleteTask() {
    if (check == true) {
      setNewCheck(false)
      setCheckQtd(prev => prev -1)
    }
    onDeleteTask(task)
  }

  return (
    
    <div className={styles.wrapper}>
        {check == false ?
          <button className={styles.notToggled} onClick={handleToggleCheck}><Circle size={24}/></button>
          :
          <button className={styles.toggled} onClick={handleToggleCheck}><CheckCircle size={24} weight='fill'/></button>
        }
        <p className={check ? styles.text1 : styles.text2}>
          {task}  
        </p>
        <button className={styles.trash} onClick={handleDeleteTask}><Trash size={24}/></button>  
    </div>

  )
}

export default Todo