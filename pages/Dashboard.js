import { useEffect } from "react"
import { PrismaClient } from "@prisma/client"

export async function getStaticProps() {

  const prisma = new PrismaClient()

  const props = await prisma.answer.findMany()


  return {

    props : { props }

  }

}
export default function Dashboard({props}) {
  useEffect(() => {
    console.table(props)
  }, [])
  return (
    <>{JSON.stringify(props)}</>
  )
}
