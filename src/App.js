import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header';
import './Styles/App.css'

function App() {

  const [category, setCategory] = useState('all')

  const selectCategory = (categoryName) => {
    setCategory(categoryName)
  }



  return (
    <div>
      <div className='container'>
        <Header selectCategory={selectCategory} yeniPat={category} />
        <Routes>
          <Route path='/' element={<Content currentCategory={category} />} />
          <Route path={`/${category}`} element={<Content currentCategory={category} />} />
        </Routes>

      </div>
    </div>
  );
}


export default App;
