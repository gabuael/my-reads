import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this.updateStatus = this.updateTask.bind(this);
    }

    updateTask(value, book) {
        let { books } = this.state
        books = books.filter(_ => _.id !== book.id).concat({
            ...book,
            status: value
        })
        this.setState({books});
    }

    componentWillMount(){
        const books = 
        [
            {id:0, title: 'Harry Potter', author: 'J. K. Rowling', bookCover: 'https://images-submarino.b2w.io/produtos/01/00/item/179/5/179547_1GG.jpg', status: 'read'},
            {id:1, title: 'Harry Poha', author: 'Mc Maha', bookCover: 'uri', status: 'read'}
        ]
        this.setState({books})
    }

    filterBooks(status){
        const { books } = this.state;
        let b = books.filter(_ => _.status === status);
        return b;
    }

    render() {
        const types = [{status: 'read', title: 'Read'}, {status: 'currentlyReading', title: 'Currently reading'}, {status: 'wantToRead', title: 'Want to read'}]
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    {types.map(type => (
                        <List key={type.status} books={this.filterBooks(type.status)} title={type.title} updateStatus={this.updateStatus}/>
                    ))}
                    <div className="open-search">
                        <a onClick={() => console.log(true)}>Add a book</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
