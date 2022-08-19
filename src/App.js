import { useState } from 'react';
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
        <Header selectCategory={selectCategory} />
        <Content currentCategory={category} />
      </div>
    </div>
  );
}


export default App;
