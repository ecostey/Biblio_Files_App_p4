import React from 'react';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';
//import CheckoutBook from './CheckoutBook';

function OneBook(props) {
    return (
        <div>
            <div className="OneTitle">{props.book.title}</div>
            <br />
            <div className="OneAuthor">{props.book.author}</div>
            <br />
            <div className="Oneisbn">isbn: {props.book.isbn}</div>
            {/* <CheckoutBook
            oneBook={props.book}
            bookId={props.book.id}
            toggleView={props.toggleView}
            handleUpdateBookSubmit={props.handleUpdateBookSubmit}
            handleChange={props.handleChange}
            //fetchAllBooksPg={props.fetchAllBooksPg}
            /> */}
            <UpdateBook
                oneBook={props.book}
                bookId={props.book.id}
                toggleView={props.toggleView}
                handleUpdateBookSubmit={props.handleUpdateBookSubmit}
                handleChange={props.handleChange}
                //fetchAllBooksPg={props.fetchAllBooksPg}
            />
            <DeleteBook
                bookId={props.book.id}
                toggleView={props.toggleView}
                fetchAllBooksPg={props.fetchAllBooksPg}
            />
            <img src="https://i.imgur.com/kDzDhYq.jpg" title="Book Shelf" className="bookShelfImg" />
        </div>
    )
}

export default OneBook;