import React, { Component } from 'react';
import './App.css';
import * as api from './util/BooksAPI';
import { Route } from 'react-router-dom';
import Home from './scenes/Home';
import Search from './scenes/Search';
import Book from './scenes/Book';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this.updateShelf = this.updateShelf.bind(this);
        this.filterBooks = this.filterBooks.bind(this);
    }

    componentDidMount(){
        api.getAll().then(books => {
            this.setState({books});
        });
    }


    updateShelf(value, book) {
        let { books } = this.state;
        api.update(book,value).then(() => {
            books = books.filter(_ => _.id !== book.id).concat({
                ...book,
                shelf: value
            })
            this.setState({books});
        })
    }

    filterBooks(shelf){
        const { books } = this.state;
        let b = books.filter(_ => _.shelf === shelf);
        return b;
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <Home filterBooks={this.filterBooks} updateShelf={this.updateShelf} />
                )}/>
                <Route path="/search" render={() => (
                    <Search books={this.state.books} updateShelf={this.updateShelf} />
                )}/>
                <Route path="/book/:bookId" render={(routeProps) => (
                    <Book routeProps={routeProps}/>
                )}/>
            </div>
        );
    }
}

export default App;
