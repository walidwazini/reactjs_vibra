import viteLogo from '/vite.svg'
import Explore from './pages/Explore'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Sidebar, MusicPlayer } from './components'

const App = () => {
  const { activeSong } = useSelector(state => state.player)

  return (
    <div className='relative flex' >
      {/* ___SIDEBAR___ */}
      <Sidebar />

      {/* ___SEARCH BAR___ */}
      <div className='flex-1 flex flex-col bg-red-300 ' >
        <div>Search Bar</div>
        <div className='px-6 bg-blue-700 max-h-full ' >
          <div className='flex-1 h-fit pb-40' >
            <Routes>
              <Route path="/" element={<Explore />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* ___ MUSIC PLAYER ___ */}
      {activeSong?.title && (
        <div className={`absolute h-28 bottom-0 left-0 right-0 flex animate-slideup 
        bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-xl z-10`} >
          <MusicPlayer />
        </div>
      )}

    </div>
  )
}

export default App
