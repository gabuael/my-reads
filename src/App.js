import React, { Component } from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp'
import * as api from './util/BooksAPI';
import { Route } from 'react-router-dom';
import Home from './scenes/Home';
import Search from './scenes/Search';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this.updateShelf = this.updateShelf.bind(this);
        this.filterBooksForShelf = this.filterBooksForShelf.bind(this);
        this.filterBooksForSearch = this.filterBooksForSearch.bind(this);
    }

    componentWillMount(){
        let books = window.localStorage.getItem('books');
        if(books == null){
            api.getAll().then(result => {
                this.setBooks(result);
            });
        }else{
            this.setState({books: JSON.parse(books)})
        }
    }

    setBooks(books){
        window.localStorage.setItem('books', JSON.stringify(books));
        this.setState({books});
    }

    updateShelf(value, book) {
        let { books } = this.state;
        api.update(book,value).then(result => {
            books = books.filter(_ => _.id !== book.id).concat({
                ...book,
                shelf: value
            })
            this.setBooks(books);
        })
    }

    filterBooksForShelf(shelf){
        const { books } = this.state;
        let b = books.filter(_ => _.shelf === shelf);
        return b;
    }

    filterAuthors(authors, search){
        let a = false;
        const match = new RegExp(escapeRegExp(search), 'i');
        authors.map(author => {
            if(match.test(author)){
                a = true;
            }
        })
        return a;
    }

    filterBooksForSearch(search){
        const { books } = this.state;
        const match = new RegExp(escapeRegExp(search), 'i');
        
        let b = books.filter(_ =>  match.test(_.title) || this.filterAuthors(_.authors, search))

        return b;
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <Home filterBooks={this.filterBooksForShelf} updateShelf={this.updateShelf} />
                )}/>
                <Route path="/search" render={() => (
                    <Search filterBooks={this.filterBooksForSearch} updateShelf={this.updateShelf} />
                )}/>
            </div>
        );
    }
}

export default App;
