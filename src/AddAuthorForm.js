import React from 'react'
import './AddAuthorForm.css'

import AuthorForm from './AuthorForm'

const AddAuthorForm = (props) => {
    return (
        <div className="AddAuthorForm">
            <h1>Add Author</h1>
            <AuthorForm
                onAddAuthor={props.onAddAuthor}
            />
        </div>
    )
}

export default AddAuthorForm