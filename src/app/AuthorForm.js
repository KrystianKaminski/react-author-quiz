import React from 'react'

class AuthorForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageUrl: '',
            bookTemp: '',
            books: [],
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

    handleAddBook = () => {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
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
                <div className="AddAuthorForm__input">
                    {this.state.books &&
                        this.state.books.map &&
                        this.state.books.map((book) =>
                            <p key={book}>
                                {book}
                            </p>
                        )}
                    <label htmlFor="bookTemp">Books</label>
                    <input
                        type="text"
                        name="bookTemp"
                        value={this.state.bookTemp}
                        onChange={this.onFieldChange}
                    />
                    <input
                        type="button"
                        value="+"
                        onClick={this.handleAddBook}
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