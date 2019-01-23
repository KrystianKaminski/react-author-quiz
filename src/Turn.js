import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'


import Book from './Book'

const Turn = (props) => {

    const highlightToBgColor = (highlight) => {
        const mapping = {
            'none': '',
            'correct': 'green',
            'wrong': 'red'
        }
        return mapping[highlight]
    }
    return (
        <div
            className="row turn"
            style={{
                backgroundColor: highlightToBgColor(props.highlight)
            }}
        >
            <div className="col-4 offset-1">
                <img
                    src={props.author.imageUrl}
                    alt="Author"
                    className="authorimage"

                />
            </div>
            <div className="col-6">
                {props.books.map((title) =>
                    <Book
                        key={title}
                        title={title}
                        onClick={props.onAnswerSelected}
                    />)}
            </div>

        </div>
    )
}

Turn.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
}

export default Turn