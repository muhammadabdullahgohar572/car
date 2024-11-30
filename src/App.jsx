
import { Route, Routes } from 'react-router'
import './App.css'
import { Navbar } from './assets/pages/Navbar'
import CreateUsPage from './assets/pages/contectus'

function App() {
  

  return (
    <>
    {/* https://nafeesrentacarpakistan.pk/contact/ */}
      <Navbar/>
      {/* Your component here */}
      <Routes>
        <Route path="/" />
      
        <Route path="/contactus" element={<CreateUsPage/>} />
      </Routes>
    </>
  )
}

export default App
