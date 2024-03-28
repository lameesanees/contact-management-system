import { Routes, Route } from 'react-router-dom'
import './App.css'
import Add from './Components/Add'
import Admin from './Components/Admin'
import Edit from './Components/Edit'
import View from './Components/View'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PageNotFound from './Components/PageNotFound'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:cId' element={<Edit />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />

    </>
  )

}

export default App
