import React from 'react';


function CreateBook(props) {
    return (
        <div className= {props.newBookModel ? "modal is-active" : "modal"}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Add a Book to the Catalogue</p>
                    <button 
                        className="delete" 
                        aria-label="close"
                        onClick={props.toggle}
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
                        {/* <input
                            type="submit"
                            value="submit book"
                        /> */}
                    </ form>
                </section>
                <footer className="modal-card-foot">
                    <button 
                        className="button is-success"
                        onClick={props.saveNewBook}    
                    >Save</button>
                    <button 
                        className="button"
                        onClick={props.toggle}
                    >Cancel</button>
                </footer>
            </div>
        </div>


    );

}


export default CreateBook;