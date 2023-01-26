import Searchbar from './Components/Searchbar';
import Clock from './Components/Clock';
import './App.css';
import IconBox from './Components/IconBox';
import Spotify from 'react-spotify-embed'
import {motion} from 'framer-motion'


function App() {
  return (
    <div className="bg-purple-800 h-screen bg-[url('Imgs/Background.gif')] bg-no-repeat bg-cover backdrop-opacity-100 overflow-y-hidden overflow-x-hidden">
    
      <h1 className='BigFont text-white text-5xl text-center pt-[5vh] floating pb-3'>Welcome Louis</h1>
        <Searchbar />
      <div className='w-[50vw] flex m-auto justify-center'>
        <Clock />
      </div>
      <div className='w-[100vw]'>
        <IconBox />
      </div>
      <div className='absolute top-1'> 
        <motion.div 
          animate={{
            y: 100,
          }}
          transition = {{ease: "", duration: 3, repeat: Infinity}}
        >
        <Spotify link='https://open.spotify.com/album/3kBwbHeZRaGymxZmbG8zMQ?si=aEvegGLAQJCwpOWk8-0p5A' />
        </motion.div>
      </div>

        <div className='text-white'>
          
        </div>
    </div>
  )
}

export default App;
