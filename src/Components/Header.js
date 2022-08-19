import React from 'react'

import '../Styles/Heading.css'
import '../App'
import { Link } from 'react-router-dom'


export default function Header() {


    return (
        <div className='heading'>
            <h1 className='heading__title'>News</h1>

            <div className='heading__nav'>
                <ul className='main-list'>
                    <Link to={`/news/category/all`}><li className='list-item'><button>All</button></li></Link>
                    <Link to={`/news/category/business`}><li className='list-item'><button>Business</button></li></Link>
                    <Link to={`/news/category/sports`}> <li className='list-item'><button>Sports</button></li></Link>
                    <Link to={`/news/category/worlds`}><li className='list-item'><button>World</button></li> </Link>
                    <Link to={`/news/category/technology`}><li className='list-item'><button>Technology</button></li></Link>
                    <Link to={`/news/category/entertainment`}><li className='list-item'><button>Entertainment</button></li></Link>
                    <Link to={`/news/category/science`}> <li className='list-item'><button>Science</button></li></Link>
                </ul>

            </div>
        </div>
    )
}
