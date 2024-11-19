import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes , useLocation} from 'react-router-dom'
import { About } from './components/pages/about'
import { Work } from './components/pages/work'
import { Contact } from './components/pages/contact'
import { Home } from './Home'
import { Footer } from './Footer'
import { AnimatePresence } from 'framer-motion'





const App = () => {

  const location = useLocation();

  return (
    <div>

      <Navbar />
      
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />

    </div>
  )
}

export default App;
