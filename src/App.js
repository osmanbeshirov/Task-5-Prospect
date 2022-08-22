import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header';
import NewsDetail from './Components/NewsDetail';
import './Styles/App.css'

function App() {

  const [currentNews, setCurrentNews] = useState();

  const sendPost = (post) => {
    setCurrentNews(post)
  }


  return (
    <div>
      <div className='container'>
        <Header />

        <Routes>
          <Route path='/' element={<Navigate to='/all' />} />

          <Route path='/:category' element={<Content sendToCurrentPost={sendPost} />} />

          <Route path={'/:category/:postId'} element={<NewsDetail currentPost={currentNews} sendToCurrentPost={sendPost} />} />

        </Routes>

      </div>
    </div>
  );
}


export default App;
