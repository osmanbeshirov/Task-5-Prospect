import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/Heading.css'
import '../App'


export default function Header( ) {

    return (
        <div className='heading'>
            <h1 className='heading__title'>News</h1>

            <div className='heading__nav'>
                <ul className='main-list'>
                    <Link className='list-item' to='/all'><li><button >All</button></li></Link>
                    <Link className='list-item' to='/business'><li><button >Business</button></li></Link>
                    <Link className='list-item' to='/sports'><li ><button >Sports</button></li></Link>
                    <Link className='list-item' to='/world'><li ><button >World</button></li></Link>
                    <Link className='list-item' to='/technology'><li ><button >Technology</button></li></Link>
                    <Link className='list-item' to='/entertainment'><li ><button >Entertainment</button></li></Link>
                    <Link className='list-item' to='/science'><li ><button >Science</button></li></Link>
                </ul>
            </div>
        </div>
    )
}
