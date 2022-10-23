import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addcourse from './Components/addCourses/Addcourse';
import Courses from './Components/courses/Courses';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>

    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
        <Route path="/courses" element={<Courses />}/>
        <Route path='/addcourse' element={<h1>Hello</h1>}/>
        <Route path='/deletecourse' element={<h1>deleted</h1>}/>
        <Route path='/updatecourse' element={<h1>updated</h1>}/>
      </Routes>
    </BrowserRouter>
      
        
    </div>
    </>
  );
}

export default App;
