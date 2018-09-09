import React, { Component } from 'react';
import {
    DialogOverlay,
    DialogContent
} from "@reach/dialog";
import { deleteBook } from '../services/api';


class DeleteBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
        }
        this.buttonRef = React.createRef();
        this.state = { showDialog: false };
        this.open = () => this.setState({ showDialog: true });
        this.close = () => this.setState({ showDialog: false });
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    //Delete book from books table & then render (All) 'Books' component
    //to show user the book was removed
    handleDeleteClick() {
        this.close();
        deleteBook(this.props.bookId)
            .then(resp => {
                this.props.toggleView('all-books');
                this.props.fetchAllBooksPg();
            });
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.open}
                    className="deleteButton"
                >Delete</button>
                {this.state.showDialog && (
                    <DialogOverlay initialFocusRef={this.buttonRef}>
                        <DialogContent >
                            <p>
                                Are you sure you'd like to remove this book from your catalogue?
                            </p>
                            <br />
                            <div className="modalButtons">
                                <button
                                    onClick={this.handleDeleteClick}
                                >Yes</button>{" "}
                                <button
                                    ref={this.buttonRef}
                                    onClick={this.close}
                                >Oops, Nope!
                                </button>
                            </div>
                        </DialogContent>
                    </DialogOverlay>
                )}
            </div>
        );
    }
}


export default DeleteBook;