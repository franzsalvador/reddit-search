import React from 'react'

export default function Posts({ data }) {
  return (
    <div className='post-container mt-5'>
      {data.length > 0 &&
        data.map((post, index) => {
          const url = `http://www.reddit.com${post.data.permalink}`
          return (
            <div className='post m-3' key={index}>
              <a className='link' href={url} >
                <div key={index}>
                  {post.data.title}
                </div>
              </a>
            </div>
          )
        })
      }
    </div>
  )
}
