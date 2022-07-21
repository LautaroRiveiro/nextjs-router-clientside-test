import { NextPage } from 'next'
import { useRouter } from 'next/router'

const LoginPage: NextPage<{}> = () => {

  const router = useRouter()
  const login = () => {
    router.push('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginPage