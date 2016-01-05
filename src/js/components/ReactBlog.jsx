"use strict";

import React from 'react'
import PostFeed from './PostFeed.jsx'
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
                data: this.state.posts
            })
        }.bind(this))
    }

    render() {
        return (
            <div>
                <h1>This is the React Blog.</h1>
                <PostFeed posts={this.state.posts} />
            </div>
        )
    }

}

export default ReactBlog
