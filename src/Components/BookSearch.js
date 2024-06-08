import React, { useState, useEffect } from 'react';
import './BookSearch.css';

const BookSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
                .then(response => response.json())
                .then(data => {
                    setResults(data.docs);
                });
        } else {
            setResults([]);
        }
    }, [query]);

    const addToBookshelf = (book) => {
        let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        bookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    };

    return (
        <div className="book-search-container">
            <h1>Search by book name:</h1>
            <button className="bookshelf-button" onClick={() => window.location.href = '/bookshelf'}>My Bookshelf</button>
            <input
                type="text"
                className="search-input"
                placeholder="Search for a book"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="results-container">
                {results.map(book => (
                    <div key={book.key} className="book-card">
                        <div className="book-details">
                            <p><strong>Book Title:</strong> {book.title}</p>
                            <p><strong>Edition Count:</strong> {book.edition_count}</p>
                            <button className="add-button" onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
