import Head from 'next/head'

import Nav from "./Nav"
import Style from "../styles/Layout.module.css"

export default function Layout({ children }) {
    return (
      <div className={Style.LayoutBody}>
        <Head>
          <title>DoorBell Ring</title>
          <meta name="description" content="Practice Website and School's project" />
          <link rel="icon" href="/bellIcon.ico" />
        </Head>
        
        <Nav />
  
        <main>
          {children}
        </main>
  
      </div>
    )
  }