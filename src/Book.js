import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Book = (props) => {
    return (
        <div
            className="answer"
            onClick={() => { props.onClick(props.title) }}
        >
            <h4>{props.title}</h4>
        </div>
    )
}

export default Book