import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.tsx';
import WordsPage from './pages/WordsPage/WordsPage.tsx';
import AddWordsPage from './pages/AddWordsPage/AddWordsPage.tsx';
import LearnWordsPage from './pages/LearnWordsPage/LearnWordsPage.tsx';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/words' element={<WordsPage />} />
        <Route path='/words/add' element={<AddWordsPage />} />
        <Route path='/learn' element={<LearnWordsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
