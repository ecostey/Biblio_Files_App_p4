import React, { Component } from 'react';
import './css/App.css';
import './css/allBooks.css';
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
import CreateBook from './components/CreateBook';



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
      books: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
  }

  componentDidMount(){

    fetchBooks()
    .then(data => this.setState({ books: data.books}));
  }

  // fetchAllBooks() {
  //   fetchBooks()
  //   .then(
  //     books => this.setState({
  //     books: books
  //   }))
  //   .catch((err) => {throw err;});
  // }

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


render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Biblio Files</h1>
      </header>
      <body>
        <Books books={this.state.books}/>
      </body>
    </div>
  );
}

}

export default App;
