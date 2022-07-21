import { NextPage } from 'next'
import { useRouter } from 'next/router'

const ProfilePage: NextPage<{}> = () => {
  const router = useRouter()

  const logout = () => {
    router.push('/login')
  }

  return (
    <div>
      <h1>ProfilePage</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default ProfilePage