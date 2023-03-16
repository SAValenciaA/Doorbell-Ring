import { useEffect } from "react"

export default function Dashboard({props}) {

  const handleFetch = async () =>  {
    const data = await fetch('/api/Get', {
      method: 'GET'
    }).then(res => res.text().then(r => console.log(r)))
  }
  useEffect(() => {
    handleFetch()

  }, [])

  return (
    <></>
  )
}
