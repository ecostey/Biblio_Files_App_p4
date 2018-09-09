import React, { Component } from 'react';
import {
    DialogOverlay,
    DialogContent
} from "@reach/dialog";


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
    handleUpdateClick(e) {
        e.preventDefault();
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
                                    placeholder={this.props.oneBook.title}
                                    onChange={this.props.handleChange} />
                                <input
                                    type="text"
                                    name="author"
                                    value={this.author}
                                    placeholder={this.props.oneBook.author}
                                    onChange={this.props.handleChange} />
                                <input
                                    type="text"
                                    name="isbn"
                                    value={this.isbn}
                                    placeholder= {this.props.oneBook.isbn}
                                    onChange={this.props.handleChange} />
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