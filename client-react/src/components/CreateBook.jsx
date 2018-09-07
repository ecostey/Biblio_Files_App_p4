import React from 'react';

//Form & Modal from Bulma:
function CreateBook(props) {
    return (
        <div className= {props.newBookModal ? "modal is-active" : "modal"}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add a Book to the Catalogue</p>
                    <button 
                        className="delete" 
                        aria-label="close"
                        onClick={props.toggleModal}
                    ></button>
                </header>
                <section className="modal-card-body">
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
                    </ form>
                </section>
                <footer className="modal-card-foot">
                    <button 
                        className="button is-success"
                        onClick={props.handleNewBookSubmit}    
                    >Save</button>
                    <button 
                        className="button"
                        onClick={props.toggleModal}
                    >Cancel</button>
                </footer>
            </div>
        </div>


    );

}


export default CreateBook;