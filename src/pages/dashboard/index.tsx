import { signOut, useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Dashboard() {
  const { data } = useSession()
  const router = useRouter()

  console.log(data)

  const handleSignOut = async () => {
    await signOut({ redirect: false })

    await router.push("/")
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid h-full place-items-center">
        {data?.user.email}
        <button onClick={handleSignOut}>LOGOUT</button>
      </main>
    </>
  )
}
