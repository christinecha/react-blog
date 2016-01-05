"use strict";

import React from 'react'

class BlogPost extends React.Component {

    render() {
        return (
            <div>
                <h3>Post Title</h3>
                <p>This is a blog post.</p>
            </div>
        )
    }

}

class ReactBlog extends React.Component {

    render() {
        return (
            <div>
                <h1>This is the React Bl</h1>
                <BlogPost />
            </div>
        )
    }

}

export default ReactBlog
