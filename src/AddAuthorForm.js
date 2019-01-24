import React from 'react'

const AddAuthorForm = (props) => {
    return (
        <div>
            <h1>Add Author</h1>
            <p>{JSON.stringify(props.match)}</p>
        </div>
    )
}

export default AddAuthorForm