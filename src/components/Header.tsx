import styles from './Header.module.css'
import Logo from './../assets/Logo.svg'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <a href="#"><img src={Logo}/></a>
    </div>
  )
}

export default Header