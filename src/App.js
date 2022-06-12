import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import Contact from './Pages/Home/Contact';
import Project from './Pages/Home/Project';
import SocialIcons from './Pages/Home/SocialIcons';

function App() {
  return (
    <div className='px-20'>
          <Navbar></Navbar>  
          <SocialIcons/>
 <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/home' element={<Home></Home>}></Route>
   <Route path='/about' element={<About></About>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/project' element={<Project/>}></Route>


 </Routes>

    </div>
  );
}

export default App;
