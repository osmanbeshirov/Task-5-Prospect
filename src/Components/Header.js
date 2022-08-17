import React from 'react'

import '../Styles/Heading.css'

export default function Header() {
    return (
        <div className='heading'>
            <h1 className='heading__title'>News</h1>

            <div className='heading__nav'>
                <ul className='main-list'>
                    <li className='list-item'><button>All</button></li>
                    <li className='list-item'><button>Business</button></li>
                    <li className='list-item'><button>Sports</button></li>
                    <li className='list-item'><button>World</button></li>
                    <li className='list-item'><button>Technology</button></li>
                    <li className='list-item'><button>Entertainment</button></li>
                    <li className='list-item'><button>Science</button></li>
                </ul>

            </div>
        </div>
    )
}
