import { useState } from 'react'
import Login from './componants/Login'
import Profile from './componants/Profile'
import { UserProvider } from './componants/UserContext.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <div>
          <Login />
          <Profile />
        </div>
      </UserProvider>
    </>
  )
}

export default App
