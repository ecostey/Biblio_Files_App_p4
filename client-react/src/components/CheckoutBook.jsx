import React, { Component } from 'react';
import {
    DialogOverlay,
    DialogContent
} from "@reach/dialog";


class CheckoutBook extends Component {

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
                <button onClick={this.open}>Check Out Book</button>
                {this.state.showDialog && (
                    <DialogOverlay initialFocusRef={this.buttonRef}>
                        <DialogContent>
                            <p>
                                Check Out Book
                            </p>
                            <form onSubmit={this.handleBookSubmit} >
                                <input
                                    type="text"
                                    name="rented_by"
                                    value={this.rented_by}
                                    placeholder={this.props.oneBook.rented_by}
                                    onChange={this.props.handleChange} />
                                <input
                                    type="text"
                                    name="due_date"
                                    value={this.due_date}
                                    placeholder={this.props.oneBook.due_date}
                                    onChange={this.props.handleChange} />
                            </ form>
                            <button onClick={this.close}>Cancel</button>{" "}
                            <button
                                ref={this.buttonRef}
                                onClick={this.handleUpdateClick}>
                                Check Out
                            </button>
                        </DialogContent>
                    </DialogOverlay>
                )}
            </div>
        );
    }
}

export default CheckoutBook;