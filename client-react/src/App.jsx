import React, { Component } from 'react';
import {
  fetchBooks,
  fetchBook,
  saveNewBook,
  updateBook,
  // fetchPatron,
  // fetchPatrons,
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
      showDialog: false,
    }

    this.updatebuttonRef = React.createRef();

    this.selectBook = this.selectBook.bind(this);
    this.handleNewBookSubmit = this.handleNewBookSubmit.bind(this);
    this.handleUpdateBookSubmit = this.handleUpdateBookSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.fetchAllBooksPg = this.fetchAllBooksPg.bind(this);
    this.homePage = this.homePage.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  //When component first mount, fetch all books & set them to state.
  componentDidMount() {
    fetchBooks()
      .then(data => this.setState({ books: data.books }));
  }

  //Make logo/Header clickable- will return user to 'all-books' view.
  homePage() {
    this.setState({
      currentView: 'all-books'
    })
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
    // console.log(e.target.title)
    this.setState({
      [e.target.name]: e.target.value
    })
    // this.setState((prevState, e) => {
    //   return {[e.target.name]: prevState += e.target.value}
    // })
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
    fetchBook(id)
      .then(data => {
        this.setState({
          selectedBook: data,
          currentView: 'one-book'
        })
      })
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
        this.toggleModal();
      }).catch(err => {
        throw Error(err);
      });
  }

  //Open the update modal & set the state to the current book's data (pre-update)
  open(oneBook) {
    this.setState({
      showDialog: true,
      title: oneBook.title,
      author: oneBook.author,
      isbn: oneBook.isbn,
    });
  }

  //Close the update modal.
  close = () => this.setState({ showDialog: false });

  handleUpdateBookSubmit(bookId) {
    debugger
    //destructure state
    const { title, author, isbn } = this.state;
    //request body to PUT to books table.
    const book = { title, author, isbn };
    //Save the new book's data to state
    updateBook(book, bookId)
      .then(resp => {
        // this.setState({ title: '', author: '', isbn: '' })
        this.fetchOneBook(resp.id);
        this.toggleView('one-book');
      }).catch(err => {
        throw Error(err);
      });
  }

  //Update book's author/isbn/title &save inputs to database
  //Then re-render 'OneBook' component/view
  //to show user the book was updated
  handleUpdateClick(bookId) {
    debugger
    this.close();
    this.handleUpdateBookSubmit(bookId)
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
          handleBookChange={this.handleChange}
          handleNewBookSubmit={this.handleNewBookSubmit}

        />
      //Single Book View
      case 'one-book':
        return <OneBook
          book={selectedBook}
          title={this.state.title}
          author={this.state.author}
          isbn={this.state.isbn}
          showDialog={this.state.showDialog}
          handleChange={this.handleChange}
          fetchAllBooksPg={this.fetchAllBooksPg}
          toggleView={this.toggleView}
          handleUpdateClick={this.handleUpdateClick}
          open={this.open}
          close={this.close}
        />
    }

  }

  //Render the header & Nav bar
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1
            className="App-title"
            onClick={this.homePage}
          >Biblio Files
          </h1>
        </header>
        <body>
          {this.switchView()}
        </body>
      </div>
    );
  }

}

export default App;
