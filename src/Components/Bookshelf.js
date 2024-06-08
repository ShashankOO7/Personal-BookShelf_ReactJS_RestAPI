import React, { useState, useEffect } from 'react';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const bookshelfData = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(bookshelfData);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My Bookshelf</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {bookshelf.map(book => (
          <div key={book.key} style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '200px', textAlign: 'left' }}>
            <p><strong>Book Title:</strong> {book.title}</p>
            <p><strong>Edition Count:</strong> {book.edition_count}</p>
          </div>
        ))}
      </div>
      <button onClick={() => window.location.href='/'}>Back to Search</button>
    </div>
  );
};

export default Bookshelf;
