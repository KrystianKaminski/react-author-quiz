import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Hero from './Hero'
import Turn from './Turn'
import Continue from './Continue'
import Footer from './Footer'

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
      </div>
    )
  }
}

export default AuthorQuiz;
