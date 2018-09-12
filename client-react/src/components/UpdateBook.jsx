import React from 'react';
import {
    DialogOverlay,
    DialogContent
} from "@reach/dialog";

//UpdateBook component & Modal from ReachUI
function UpdateBook(props) {
    const newData={
        title: props.title,
        author: props.author,
        isbn: props.isbn,
        bookId: props.oneBook.id
    }
    return (
        <div>
            <button
                onClick={()=>props.open(props.oneBook)}
                className="editButton"
            >Edit Book</button>
            {props.showDialog && (
                <DialogOverlay initialFocusRef={props.updatebuttonRef}>
                    <DialogContent>
                        <p>
                            Edit Book Information
                        </p>
                        <form
                            // onSubmit={()=>props.handleUpdateClick(props.oneBook.id)}
                            className="modalButtons" >
                            <input
                                type="text"
                                name="title"
                                value={props.title}
                                placeholder={props.title}
                                onChange={props.handleChange} />
                            <br /><br />
                            <input
                                type="text"
                                name="author"
                                value={props.author}
                                placeholder={props.author}
                                onChange={props.handleChange} />
                            <br /><br />
                            <input
                                type="text"
                                name="isbn"
                                value={props.isbn}
                                placeholder={props.isbn}
                                onChange={props.handleChange} />
                        </ form>
                        <br />
                        <div className="modalButtons">
                            <button onClick={props.close}>Cancel</button>{" "}
                            <button
                                ref={props.updatebuttonRef}
                                onClick={props.handleUpdateClick}>
                                Update
                                </button>
                        </div>
                    </DialogContent>
                </DialogOverlay>
            )}
        </div>
    );
}

export default UpdateBook;