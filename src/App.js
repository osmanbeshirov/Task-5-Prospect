import { Routes, Route } from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header';
import './Styles/App.css'

function App() {

  return (
    <div>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Content currentCategory={'all'} />} />
          <Route path='/:category' element={<Content />} />
        </Routes>


      </div>
    </div>
  );
}


export default App;
