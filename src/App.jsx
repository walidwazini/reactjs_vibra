import viteLogo from '/vite.svg'
import Explore from './pages/Explore'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const App = () => {

  return (
    <div className='relative flex' >
      {/* ___SIDEBAR___ */}
      <Sidebar />

      {/* ___SEARCH BAR___ */}
      <div className='flex-1 flex flex-col bg-red-300 ' >
        <div>Search Bar</div>

        <div className='px-6 bg-blue-700' >
          <div className='flex-1 h-fit pb-40' >
            <Routes>
              <Route path="/" element={<Explore />} />

            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
