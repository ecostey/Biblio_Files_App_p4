import React, { Component } from 'react';
import {
  fetchBooks,
  fetchPatrons,
  fetchBook,
  fetchPatron,
  saveNewBook,
  updateBook,
} from './services/api';
import Books from './components/Books';
import OneBook from './components/OneBook';
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
      newBookModal: false,
      selectedBook: '',
      patrons: [],
      currentView: 'all-books',
    }
    this.selectBook = this.selectBook.bind(this);
    this.handleNewBookSubmit = this.handleNewBookSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.fetchAllBooksPg = this.fetchAllBooksPg.bind(this);
  }

  //When component first mount, fetch all books & set them to state.
  componentDidMount() {
    fetchBooks()
      .then(data => this.setState({ books: data.books }));
  }

  //To be passed down to delete modal:
  fetchAllBooksPg() {
    fetchBooks()
      .then(data => {
        this.setState({ books: data.books })
      });
  }

  //Set state to whatever is entered into an input field.
  //Used in Create & Update modals
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // select one book
  //Used in All Books filter function
  selectBook(book) {
    this.setState({
      selectedBook: book,
      currentView: 'one-book'
    })
  };

  // fetch one book & set state to that one book
  fetchOneBook(id) {
    debugger
    fetchBook(id)
      .then(data => {
        debugger
        this.setState({
        selectedBook: data,
        currentView: 'one-book'
      })})
  };

  //Toggle between views 
  //Use in modals - similar to a redirect.
  toggleView(view) {
    this.setState({
      currentView: view
    });
  }

  //toggle whether the create-new-book modal is hidden/active
  toggleModal() {
    this.setState({
      newBookModal: !this.state.newBookModal
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
        this.setState({ title: '', author: '', isbn: '' })
        this.fetchOneBook(resp.id);
        this.toggleView('one-book');
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
          toggleModal={this.toggleModal}
          newBookModal={this.state.newBookModal}
          saveNewBook={this.handleNewBookSubmit}
          handleBookChange={this.handleChange}
          handleNewBookSubmit={this.handleNewBookSubmit}
        />
      //Single Book View
      case 'one-book':
        return <OneBook
          book={selectedBook}
          fetchAllBooksPg={this.fetchAllBooksPg}
          toggleView={this.toggleView}
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
        <div>
          {this.switchView()}
        </div>
      </div>
    );
  }

}

export default App;
