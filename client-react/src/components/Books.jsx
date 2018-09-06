import React from 'react';

//Filter through props.books.
//Return 'words' that match the inputted string.
function FilterBooks (props, string){
    const list = props.books.filter ((word) => {
        return word.includes(string);
    })
    return list;
}

//Map through all the books in the database.
//Return the title, author, and isbn from each book.
function Books (props){
    return (
        <div>
        { props.books.map(book => (
            <div 
                key={book.id} 
                className="AllBooks"
                onClick={(ev) => {
                ev.preventDefault();
                props.selectBook(book)
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

export default Books;
