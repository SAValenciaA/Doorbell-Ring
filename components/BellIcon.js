import Style from '../styles/Layout.module.css'
import OriginalLogo from "../img/OriginalLogo.svg"
import Image from 'next/image'

export default function BellIcon() {
  return (
    <div className={Style.bellsIcon}>
        <Image width="70" height="70" className={Style.bellLogo} src={OriginalLogo.src} />
    </div>
  )
}
