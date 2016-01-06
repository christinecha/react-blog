"use strict";

import React from 'react'
import PostFeed from './PostFeed.jsx'
import PostEditor from './PostEditor.jsx'
import Firebase from 'firebase'

const ref = new Firebase("https://reactblog.firebaseio.com/")

class ReactBlog extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount () {
        ref.child("posts").on("child_added", function(snapshot) {
            this.state.posts[snapshot.key()] = snapshot.val()
            this.setState({
                posts: this.state.posts
            })
        }.bind(this))
    }

    render() {
        return (
            <div>
                <h1>TINYBLOG</h1>
                <div className="blog-container">
                    <PostFeed posts={this.state.posts} />
                    <PostEditor />
                </div>
            </div>
        )
    }

}


export default ReactBlog
