import React from 'react';

function Books (props){
    return (
        <div>
        { props.books.map(book => (
            <div key={book.id} className="AllBooks">
                <div className="AllTitles">{book.title}</div>
                <div className="AllAuthors">{book.author}</div>
                <div className="Allisbns">{book.isbn}</div>
                <br />
            </div>
        ))}
        </div>
    );
}

export default Books;
