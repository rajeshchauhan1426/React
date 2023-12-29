
import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserContextProvider from './Context/UserContextProvider'
import ViteImportAnalysis from 'vite-plugin-import-analysis';



function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App