import React from 'react';
import DeleteBook from './DeleteBook'

function OneBook (props){
    return (
        <div>
           <div className="OneTitle">{props.book.title}</div>
            <div className="OneAuthor">{props.book.author}</div>
            <div className="Oneisbn">isbn: {props.book.isbn}</div> 
            {/* <button onClick={props.toggle}>Delete</button> */}
            <DeleteBook />
        </div>
    )
}

export default OneBook;