import './App.css';
import Main from './Components/Main';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='flex flex-col overflow-x-hidden'>
    <div className='absolute w-screen'>
      <Navbar/>
    </div>
      <div className='min-h-screen'>
        <div className='absolute'>
            <Main/>
        </div>
        <div className='relative'>
          <About/>
        </div>
      </div>
    </div>
  );
}

export default App;
