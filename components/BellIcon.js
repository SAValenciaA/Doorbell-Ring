import Navstyles from '../styles/Nav.module.css'
import bell1 from "../img/bell1.svg"
import bell2 from "../img/bell2.svg"

export default function BellIcon() {
  return (
    <div className={Navstyles.bellsIcon}>
        <img className={Navstyles.bellUnfilled} src={bell1.src} />
        <img className={Navstyles.bellFilled} src={bell2.src} />
    </div>
  )
}
