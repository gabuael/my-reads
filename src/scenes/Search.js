import React,{Component} from 'react';
import '../App.css';
import List from '../components/List';
import If from '../components/If';
import * as api from '../util/BooksAPI';
import { Link } from 'react-router-dom';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: '',
            books: [{}]
        }
    }

    componentDidUpdate(prevProps) {
        const { books } = this.props;
        const prevBooks = prevProps.books;
    
        if (JSON.stringify(prevBooks) !== JSON.stringify(books) && this.state.query !== '' ) {
          this.updateState(this.state.books);
        }
    }

    updateState(booksResult){
        const { books } = this.props;
        this.setState(() => ({
            books: booksResult.map(b => books.filter(book => book.id === b.id).length > 0 ? books.filter(book => book.id === b.id)[0] : b)
        }));
    }
    
    onChangeSearch(value){
        
        this.setState({query: value})
        api.search(value).then(result => {
            if(!result || result.error){
                this.setState({books: [{}]})
            }else{
                this.updateState(result);
            }
        })
    }
    
    render (){
        const { updateShelf } = this.props;
        const { books, query } = this.state;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(v) => this.onChangeSearch(v.target.value)}/>
                    </div>
                </div>
                <If test={books.length > 1}>
                    <div className="search-books-results">
                        <List books={this.state.books} title={'search'} updateShelf={updateShelf}/>
                    </div>
                </If>
            </div>
        )
    }
    
}

export default Search;