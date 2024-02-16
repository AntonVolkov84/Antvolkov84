import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import EnglishTest from './components/EnglishTest';
import Result from './components/Result';
import MathTest from './components/MathTest';
import LogicaTest from './components/LogicaTest';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
 return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="about" element={<About />} />
              <Route path="english" element={<EnglishTest />} />
              <Route path="math" element={<MathTest />} />
              <Route path="logica" element={<LogicaTest />} />
              <Route path="result" element={<Result />} />
              <Route index element={<Home />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
