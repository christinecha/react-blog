"use strict"

import React from 'react'
import BlogPosts from './BlogPost.jsx'

class PostFeed extends React.Component {

    render() {
        console.log(this.props.posts)
        let postNodes = this.props.posts.map((post) => {
            return (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        })

        return (
            <div>
                <h2>Post Feed</h2>
                {postNodes}
            </div>
        )
    }

}

export default PostFeed
