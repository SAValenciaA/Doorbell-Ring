import navStyles from '../styles/Nav.module.css'
import BellIcon from '../components/BellIcon'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
        <BellIcon />
        <ul className={navStyles.navLinks}>
            <li className={navStyles.navlink}>
                <Link href="/">Inicio</Link>
            </li>
            <li className={navStyles.navlink}>
                Redes Sociales
            </li>
            <li className={navStyles.navlink}>
                <Link href="/Precios">Precios</Link>
            </li>
            <li className={navStyles.navlink}>
                <Link href="/Encuesta">Encuesta</Link>
            </li>
        </ul>
        <div className={navStyles.navlogsign}>
            <div className={navStyles.navlogin}>Login</div>
            <div className={navStyles.navsignup}>Sign Up</div>
        </div>
    </nav>
  )
}
