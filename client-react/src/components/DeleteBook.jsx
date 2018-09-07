import React, { Component } from 'react';
import {
    DialogOverlay,
    DialogContent
  } from "@reach/dialog";



    class DeleteBook extends React.Component {
  
      constructor() {
        super()
        this.buttonRef = React.createRef();
        this.state = { showDialog: false };
        this.open = () => this.setState({ showDialog: true });
        this.close = () => this.setState({ showDialog: false });
      }
  
      render() {
        return (
          <div>
            <button onClick={this.open}>Delete from Catalogue</button>
  
            {this.state.showDialog && (
              <DialogOverlay initialFocusRef={this.buttonRef}>
                <DialogContent>
                  <p>
                    Pass the button ref to DialogOverlay and
                    the button.
                  </p>
                  <button onClick={this.close}>Not me</button>{" "}
                  <button
                    ref={this.buttonRef}
                    onClick={this.close}
                  >
                    Got me!
                  </button>
                </DialogContent>
              </DialogOverlay>
            )}
          </div>
        );
      }
    }


  export default DeleteBook;