import Header from './components/Header'
import Main from './components/Main'
import './global.css'

import styles from './App.module.css'

function App() {
  

  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  )
}

export default App
