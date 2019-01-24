import React from 'react'

class AuthorForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageUrl: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onAddAuthor(this.state)
    }

    onFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onFieldChange}
                    />
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={this.state.imageUrl}
                        onChange={this.onFieldChange}
                    />
                </div>
                <input
                    type="submit"
                    value="Add"
                />
            </form>
        )
    }
}

export default AuthorForm