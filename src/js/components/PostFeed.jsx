"use strict"

import React from 'react'
import BlogPost from './BlogPost.jsx'

class PostFeed extends React.Component {

    render() {
        let postNodes = this.props.posts.map((post, index) => {
            return (
                <BlogPost
                    key={index}
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    datetime={post.datetime}
                    keywords={post.keywords} />
            )
        })

        return (
            <div className='postfeed'>
                <h2>Post Feed</h2>
                {postNodes}
            </div>
        )
    }

}

export default PostFeed
