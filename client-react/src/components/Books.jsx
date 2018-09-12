import React, { Component } from 'react';
import SearchFilter from './SearchFilter';
import CreateBook from './CreateBook';


//Map through all the books in the database.
//Return the title, author, and isbn from each book.
class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterInput: '',
            modal: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    //Set state to whatever is inputted in the search box,
    handleChange(ev) {
        this.setState({ filterInput: ev.target.value })
    }

    render() {
        // Filter through props.books.
        // Return 'words' that match the inputted string.
        let filteredBooks = this.props.books.filter((book) => {
            return book.title.toLowerCase().includes(this.state.filterInput.toLowerCase());
        })
        return (
            <div className="landingPg">
                <SearchFilter
                    handleChange={this.handleChange}
                />
                <CreateBook
                    newBookModal={this.props.newBookModal}
                    toggleModal={this.props.toggleModal}
                    handleChange={this.props.handleBookChange}
                    handleNewBookSubmit={this.props.handleNewBookSubmit}
                />
                <button
                    onClick={this.props.toggleModal}
                    className="createButton">
                    Add New Book
                </button>
                {filteredBooks.map(book => (
                    <div
                        key={book.id}
                        className="AllBooks"
                        onClick={(ev) => {
                            ev.preventDefault();
                            this.props.selectBook(book)
                        }}>
                        <div className="AllTitles">{book.title}</div>
                        <div className="AllAuthors">{book.author}</div>
                        <div className="Allisbns">{book.isbn}</div>
                        <div>📖</div>
                        <br />
                    </div>
                ))}
            </div>
        );
    }
}

export default Books;
