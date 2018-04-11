import React from 'react';
import '../App.css'

const List = ({books = [], title,updateStatus}) => {
    return(
        <div className="list-books-content">
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol  className="books-grid">
                        {books.map( book  => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.bookCover})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.status} onChange={(e) => updateStatus(e.target.value, book)} className="">
                                                <option value="currentlyReading">Currently reading</option>
                                                <option value="wantToRead">Want to read</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.author}</div>
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