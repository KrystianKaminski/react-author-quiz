import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import './css/index.css';
import AuthorQuiz from './app/AuthorQuiz';
import './css/App.css'
import { shuffle, sample } from 'underscore'

import AddAuthorForm from './app/AddAuthorForm'

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.png',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
]

const getTurnData = (authors) => {
    const allBooks = authors.reduce((p, c, i) => {
        return p.concat(c.books)
    }, [])
    const fourRandomBooks = shuffle(allBooks).slice(0, 4)
    const answer = sample(fourRandomBooks)

    return {
        books: fourRandomBooks,
        author: authors.find((author) => author.books.some((title) => title === answer))
    }
}

const onAnswerSelected = (answer) => {
    const isCorrect = state.turnData.author.books.some((book) => book === answer)
    state.highlight = isCorrect ? 'correct' : 'wrong'
    render()
}

const App = () => {
    return (
        <AuthorQuiz
            {...state}
            onAnswerSelected={onAnswerSelected}
            onContinue={() => {
                state = resetState()
                render()
            }}
        />
    )
}

const AuthorWrapper = withRouter(({ history }) => {
    return (
        <AddAuthorForm onAddAuthor={(author) => {
            authors.push(author)
            history.push('/')
        }} />
    )
})

const render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route path="/add" component={AuthorWrapper} />
            </React.Fragment>
        </BrowserRouter>
        , document.getElementById('root'));

}

const resetState = () => {
    return {
        turnData: getTurnData(authors),
        highlight: ''
    }
}

let state = resetState()

render()

