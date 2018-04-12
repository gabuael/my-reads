import React from 'react';
import If from './If';
import '../App.css';

const List = ({books = [], title, updateShelf}) => {
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
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => updateShelf(e.target.value, book)}>
                                                <option value="currentlyReading">Currently reading</option>
                                                <option value="wantToRead">Want to read</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors[0]}</div>
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