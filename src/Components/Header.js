import React from 'react'

import '../Styles/Heading.css'
import '../App'


export default function Header({ selectCategory }) {

    return (
        <div className='heading'>
            <h1 className='heading__title'>News</h1>

            <div className='heading__nav'>
                <ul className='main-list'>
                    <li className='list-item'><button onClick={() => selectCategory('all')}>All</button></li>
                    <li className='list-item'><button onClick={() => selectCategory('business')}>Business</button></li>
                    <li className='list-item'><button onClick={() => selectCategory('sports')}>Sports</button></li>
                    <li className='list-item'><button onClick={() => selectCategory('world')}>World</button></li>
                    <li className='list-item'><button onClick={() => selectCategory('technology')}>Technology</button></li>
                    <li className='list-item'><button onClick={() => selectCategory('entertainment')}>Entertainment</button></li>
                    <li className='list-item'><button onClick={() => selectCategory('science')}>Science</button></li>
                </ul>

            </div>
        </div>
    )
}
