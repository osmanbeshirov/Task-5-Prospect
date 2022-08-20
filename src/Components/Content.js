import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../Styles/Content.css'

import union from '../Photos/Union.png'
import user from '../Photos/User.png'


export default function Content({ currentCategory }) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://inshorts.deta.dev/news?category=${currentCategory}`)
            .then(res => setData(res.data.data))
            .catch(err => console.log(err))
    }, [currentCategory])

    const newData = data.filter((item, index) => {
        return index < 6
    })

    console.log(newData)

    return (
        <div className='content'>
            <div className='main-content'>
                {
                    newData.map(post => (

                        <div key={post.id} className='current-news-card'>

                            <div className='card-head'>
                                <img alt='back' src={post.imageUrl} />
                            </div>
                            <div className='card-body'>
                                <p className='card-body__title'>
                                    {post.title}
                                </p>
                                <hr className='card-body__line' />
                                <p className='card-body__content'>

                                    {post.content.slice(0, 250)}
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
