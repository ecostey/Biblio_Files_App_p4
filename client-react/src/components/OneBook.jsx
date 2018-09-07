import React from 'react';
import DeleteBook from './DeleteBook'

function OneBook(props) {
    return (
        <div>
            <div className="OneTitle">{props.book.title}</div>
            <div className="OneAuthor">{props.book.author}</div>
            <div className="Oneisbn">isbn: {props.book.isbn}</div>
            <DeleteBook
                bookId={props.book.id}
                toggleView={props.toggleView}
                fetchAllBooksPg={props.fetchAllBooksPg}
                // currentView={props.currentView('all-books')}
            />
        </div>
    )
}

export default OneBook;