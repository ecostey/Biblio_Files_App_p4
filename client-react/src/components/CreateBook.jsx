import React from 'react';

function CreateBook(props) {
    return (
        <div>
            <h1>Add Book Form:</h1>
            <form onSubmit={props.handleBookSubmit} >
                <input
                    type="text"
                    name="title"
                    value={props.title}
                    placeholder="Title"
                    onChange={props.handleChange} />
                <input
                    type="text"
                    name="author"
                    value={props.author}
                    placeholder="Author's Name"
                    onChange={props.handleChange} />
                <input
                    type="text"
                    name="isbn"
                    value={props.isbn}
                    placeholder="isbn #"
                    onChange={props.handleChange} />
                <input
                    type="submit"
                    value="submit book"
                />
            </ form>
        </div>
    );

}

export default CreateBook;