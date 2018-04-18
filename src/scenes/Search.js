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
            books: [{}]
        }
    }
    
    onChangeSearch(value){
        if(value != ''){
            api.search(value).then(books => {
                this.setState({books});
            })
        }else{
            this.setState({books: [{}]})
        }
    }
    
    render (){
        const { updateShelf } = this.props;
        const { books } = this.state;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.search} onChange={(v) => this.onChangeSearch(v.target.value)}/>
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