import './App.css';
import { PheroClient, User } from './phero.generated';
import { useCallback, useEffect, useState } from "react";

const phero = new PheroClient(window.fetch.bind(this))

function App() {
  const getHello = useCallback(async () => {
      const message = await phero.helloWorldService.helloWorld('Jim');
      console.log(message);
  }, [])

  const [users, setUsers] = useState<User[]>()
  const [errorMessage, setErrorMessage] = useState<string>()
  let message = 'Phero Demo';
  const loadUser = useCallback(async () => {
    try {
     const userData = await phero.userService.getAllUsers()
     setUsers(userData)
    } catch (error) {
        setErrorMessage("whoops")
    }
  }, [])

  useEffect(() => {
    loadUser()
    getHello()
  }, [loadUser, getHello])

  if (errorMessage) return <p>{errorMessage}</p>
   if (!users) return <p>One moment please...</p>

  return (
        <div >
         <b>{message}</b> 
        {users.map((user: User) => (
          <div key={user.name}>
            <p>author:{user.name}</p>
            <p>age: {user.age}</p>
            <p>role: {user.role}</p>
          </div>
        ))}
      </div>
  )
}

export default App;
