import React, { useEffect, useState } from 'react';


import { useParams, Link, useNavigate } from 'react-router-dom'

import '../Styles/NewsDetail.css'
import '../Styles/Content.css'
import union from '../Photos/Union.png'
import user from '../Photos/User.png'

import clock from '../Photos/Clock.png'
import user2 from '../Photos/User2.png'
import axios from 'axios'


export default function NewsDetail({ currentPost, sendToCurrentPost }) {

  const params = useParams()

  const navigate = useNavigate()

  const [similarNews, setSimilarNews] = useState([])

  useEffect(() => {
    axios.get(`https://inshorts.deta.dev/news?category=${params.category}`)
      .then(res => setSimilarNews(res.data.data))
      .catch(err => console.log(err))
    if (!currentPost) {
      navigate('/all', { replace: true })
    }
  }, [params, currentPost, navigate])

  const newSimilarNews = similarNews.filter((item, index) => {
    return index < 3
  })


  const renderMyCurrentPost = () => {
    return (
      <div className='card-detail'>
        <div className='left-section'>
          <div className='left-section__image' style={{ backgroundImage: `url(${currentPost.imageUrl})` }}></div>

          <div className='status'>
            <div className='card-footer__info'>
              <img alt='icon' src={union} />
              <span>{currentPost.date}</span>
            </div>

            <div className='card-footer__info'>
              <img alt='icon' src={user} />
              <span>{currentPost.author}</span>
            </div>

          </div>
        </div>

        <div className='right-section'>
          <h3 className='post-title'>
            {currentPost.title}
          </h3>

          <hr className='card-title-line' />
          <div className='post-content'>
            <p>
              {currentPost.content}
            </p>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className='card-detail-container'>

      <div className='card-detail--cover'>

        {
          currentPost ? renderMyCurrentPost() : null
        }


        <div className='similar-news-container'>
          <div className='similar-news'>
            <h2 className='title'>Similar news</h2>

            <div className='news-maintain'>
              {
                newSimilarNews.map(news => (
                  <Link key={news.id} to={`/${params.category}/${news.id}`} style={{ textDecoration: 'none' }}>
                    <div className='news' onClick={() => sendToCurrentPost(news)}
                      style={{
                        background: `linear-gradient(0deg,rgba(0, 0, 0, 0.5),rgba(11, 15, 49, 0.5)), url(${news.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}>
                      <p className='news-title'>
                        {news.title}
                      </p>

                      <div className='status status--edit'>
                        <div className='card-footer__info'>
                          <img alt='icon' src={clock} />
                          <span>{news.date}</span>
                        </div>

                        <div className='card-footer__info'>
                          <img alt='icon' src={user2} />
                          <span>{news.author}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
