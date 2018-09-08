import React, { Component } from 'react';
import {
    DialogOverlay,
    DialogContent
} from "@reach/dialog";
// import {
//     fetchBook,
//     updateBook
// } from '../services/api';


class UpdateBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
        }
        this.buttonRef = React.createRef();
        this.state = { showDialog: false };
        this.open = () => this.setState({ showDialog: true });
        this.close = () => this.setState({ showDialog: false });
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }

    //Update book's author/isbn/title &save inputs to database
    //Then re-render 'OneBook' component/view
    //to show user the book was updated
    handleUpdateClick() {
        this.close();
        this.props.handleUpdateBookSubmit(this.props.bookId)
    }

    render() {
        return (
            <div>
                <button onClick={this.open}>Edit Book</button>
                {this.state.showDialog && (
                    <DialogOverlay initialFocusRef={this.buttonRef}>
                        <DialogContent>
                            <p>
                                Edit Book Information
                            </p>
                            <form onSubmit={this.handleBookSubmit} >
                                <input
                                    type="text"
                                    name="title"
                                    value={this.title}
                                    placeholder="Title"
                                    onChange={this.handleChange} />
                                <input
                                    type="text"
                                    name="author"
                                    value={this.author}
                                    placeholder="Author's Name"
                                    onChange={this.handleChange} />
                                <input
                                    type="text"
                                    name="isbn"
                                    value={this.isbn}
                                    placeholder="isbn #"
                                    onChange={this.handleChange} />
                            </ form>
                            <button onClick={this.close}>Cancel</button>{" "}
                            <button
                                ref={this.buttonRef}
                                onClick={this.handleUpdateClick}>
                                Update
                            </button>
                        </DialogContent>
                    </DialogOverlay>
                )}
            </div>
        );
    }
}

export default UpdateBook;