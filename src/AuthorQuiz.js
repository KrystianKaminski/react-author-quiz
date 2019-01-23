import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Hero from './Hero'
import Turn from './Turn'
import Continue from './Continue'
import Footer from './Footer'

const AuthorQuiz = (props) => {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...props.turnData}
      />
      <Continue />
      <Footer />
    </div>
  )
}

export default AuthorQuiz;
