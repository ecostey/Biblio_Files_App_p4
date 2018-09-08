import React from 'react';
import DeleteBook from './DeleteBook'

function OneBook(props) {
    return (
        <div>
            <div className="OneTitle">{props.book.title}</div>
            <div className="OneAuthor">{props.book.author}</div>
            <div className="Oneisbn">isbn: {props.book.isbn}</div>
            <UpdateBook
                bookId={props.book.id}
                toggleView={props.toggleView}
                //fetchAllBooksPg={props.fetchAllBooksPg}
            />
            <DeleteBook
                bookId={props.book.id}
                toggleView={props.toggleView}
                fetchAllBooksPg={props.fetchAllBooksPg}
            />
        </div>
    )
}

export default OneBook;