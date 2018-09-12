const BASE_URL = 'http://localhost:3000';
//const BASE_URL = process.env.REACT_APP_API_URL;

//Fetches all Books from localhost:3000
export function fetchBooks() {
    return fetch(`${BASE_URL}/books`)
        .then((resp) =>  resp.json())
        .catch((err) => {
            throw Error(err);
        });
}

//Fetches All Patrons from localhost:3000
export function fetchPatrons() {
    return fetch(`${BASE_URL}/patrons`)
            .then(resp => resp.json())
            .catch(err => {
                throw Error(err);
            });
}
//This fetches one book.
export function fetchBook(bookId) {
    return fetch(`${BASE_URL}/books/${bookId}`)
    .then(resp => {
        return resp.json()
    })
    .catch(err => {
        throw Error(err);
    });
}

//Add a new book to the database
export function saveNewBook(book) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${BASE_URL}/books`, opts)
        .then(resp => {
            return resp.json();
        }).catch(error => {
            throw Error(error);
        });
}

//Finds & Updates a book by id
export function updateBook(book, bookId) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify({ book }),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetch(`${BASE_URL}/books/${bookId}`, opts)
    .then(resp => {
        return resp.json();
    }).catch(error => {
        throw Error(error);
    });
}

//Deletes a book from DataBase
export function deleteBook(bookId) {
    const opts = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetch(`${BASE_URL}/books/${bookId}`, opts)
    .catch(error => {
        throw Error(error);
    });
}