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
            model: '',

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
            <div>
                <SearchFilter
                    handleChange={this.handleChange} 
                />
                <CreateBook 
                  newBookModel={this.props.newBookModel} 
                  toggle={this.props.toggle} 
                  saveNewBook={this.props.saveNewBook}
                  handleChange={this.props.handleBookChange}
                />
                <button onClick={this.props.toggle}> Add New Book to Catalogue </button>
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
                        <br />
                    </div>
                ))}
            </div>
        );
    }
}

export default Books;