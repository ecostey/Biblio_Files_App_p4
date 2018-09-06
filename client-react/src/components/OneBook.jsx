import React from 'react';

function OneBook (props){
    return (
        <div>
           <div className="OneTitle">{props.book.title}</div>
            <div className="OneAuthor">{props.book.author}</div>
            <div className="Oneisbn">isbn: {props.book.isbn}</div> 
        </div>
    )
}

export default OneBook;