"use strict";

import React from 'react';
import styles from '../../css/global.css';

class BlogPost extends React.Component {

    render() {
        var keywordNodes = this.props.keywords.map((keyword, index) => {
            return (
                <span key={index}>
                    {keyword}
                </span>
            )
        })
        return (
            <div className='blogpost'>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
                <div>
                    <span>{this.props.author}</span>
                    <span> | </span>
                    <span>{this.props.datetime}</span>
                    <span> | </span>
                    {keywordNodes}
                </div>
            </div>
        )
    }
}

export default BlogPost
