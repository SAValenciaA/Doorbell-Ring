import Style from '../styles/Layout.module.css'
import BellIcon from '../components/BellIcon'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={Style.nav}>
        <ul className={Style.navLinks}>
            <li>
                <BellIcon />    
            </li>
            <li className={Style.navlink}>
                <Link href="/">Inicio</Link>
            </li>
            <li className={Style.navlink}>
                Redes Sociales
            </li>
            <li className={Style.navlink}>
                <Link href="/Precios">Precios</Link>
            </li>
            <li className={Style.navlink}>
                <Link href="/Encuesta">Encuesta</Link>
            </li>
        </ul>
        <div className={Style.navlogsign}>
            <div className={Style.navlogin}>Login</div>
            <div className={Style.navsignup}>Sign Up</div>
        </div>
    </nav>
  )
}
