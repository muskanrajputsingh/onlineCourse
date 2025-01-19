import './App.css'
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import Contact from './pages/contact/Contact';
import Course from './components/course-card/Course';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
        </Routes>
    </>
  )
}

export default App
