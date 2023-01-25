import Searchbar from './Components/Searchbar';
import Clock from './Components/Clock';
import './App.css';
import IconBox from './Components/IconBox';
import Spotify from 'react-spotify-embed'
import {motion} from 'framer-motion'


function App() {
  return (
    <div className="bg-purple-800 h-screen bg-[url('Imgs/Background.gif')] bg-no-repeat bg-cover backdrop-opacity-100 overflow-y-hidden overflow-x-hidden">
    
      <h1 className='BigFont text-white text-5xl text-center pt-24 floating pb-3'>Welcome Louis</h1>
        <Searchbar />
      <div className='w-[50vw] flex m-auto justify-center'>
        <Clock />
      </div>
      <div className='w-[80vw] m-auto'>
        <IconBox />
      </div>
      <div className='sticky top-[100vh]'> 
        <Spotify link='https://open.spotify.com/playlist/37i9dQZF1F0sijgNaJdgit?si=c8532c1530c64ba0' />
      </div>

        <div className='text-white'>
         
          <motion.div
            animate={{x : 1750}}
            transition = {{ duration: 2}}
          />
        </div>
    </div>
  )
}

export default App;
