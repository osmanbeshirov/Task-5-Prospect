import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/Heading.css'
import '../App'


export default function Header({ selectCategory, yeniPat }) {

    console.log(yeniPat)

    return (
        <div className='heading'>
            <h1 className='heading__title'>News</h1>

            <div className='heading__nav'>
                <ul className='main-list'>
                    <Link className='list-item' to={`/${yeniPat}`}><li><button onClick={() => selectCategory('all')}>All</button></li></Link>
                    <Link className='list-item' to={`/${yeniPat}`}><li><button onClick={() => selectCategory('business')}>Business</button></li></Link>
                    <Link className='list-item' to={`/${yeniPat}`}><li ><button onClick={() => selectCategory('sports')}>Sports</button></li></Link>
                    <Link className='list-item' to={`/${yeniPat}`}><li ><button onClick={() => selectCategory('world')}>World</button></li></Link>
                    <Link className='list-item' to={`/${yeniPat}`}><li ><button onClick={() => selectCategory('technology')}>Technology</button></li></Link>
                    <Link className='list-item' to={`/${yeniPat}`}><li ><button onClick={() => selectCategory('entertainment')}>Entertainment</button></li></Link>
                    <Link className='list-item' to={`/${yeniPat}`}><li ><button onClick={() => selectCategory('science')}>Science</button></li></Link>
                </ul>
            </div>
        </div>
    )
}
