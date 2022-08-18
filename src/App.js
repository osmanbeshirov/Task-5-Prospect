
import { Route, Routes } from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header';
import './Styles/App.css'

function App() {

  // const [currentCategory, setCurrentCategory] = useState('')

  // const handleClick = (item) => {
  //   setCurrentCategory(item.categoryName)
  // }

  return (
    <div>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Content />}> </Route>
        </Routes>
        <Content />
      </div>
    </div>
  );
}

export default App;
