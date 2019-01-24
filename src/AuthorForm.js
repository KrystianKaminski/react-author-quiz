import React from 'react'

class AuthorForm extends React.Component {
    render() {
        return (
            <form>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" />
                </div>
            </form>
        )
    }
}

export default AuthorForm