import React from 'react'

class AuthorForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageUrl: ''
        }
    }

    onFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
            </form>
        )
    }
}

export default AuthorForm