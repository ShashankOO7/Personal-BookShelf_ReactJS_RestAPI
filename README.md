# Book Search and Personal Bookshelf

This project is a React application that allows users to search for books using the Open Library API and save their favorite books to a personal bookshelf. The bookshelf is stored in the browser's local storage, ensuring persistence across sessions.

## Features

- **Book Search**: Search for books by name using the Open Library API.
- **Real-Time Search**: Display search results in real-time as the user types.
- **Add to Bookshelf**: Save favorite books to a personal bookshelf.
- **Persistent Bookshelf**: Bookshelf data is stored using local storage for persistence.
- **Responsive Design**: The application is fully responsive and works on all device sizes.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/book-search-bookshelf.git
cd book-search-bookshelf

2. Install the dependencies:

```bash
npm install

3. Run the application:

```bash
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Usage
Book Search:

Enter the name of the book you want to search for in the input field.
View the search results that appear in real-time.
Click the "Add to Bookshelf" button to save a book to your personal bookshelf.
Personal Bookshelf:

Click the "My Bookshelf" button to view your saved books.
The bookshelf page will display all the books you have added.
Project Structure
src/components/BookSearch.js: The main component for searching and displaying book results.
src/components/Bookshelf.js: The component for displaying the user's personal bookshelf.
src/App.js: The root component that sets up routing between the BookSearch and Bookshelf components.
src/index.js: The entry point of the application.
src/App.css: The main CSS file for styling the application.
src/components/BookSearch.css: The CSS file for styling the BookSearch component.
API Reference
Open Library Search API
Endpoint: https://openlibrary.org/search.json
Method: GET
Query Parameters:
q: The search query (book name).
limit: Number of results to return (default is 10).
page: Page number (default is 1).
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
React
Open Library API