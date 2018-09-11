import React from 'react';
import {
    DialogOverlay,
    DialogContent
} from "@reach/dialog";

//UpdateBook component & Modal from ReachUI
function UpdateBook(props) {
    return (
        <div>
            <button
                onClick={props.open}
                className="editButton"
            >Edit Book</button>
            {props.showDialog && (
                <DialogOverlay initialFocusRef={props.updatebuttonRef}>
                    <DialogContent>
                        <p>
                            Edit Book Information
                            </p>
                        <form
                            onSubmit={props.handleBookSubmit}
                            className="modalButtons" >
                            <input
                                type="text"
                                name="title"
                                value={props.oneBook.title}
                                placeholder={props.oneBook.title}
                                onChange={props.handleChange} />
                            <br /><br />
                            <input
                                type="text"
                                name="author"
                                value={props.oneBook.author}
                                placeholder={props.oneBook.author}
                                onChange={props.handleChange} />
                            <br /><br />
                            <input
                                type="text"
                                name="isbn"
                                value={props.oneBook.isbn}
                                placeholder={props.oneBook.isbn}
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