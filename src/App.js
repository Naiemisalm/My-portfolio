import ParticalsBackground from './Pages/Particals/ParticalsBackground';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='px-20'>
          <Navbar></Navbar>
      {/* <ParticalsBackground></ParticalsBackground> */}
  
 <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/home' element={<Home></Home>}></Route>
   <Route path='/about' element={<About></About>}></Route>
 </Routes>

    </div>
  );
}

export default App;
