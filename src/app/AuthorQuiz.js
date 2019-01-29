import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

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
        highlight={props.highlight}
        onAnswerSelected={props.onAnswerSelected}
      />
      <Continue
        show={props.highlight === 'correct'}
        onContinue={props.onContinue}
      />
      <p>
        <Link
          to='/add'
        >
          Add an author
          </Link>
      </p>
      <Footer />
    </div>
  )
}

export default AuthorQuiz;
