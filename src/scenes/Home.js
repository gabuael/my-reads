import React from 'react';
import '../App.css';
import List from '../components/List';
import { Link } from 'react-router-dom';

const Home = ({filterBooks, updateShelf}) => {
    const types = [{shelf: 'read', title: 'Read'}, {shelf: 'currentlyReading', title: 'Currently reading'}, {shelf: 'wantToRead', title: 'Want to read'}];
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {types.map(type => (
                <List key={type.shelf} books={filterBooks(type.shelf)} title={type.title} updateShelf={updateShelf}/>
            ))}
            <div className="open-search">
                <a onClick={() => console.log(true)}>Add a book</a>
            </div>
        </div>
    )
}

export default Home;
