import Head from 'next/head'

import Nav from "./Nav"

export default function Layout({ children }) {
    return (
      <div>
        <Head>
          <title>DoorBell Ring</title>
          <meta name="description" content="Practice Website and School's project" />
          <link rel="icon" href="/bellIcon.ico" />
        </Head>
        
        <Nav />
  
        <main>
          {children}
        </main>

        <footer>

        </footer>
  
      </div>
    )
  }