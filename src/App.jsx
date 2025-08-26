import './App.css'
import RouterConfig from './config/RouterConfig'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <RouterConfig></RouterConfig>
      </div>
    </div>
  )
}

export default App
