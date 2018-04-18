import React from 'react';
import If from './If';
import '../App.css';

const List = ({books = [], title, updateShelf}) => {
    // console.log(books);
    return(
        <div className="list-books-content">
            <div className="bookshelf">
                <If test={title !== 'search'}>
                    <h2 className="bookshelf-title">{title}</h2>
                </If>
                <div className="bookshelf-books">
                    <ol  className="books-grid">
                        {books.map( book  => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf ? book.shelf : "none"} onChange={(e) => updateShelf(e.target.value, book)}>
                                                <option disabled>Move to...</option>
                                                <option value="currentlyReading">Currently reading</option>
                                                <option value="wantToRead">Want to read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors && book.authors.join(", ")}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default List;