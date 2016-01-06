"use strict"

import React from 'react'
import Firebase from 'firebase'

const ref = new Firebase("https://reactblog.firebaseio.com/")

class PostEditor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            keywords: ["fun"],
            author: 'christinecha',
            datetime: ''
        }
    }

    handlePostTitleChange(e) {
        this.setState({
            title: e.target.value,
        })
    }

    handlePostBodyChange(e) {
        this.setState({
            body: e.target.value,
        })
    }

    createNewPost(e) {
        e.preventDefault()
        ref.child('posts').once('value', function(snapshot) {
            let postsArray = snapshot.val()
            if (snapshot.val()) {
                postsArray.push(this.state)
            } else {
                postsArray = [this.state]
            }
            ref.child('posts').set(postsArray)
        }.bind(this))
    }

    render() {
        return (
            <div className='posteditor'>
                <form>
                    <input
                        typeof="text"
                        value={this.state.title}
                        placeholder="post title"
                        onChange={this.handlePostTitleChange.bind(this)}>
                    </input>
                    <br />
                    <textarea
                        placeholder="post body"
                        value={this.state.body}
                        onChange={this.handlePostBodyChange.bind(this)}>
                    </textarea>
                    <input
                        typeof="submit"
                        onClick={this.createNewPost.bind(this)}
                        value="push up"
                        readOnly="true"/>
                </form>
            </div>
        )
    }

}

export default PostEditor


// add immutablejs
// redux-undo to save prev states
// full-stack redux tutorial
