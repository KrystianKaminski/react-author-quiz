import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Book from './Book'

const Turn = (props) => {
    return (
        <div
            className="row turn"
            style={{
                backgroundColor: 'white'
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
                {props.books.map((title) => <Book key={title} title={title} />)}
            </div>

        </div>
    )
}

export default Turn