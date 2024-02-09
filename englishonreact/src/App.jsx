import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import EnglishTest from './components/EnglishTest';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [right, setRight] = useState(0);
  const [allAnswer, setAllAnswer] = useState(0);
  function result(right, allAnswer) {
    setRight(right);
    setAllAnswer(allAnswer);
  }
  console.log(right, allAnswer);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="about" element={<About />} />
            <Route path="english" element={<EnglishTest result={result} />} />
            <Route path="result" element={<Result />} />
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
