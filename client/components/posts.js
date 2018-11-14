import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

function Posts(props) {
  const { subreddits } = props
  return (
    <div className='post-container mt-5' >
      {
        subreddits.length > 0 &&
        subreddits.map((post, index) => {
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

Posts.propTypes = {
  subreddits: PropTypes.array
}

const mapStateToProps = (state) => ({ subreddits: state.subreddits })

export default connect(mapStateToProps)(Posts)
