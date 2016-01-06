"use strict"

import styles from './css/global.css'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactBlog from './js/components/ReactBlog.jsx'
// import createstore, provider, reducer

// create store with initTypes (const)

// dispatch initial state in store

ReactDOM.render(
    // wrap the app inside the provider - pass down the store
    <ReactBlog />,
    document.getElementById('react')
);
