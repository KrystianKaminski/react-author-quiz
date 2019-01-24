import React from 'react'

class AuthorForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageUrl: ''
        }
    }
    render() {
        return (
            <form>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                    />
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={this.state.imageUrl}
                    />
                </div>
            </form>
        )
    }
}

export default AuthorForm