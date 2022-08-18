import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../Styles/Content.css'

import union from '../Photos/Union.png'
import user from '../Photos/User.png'


export default function Content() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://inshorts.deta.dev/news?category=all')
            .then(res => setData(res.data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='content'>
            <div className='main-content'>
                {
                    data.map(post => (
                        <div key={post.id} div className='current-news-card'>
                            <div className='card-head'>
                                <img alt='back' src={post.imageUrl} />
                            </div>
                            <div className='card-body'>
                                <p className='card-body__title'>
                                    {post.title}
                                </p>
                                <hr className='card-body__line' />
                                <p className='card-body__content'>
                                    {post.content}
                                </p>
                            </div>
                            <div className='card-footer'>
                                <div className='card-footer__info'>
                                    <img alt='icon' src={union} />
                                    <span>{post.date}</span>
                                </div>
                                <div className='card-footer__info'>
                                    <img alt='icon' src={user} />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </div>
                    ))

                }

            </div>

        </div >

    )
}
