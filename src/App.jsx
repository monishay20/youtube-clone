// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Routes } from 'react-router-dom'

// const App = () => {
//   return ( 
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/video/:categoryId/:videoId' element={<Video/>} />
//       </Routes>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'

const App = () => {

  const [sidebar,setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App




