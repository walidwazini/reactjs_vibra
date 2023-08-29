import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Explore, SongDetails } from './pages'

import { Sidebar, MusicPlayer, TopPlay } from './components'

const App = () => {
  const { activeSong } = useSelector(state => state.player)

  return (
    <div className='relative flex' >
      {/* ___SIDEBAR___ */}
      <Sidebar />
      {/* ___SEARCH BAR___ */}
      <div className='flex-1 flex flex-col bg-blue-700 ' >
        <div>Search Bar</div>
        <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse' >
          <div className='flex-1 h-fit pb-40' >
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/songs/:songId" element={<SongDetails />} />
            </Routes>
          </div>
          <div>
            {/* <TopPlay /> */}
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
