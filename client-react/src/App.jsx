import React, { Component } from 'react';
import {
  fetchBooks,
  fetchPatrons,
  fetchBook,
  fetchPatron,
  saveNewBook,
  updateBook,
  deleteBook
} from './services/api';
import Books from './components/Books';
import OneBook from './components/OneBook';
import CreateBook from './components/CreateBook';
import './css/App.css';
import './css/allBooks.css';
import './css/oneBook.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      isbn: '',
      rented_by: '',
      due_date: '',
      patron_name: '',
      patron_email: '',
      books: [],
      newBookModel: false,
      selectedBook: '',
      patrons: [],
      currentView: 'all-books',
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.selectBook = this.selectBook.bind(this);
    this.handleNewBookSubmit = this.handleNewBookSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetchBooks()
      .then(data => this.setState({ books: data.books }));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // select one dog & set state
  fetchOneBook(id) {
    fetchBook(id)
      .then(data => this.setState({
        books: data.book,
        currentView: 'one-book'
      }))
  };

  // select one book
  selectBook(book) {
    this.setState({
      selectedBook: book,
      currentView: 'one-book'
    })
  };

  toggle() {
    this.setState({
      newBookModel: !this.state.newBookModel
    })
  }

  //On submit - save the new book to the books table
  handleNewBookSubmit(e) {
    e.preventDefault();
    //destructure state
    const { title, author, isbn } = this.state;
    //request body to POST to books table.
    const newBook = { title, author, isbn };

    //Save the new book's data to state
    saveNewBook(newBook)
      .then(resp => {
        console.log(resp);
        fetchBook(this.bookId);
        this.setState({ title: '', author: '', isbn: '' })
      }).catch(err => {
        throw Error(err);
      });
  }

  //Switch which views are rendered.
  switchView() {
    const { currentView } = this.state;
    const { books, oneBook, selectedBook } = this.state;

    switch (currentView) {
      //All Books & Search View
      case 'all-books':
        return <Books
          books={books}
          oneBook={oneBook}
          selectBook={this.selectBook}
          toggle={this.toggle}
          newBookModel={this.state.newBookModel}
          saveNewBook={this.handleNewBookSubmit}
          handleBookChange={this.handleChange}
        />
      //Single Book View
      case 'one-book':
        return <OneBook
          book={selectedBook}
        />
    }

  }

  //Render the header & Nav bar
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Biblio Files</h1>
        </header>
        <body>
          {this.switchView()}
        </body>
      </div>
    );
  }

}

export default App;
