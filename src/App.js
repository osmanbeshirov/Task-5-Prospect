import { Route, Routes } from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header';
import './Styles/App.css'

function App() {

  return (
    <div>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='news/category/:categoryName' element={<Content />}> </Route>
        </Routes>

      </div>
    </div>
  );
}


export default App;
