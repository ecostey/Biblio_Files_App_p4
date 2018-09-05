const BASE_URL = 'http://localhost:3000';

//Fetches all Books from localhost:3000
export function fetchBooks(id) {
    return fetch(`${BASE_URL}/books`)
        .then(resp => resp.json())
        .catch(err => {
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
//this fetches one book.
export function fetchBook(bookId) {
    return fetch(`${BASE_URL}/book/${bookId}`)
    .then(resp => {
        return resp.json()
    })
    .catch(err => {
        throw Error(err);
    });
}

//Add a new book to the database
export function saveBook(book) {
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
    console.log(book)
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