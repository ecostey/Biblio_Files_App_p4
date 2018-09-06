import React, { Component } from 'react';
import {
  fetchBooks,
  fetchPatrons,
  fetchBook,
  fetchPatron,
  saveBook,
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
      selectedBook: '',
      patrons: [],
      currentView: 'all-books',
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
    this.selectBook = this.selectBook.bind(this);
  }

  componentDidMount(){
    fetchBooks()
    .then(data => this.setState({ books: data.books}));
  }

  // select one dog & set state
  fetchOneBook(id) {
    fetchBook(id)
      .then(data => this.setState({
        books: data.book,
        currentView: 'one-book'
      }))
  };

  // select dog function
  selectBook(book) {
    this.setState({
      selectedBook: book,
      currentView: 'one-book'
    })
  };

  handleBookSubmit(e) {
    e.preventDefault();
    //destructure state
    const { title, author, isbn } = this.state;
    //request body to POST to books table.
    const newBook = { title, author, isbn };

    saveBook(newBook) 
      .then(resp=> {
        this.fetchBook(this.bookId);
        this.setState({ title: '', author: '', isbn: '' })
      }).catch(err => {
        throw Error(err);
      });
  }

// function handleChange () {

// }

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
          />
    //Selected Book View
    case 'one-book':
      return <OneBook 
        book={selectedBook}
      />

  }
}


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
