import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import MainLayout from './components/MainLayout';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';
import Notfound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="courses" element={<Courses />}></Route>
            <Route path="courses/:slug" element={<SingleCourse />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
